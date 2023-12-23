use std::str::FromStr;
use serde::{Serialize, Deserialize};
use strum_macros::EnumString;
use tsify::Tsify;
use crate::new_rewrite::custom_objects::ability_types::SubAbility;

pub static SkillEasilyToGetParam: [u32; 3] = [1, 2, 10];


#[derive(Clone, Copy,EnumString, Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi,from_wasm_abi,namespace)]
pub enum Brand {
    B00,
    B01,
    B02,
    B03,
    B04,
    B05,
    B06,
    B07,
    B08,
    B09,
    B10,
    B11,
    B15,
    B16,
    B17,
    B18,
    B19,
    B20,
    B97,
    B98,
    B99,
}


pub struct BrandTraits {
    pub UnusualGearSkill: Option<SubAbility>,
    pub UsualGearSkill: Option<SubAbility>,
}

impl Brand {
    pub fn brand_traits(&self) -> BrandTraits {
        use SubAbility::*;
        use Brand::*;
        match self {
            B00 => BrandTraits {
                UnusualGearSkill: Some(MainInk_Save),
                UsualGearSkill: Some(OpInkEffect_Reduction),
            },
            B01 => BrandTraits {
                UnusualGearSkill: Some(RespawnTime_Save),
                UsualGearSkill: Some(JumpTime_Save),
            },
            B02 => BrandTraits {
                UnusualGearSkill: Some(SubEffect_Reduction),
                UsualGearSkill: Some(SquidMove_Up),
            },
            B03 => BrandTraits {
                UnusualGearSkill: Some(SquidMove_Up),
                UsualGearSkill: Some(HumanMove_Up),
            },
            B04 => BrandTraits {
                UnusualGearSkill: Some(SpecialIncrease_Up),
                UsualGearSkill: Some(RespawnSpecialGauge_Save),
            },
            B05 => BrandTraits {
                UnusualGearSkill: Some(SubInk_Save),
                UsualGearSkill: Some(SpecialSpec_Up),
            },
            B06 => BrandTraits {
                UnusualGearSkill: Some(InkRecovery_Up),
                UsualGearSkill: Some(SubInk_Save),
            },
            B07 => BrandTraits {
                UnusualGearSkill: Some(RespawnSpecialGauge_Save),
                UsualGearSkill: Some(RespawnTime_Save),
            },
            B08 => BrandTraits {
                UnusualGearSkill: Some(HumanMove_Up),
                UsualGearSkill: Some(MainInk_Save),
            },
            B09 => BrandTraits {
                UnusualGearSkill: Some(Action_Up),
                UsualGearSkill: Some(SubEffect_Reduction),
            },
            B10 => BrandTraits {
                UnusualGearSkill: Some(JumpTime_Save),
                UsualGearSkill: Some(InkRecovery_Up),
            },
            B11 => BrandTraits {
                UnusualGearSkill: Some(SpecialSpec_Up),
                UsualGearSkill: Some(SpecialIncrease_Up),
            },
            B15 => BrandTraits {
                UnusualGearSkill: Some(RespawnSpecialGauge_Save),
                UsualGearSkill: Some(SubInk_Save),
            },
            B16 => BrandTraits {
                UnusualGearSkill: Some(OpInkEffect_Reduction),
                UsualGearSkill: Some(SubSpec_Up),
            },
            B17 => BrandTraits {
                UnusualGearSkill: Some(SubSpec_Up),
                UsualGearSkill: Some(MainInk_Save),
            },
            B18 => BrandTraits {
                UnusualGearSkill: Some(InkRecovery_Up),
                UsualGearSkill: Some(RespawnSpecialGauge_Save),
            },
            B19 => BrandTraits {
                UnusualGearSkill: Some(SubSpec_Up),
                UsualGearSkill: Some(Action_Up),
            },
            B20 => BrandTraits {
                UnusualGearSkill: Some(SpecialIncrease_Up),
                UsualGearSkill: Some(Action_Up),
            },
            B97 => BrandTraits {
                UnusualGearSkill: None,
                UsualGearSkill: None,
            },
            B98 => BrandTraits {
                UnusualGearSkill: None,
                UsualGearSkill: None,
            },
            B99 => BrandTraits {
                UnusualGearSkill: None,
                UsualGearSkill: None,
            },
        }
    }
}