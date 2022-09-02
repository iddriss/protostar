from typing import List

from starkware.starknet.business_logic.execution.objects import CallInfo

from protostar.commands.test.cheatcodes import GivenCheatcode
from protostar.commands.test.environments.setup_execution_environment import (
    SetupExecutionEnvironment,
    SetupCheatcodeFactory,
)
from protostar.commands.test.fuzzing.strategies import StrategiesHintLocal
from protostar.starknet.cheatcode import Cheatcode
from protostar.starknet.hint_local import HintLocal


class SetupCaseExecutionEnvironment(SetupExecutionEnvironment):
    async def invoke(self, function_name: str):
        self.set_cheatcodes(SetupCaseCheatcodeFactory(self.state))

        with self.state.output_recorder.redirect("setup case"):
            await self.perform_invoke(function_name)


class SetupCaseCheatcodeFactory(SetupCheatcodeFactory):
    def build_cheatcodes(
        self,
        syscall_dependencies: Cheatcode.SyscallDependencies,
        internal_calls: List[CallInfo],
    ) -> List[Cheatcode]:
        return [
            *super().build_cheatcodes(syscall_dependencies, internal_calls),
            GivenCheatcode(syscall_dependencies, self._state.config),
        ]

    def build_hint_locals(self) -> List[HintLocal]:
        return [
            *super().build_hint_locals(),
            StrategiesHintLocal(),
        ]