from typing import Any, cast

from starkware.cairo.lang.compiler.program import Program

from protostar.testing.environments.execution_environment import (
    TestExecutionResult,
)

from protostar.testing.cheatcodes.expect_revert_cheatcode import ExpectRevertContext
from protostar.testing.hook import Hook
from protostar.testing.test_context import TestContextHintLocal
from protostar.cheatable_starknet.cheatable_cached_state import CheatableCachedState
from .cairo_execution_environment import CairoExecutionEnvironment

from .cairo_test_execution_state import CairoTestExecutionState
from .cheatcode_factories.cairo_test_cheatcode_factory import CairoTestCheatcodeFactory
from ..cairo import HintLocalsDict


class CairoTestExecutionEnvironment(CairoExecutionEnvironment):
    def __init__(
        self,
        state: CairoTestExecutionState,
        program: Program,
    ):
        super().__init__(
            state=state, program=program, hint_locals=self._get_hint_locals(state)
        )
        self._expect_revert_context = ExpectRevertContext()
        self._finish_hook = Hook()

    async def execute(self, function_name: str) -> Any:
        with self.state.output_recorder.redirect("test"):
            await self.execute_test_case(function_name)
            return TestExecutionResult(execution_resources=None)

    # TODO #1303: Estimate gas if self.state.config.gas_estimation_enabled
    async def execute_test_case(
        self,
        function_name: str,
        *args: Any,
        **kwargs: Any,
    ):
        async with self._expect_revert_context.test():
            async with self._finish_hook.run_after():
                await self.run_cairo_function(function_name, *args, **kwargs)

    def _get_hint_locals(self, state: CairoTestExecutionState) -> HintLocalsDict:
        hint_locals: HintLocalsDict = {}
        cheatcode_factory = CairoTestCheatcodeFactory(
            cheatable_state=cast(CheatableCachedState, state.starknet.state.state),
            project_compiler=state.project_compiler,
        )
        cheatcodes = cheatcode_factory.build_cheatcodes()
        for cheatcode in cheatcodes:
            hint_locals[cheatcode.name] = cheatcode.build()

        custom_hint_locals = [TestContextHintLocal(state.context)]

        for custom_hint_local in custom_hint_locals:
            hint_locals[custom_hint_local.name] = custom_hint_local.build()

        return hint_locals