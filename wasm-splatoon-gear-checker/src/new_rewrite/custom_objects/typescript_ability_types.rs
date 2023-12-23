use tsify::declare;
use wasm_bindgen::prelude::wasm_bindgen;


// These enum definitions are only used to generate a typescript file, they should not be used in rust code.
// They should match the definitions in ability_types.rs

#[wasm_bindgen]
pub enum SubAbility {
    MainInk_Save = 0,
    SubInk_Save = 1,
    InkRecovery_Up = 2,
    HumanMove_Up = 3,
    SquidMove_Up = 4,
    SpecialIncrease_Up = 5,
    RespawnSpecialGauge_Save = 6,
    SpecialSpec_Up = 7,
    RespawnTime_Save = 8,
    JumpTime_Save = 9,
    SubSpec_Up =10,
    OpInkEffect_Reduction =11,
    SubEffect_Reduction =12,
    Action_Up =13,
}

#[wasm_bindgen]
pub enum Ticket{
   MainInk_Save = 0,
   SubInk_Save = 1,
   InkRecovery_Up = 2,
   HumanMove_Up = 3,
   SquidMove_Up = 4,
   SpecialIncrease_Up = 5,
   RespawnSpecialGauge_Save = 6,
   SpecialSpec_Up = 7,
   RespawnTime_Save = 8,
   JumpTime_Save = 9,
   SubSpec_Up =10,
   OpInkEffect_Reduction =11,
   SubEffect_Reduction =12,
   Action_Up =13,
   None = 0xf
}


/*#[wasm_bindgen]
#[repr(u32)]
pub enum Drink{
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
    None = 0xffffffff
}*/

#[wasm_bindgen]
pub enum LeannyDrink{
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
    None = 0xff
}

#[wasm_bindgen]
pub enum LeannySubAbility{
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
    None = 0xff
}

#[wasm_bindgen]
pub enum MainAbility {
    MainInk_Save = 0,
    SubInk_Save = 1,
    InkRecovery_Up = 2,
    HumanMove_Up = 3,
    SquidMove_Up = 4,
    SpecialIncrease_Up = 5,
    RespawnSpecialGauge_Save = 6,
    SpecialSpec_Up = 7,
    RespawnTime_Save = 8,
    JumpTime_Save = 9,
    SubSpec_Up =10,
    OpInkEffect_Reduction =11,
    SubEffect_Reduction =12,
    Action_Up =13,

    StartAllUp                 = 100,
    EndAllUp                   = 101,
    MinorityUp                 = 102,
    ComeBack                   = 103,

    SquidMoveSpatter_Reduction = 104,
    DeathMarking               = 105,
    ThermalInk                 = 106,
    Exorcist                   = 107,

    SuperJumpSign_Hide         = 109,
    ObjectEffect_Up            = 110,
    SomersaultLanding          = 111
}

#[declare]
type TicketCombo = Vec<Ticket>;


#[declare]
type AbilityCombo = Vec<SubAbility>;

#[declare]
type TicketSet = Vec<Ticket>;