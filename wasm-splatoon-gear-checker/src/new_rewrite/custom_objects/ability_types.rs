use std::convert::{TryFrom, TryInto};
use enum_iterator::{Sequence};
use enum_like_derive::EnumLike;
use enumset::EnumSetType;
use strum_macros::EnumIter;
use strum::IntoEnumIterator;

use num_enum::{FromPrimitive, TryFromPrimitive};
use serde::{Deserialize, Serialize};
use serde_repr::{Deserialize_repr, Serialize_repr};
use tsify::Tsify;
use wasm_bindgen::describe::WasmDescribe;
use wasm_bindgen::prelude::wasm_bindgen;

#[derive(Debug, Ord, PartialOrd,   Hash, EnumIter, TryFromPrimitive, EnumLike, EnumSetType, Tsify,Serialize_repr, Deserialize_repr)]
#[tsify(into_wasm_abi, from_wasm_abi)]
#[enumset(serialize_repr = "list")]
#[repr(u8)]
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





impl PartialEq<Drink> for SubAbility {
    fn eq(&self, other: &Drink) -> bool {

        return (*self as u32) == (*other as u32)
    }
}

impl TryFrom<Drink> for SubAbility{
    type Error = <Self as TryFrom<u8>>::Error;

    fn try_from(drink: Drink) -> Result<Self, Self::Error> {
        return Self::try_from(drink as u8);
    }
}



impl SubAbility{
    pub const InkSaverMain:SubAbility = SubAbility::MainInk_Save;
    pub const InkSaverSub:SubAbility = SubAbility::SubInk_Save;
    pub const InkRecoveryUp:SubAbility = SubAbility::InkRecovery_Up;
    pub const RunSpeedUp:SubAbility = SubAbility::HumanMove_Up;
    pub const SwimSpeedUp:SubAbility = SubAbility::SquidMove_Up;
    pub const SpecialChargeUp:SubAbility = SubAbility::SpecialIncrease_Up;
    pub const SpecialSaver:SubAbility = SubAbility::RespawnSpecialGauge_Save;
    pub const SpecialPowerUp:SubAbility = SubAbility::SpecialSpec_Up;
    pub const QuickRespawn:SubAbility = SubAbility::RespawnTime_Save;
    pub const QuickSuperJump:SubAbility = SubAbility::JumpTime_Save;
    pub const SubPowerUp:SubAbility = SubAbility::SubSpec_Up;
    pub const InkResistanceUp:SubAbility = SubAbility::OpInkEffect_Reduction;
    pub const SubResistanceUp:SubAbility = SubAbility::SubEffect_Reduction;
    pub const IntensifyAction:SubAbility = SubAbility::Action_Up;
}

#[derive(Debug, Ord, PartialOrd, EnumIter, EnumLike, EnumSetType, Hash, TryFromPrimitive,Tsify,Serialize_repr, Deserialize_repr)]
#[tsify(into_wasm_abi, from_wasm_abi)]
#[enumset(repr = "u16")]
#[enumset(serialize_repr = "list")]
#[repr(u8)]
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

impl From<Drink> for Ticket{
    fn from(value: Drink) -> Self {
        match value{
            Drink::None=>Ticket::None,
            other=>Ticket::try_from_primitive(value as u8).unwrap()
        }
    }
}




#[derive(Debug, Copy, Clone, Eq, PartialEq, Ord, PartialOrd, EnumIter, EnumLike,TryFromPrimitive,Tsify,Serialize_repr, Deserialize_repr)]
#[tsify(into_wasm_abi, from_wasm_abi)]
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
}




impl From<Ticket> for Drink{
    fn from(value: Ticket) -> Self {
        match value{
            Ticket::None=>Drink::None,
            other=>Drink::try_from_primitive(value as u32).unwrap()
        }
    }
}

impl PartialEq<u32> for Drink{
    fn eq(&self, other: &u32) -> bool {
        return (*self as u32) == *other;
    }
}

#[derive(Debug, Ord, PartialOrd, Eq, PartialEq, Clone, Copy, EnumIter, EnumLike)]
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

