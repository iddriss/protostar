use cheatcodes::TxInfoMockTrait;

#[test]
fn test_start_spoof() {
    let tx_mock = TxInfoMockTrait::default();
    start_spoof(123, tx_mock);
}