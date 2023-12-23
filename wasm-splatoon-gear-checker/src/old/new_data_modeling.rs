use num_enum::IntoPrimitive;

#[derive(Copy, Clone, IntoPrimitive)]
#[repr(i32)]
enum Ticket {
    InkSaverMain = 0,
    InkSaverSub = 1,
    InkRecoveryUp = 2,
    RunSpeedUp = 3,
    SwimSpeedUp = 4,
    SpecialChargeUp = 5,
    SpecialSaver = 6,
    SpecialPowerUp = 7,
    QuickRespawn = 8,
    QuickSuperJump = 9,
    SubPowerUp =10,
    InkResistanceUp =11,
    SubResistanceUp =12,
    IntensifyAction =13,
    // Invalid = 14,
    NoTicket = 15,
}