impl MainAbility{
    pub fn kind(&self)->MainAbilityKind{
        use MainAbilityKind::{Sub,MainExclusive};
        use GearType::{Head, Clothes, Shoes};
        match self {
            MainAbility::MainInk_Save => {Sub}
            MainAbility::SubInk_Save => {Sub}
            MainAbility::InkRecovery_Up => {Sub}
            MainAbility::HumanMove_Up => {Sub}
            MainAbility::SquidMove_Up => {Sub}
            MainAbility::SpecialIncrease_Up => {Sub}
            MainAbility::RespawnSpecialGauge_Save => {Sub}
            MainAbility::SpecialSpec_Up => {Sub}
            MainAbility::RespawnTime_Save => {Sub}
            MainAbility::JumpTime_Save => {Sub}
            MainAbility::SubSpec_Up => {Sub}
            MainAbility::OpInkEffect_Reduction => {Sub}
            MainAbility::SubEffect_Reduction => {Sub}
            MainAbility::Action_Up => {Sub}


            MainAbility::StartAllUp => {MainExclusive(Head)}
            MainAbility::EndAllUp => {MainExclusive(Head)}
            MainAbility::MinorityUp => {MainExclusive(Head)}
            MainAbility::ComeBack => {MainExclusive(Head)}

            MainAbility::SquidMoveSpatter_Reduction => {MainExclusive(Clothes)}
            MainAbility::DeathMarking => {MainExclusive(Clothes)}
            MainAbility::ThermalInk => {MainExclusive(Clothes)}
            MainAbility::Exorcist => {MainExclusive(Clothes)}

            MainAbility::SuperJumpSign_Hide => {MainExclusive(Shoes)}
            MainAbility::ObjectEffect_Up => {MainExclusive(Shoes)}
            MainAbility::SomersaultLanding => {MainExclusive(Shoes)}
        }
    }
}

pub enum GearType{
    Head,
    Clothes,
    Shoes
}

pub enum MainAbilityKind{
    Sub,
    MainExclusive(GearType)
}



pub fn test_enum(){

}

/*enum MainAbility{
    SubAbility(SubAbility),
    MainAbility()
}*/










/*
#[derive(Copy, Clone, IntoPrimitive, TryFromPrimitive, Debug)]
#[repr(u32)]
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
    #[num_enum(alternatives=[0xfffffff])]
    NoTicket = 0xf,
}

#[derive(Copy, Clone, IntoPrimitive, TryFromPrimitive, Debug)]
#[repr(u32)]
enum Drink {
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
    #[num_enum(alternatives=[0xf])]
    NoTicket = 0xffffffff,
}

#[derive(Copy, Clone, IntoPrimitive, TryFromPrimitive, Debug)]
#[repr(u32)]
enum Ability {
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
}*/


/*use num_enum::{IntoPrimitive, TryFromPrimitive};

#[derive(Debug)]
pub enum SubAbility {
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
}
#[derive(Debug)]
pub enum HeadAbility{
    StartAllUp                 = 100,
    EndAllUp                   = 101,
    MinorityUp                 = 102,
    ComeBack                   = 103,
}
#[derive(Debug)]
pub enum ClothesAbility{
    SquidMoveSpatter_Reduction = 104,
    DeathMarking               = 105,
    ThermalInk                 = 106,
    Exorcist                   = 107,
}
#[derive(Debug)]
pub enum ShoesAbility{
    SuperJumpSign_Hide         = 109,
    ObjectEffect_Up            = 110,
    SomersaultLanding          = 111
}
#[derive(Debug)]
pub enum ExclusiveAbility{
    Head(HeadAbility),
    Clothes(ClothesAbility),
    Shoes(ShoesAbility)
}

#[derive(Debug)]
pub enum MainAbility{
    Exclusive(ExclusiveAbility),
    Sub(SubAbility),
}

pub fn test_enum(){
    let x = MainAbility::Exclusive(
        ExclusiveAbility::Clothes(
            ClothesAbility::DeathMarking
        )
    );

    match x {
        MainAbility::Exclusive(e) => {
            match e {
                ExclusiveAbility::Head(e2) => {}
                ExclusiveAbility::Clothes(e2) => {
                    println!("{:?}",x);
                }
                ExclusiveAbility::Shoes(e2) => {}
            }
        }
        MainAbility::Sub(_) => {}
    }

}

/*enum MainAbility{
    SubAbility(SubAbility),
    MainAbility()
}*/










/*
#[derive(Copy, Clone, IntoPrimitive, TryFromPrimitive, Debug)]
#[repr(u32)]
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
    #[num_enum(alternatives=[0xfffffff])]
    NoTicket = 0xf,
}

#[derive(Copy, Clone, IntoPrimitive, TryFromPrimitive, Debug)]
#[repr(u32)]
enum Drink {
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
    #[num_enum(alternatives=[0xf])]
    NoTicket = 0xffffffff,
}

#[derive(Copy, Clone, IntoPrimitive, TryFromPrimitive, Debug)]
#[repr(u32)]
enum Ability {
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
}*/*/