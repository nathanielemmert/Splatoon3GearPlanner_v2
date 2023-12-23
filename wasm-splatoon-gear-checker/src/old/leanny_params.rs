
use std::collections::HashMap;
lazy_static! {
pub static ref INTERNAL_BRAND_NAMES: HashMap<&'static str, &'static str> =
    HashMap::from([
        ("SquidForce", "B00"),
        ("Zink", "B01"),
        ("Krak-On", "B02"),
        ("Rockenberg", "B03"),
        ("Zekko", "B04"),
        ("Forge", "B05"),
        ("Firefin", "B06"),
        ("Skalop", "B07"),
        ("Splash Mob", "B08"),
        ("Inkline", "B09"),
        ("Tentatek", "B10"),
        ("Takoroka", "B11"),
        ("Annaki", "B15"),
        ("Enperry", "B16"),
        ("Toni Kensa", "B17"),
        ("Barazushi", "B19"),
        ("Emberz", "B20"),
        ("Grizzco", "B97"),
        ("Cuttlegear", "B98"),
        ("amiibo", "B99"),
    ]);
}

lazy_static! {
pub static ref  BRAND_TRAITS: HashMap<&'static str, HashMap<&'static str, &'static str>> =
    HashMap::from([
        ("B00", HashMap::from([
            ("UnusualGearSkill", "MainInk_Save"),
            ("UsualGearSkill", "OpInkEffect_Reduction")])
        ),
        (
            "B01", HashMap::from([
            ("UnusualGearSkill", "RespawnTime_Save"),
            ("UsualGearSkill", "JumpTime_Save")])
        ),
        (
            "B02", HashMap::from([
            ("UnusualGearSkill", "SubEffect_Reduction"),
            ("UsualGearSkill", "SquidMove_Up")])
        ),
        (
            "B03", HashMap::from([
            ("UnusualGearSkill", "SquidMove_Up"),
            ("UsualGearSkill", "HumanMove_Up")])
        ),
        (
            "B04", HashMap::from([
            ("UnusualGearSkill", "SpecialIncrease_Up"),
            ("UsualGearSkill", "RespawnSpecialGauge_Save")])
        ),
        (
            "B05", HashMap::from([
            ("UnusualGearSkill", "SubInk_Save"),
            ("UsualGearSkill", "SpecialSpec_Up")])
        ),
        (
            "B06", HashMap::from([
            ("UnusualGearSkill", "InkRecovery_Up"),
            ("UsualGearSkill", "SubInk_Save")])
        ),
        (
            "B07", HashMap::from([
            ("UnusualGearSkill", "RespawnSpecialGauge_Save"),
            ("UsualGearSkill", "RespawnTime_Save")])
        ),
        (
            "B08", HashMap::from([
            ("UnusualGearSkill", "HumanMove_Up"),
            ("UsualGearSkill", "MainInk_Save")])
        ),
        (
            "B09", HashMap::from([
            ("UnusualGearSkill", "Action_Up"),
            ("UsualGearSkill", "SubEffect_Reduction")])
        ),
        (
            "B10", HashMap::from([
            ("UnusualGearSkill", "JumpTime_Save"),
            ("UsualGearSkill", "InkRecovery_Up")])
        ),
        (
            "B11", HashMap::from([
            ("UnusualGearSkill", "SpecialSpec_Up"),
            ("UsualGearSkill", "SpecialIncrease_Up")])
        ),
        (
            "B15", HashMap::from([
            ("UnusualGearSkill", "RespawnSpecialGauge_Save"),
            ("UsualGearSkill", "SubInk_Save")])
        ),
        (
            "B16", HashMap::from([
            ("UnusualGearSkill", "OpInkEffect_Reduction"),
            ("UsualGearSkill", "SubSpec_Up")])
        ),
        (
            "B17", HashMap::from([
            ("UnusualGearSkill", "SubSpec_Up"),
            ("UsualGearSkill", "MainInk_Save")])
        ),
        (
            "B18", HashMap::from([
            ("UnusualGearSkill", "InkRecovery_Up"),
            ("UsualGearSkill", "RespawnSpecialGauge_Save")])
        ),
        (
            "B19", HashMap::from([
            ("UnusualGearSkill", "SubSpec_Up"),
            ("UsualGearSkill", "Action_Up")])
        ),
        (
            "B20", HashMap::from([
            ("UnusualGearSkill", "SpecialIncrease_Up"),
            ("UsualGearSkill", "Action_Up")])
        ),
        (
            "B97", HashMap::from([
            ("UnusualGearSkill", "None"),
            ("UsualGearSkill", "None")])
        ),
        (
            "B98", HashMap::from([
            ("UnusualGearSkill", "None"),
            ("UsualGearSkill", "None")])
        ),
        (
            "B99", HashMap::from([
            ("UnusualGearSkill", "None"),
            ("UsualGearSkill", "None")])
        )
    ]);
}


lazy_static!{
    pub static ref SKILL_EASILY_TO_GET_PARAM: Vec<u32> = vec![1, 2, 10];
}

/*struct BrandData{
    std::map<string, std::map<string, string>> Traits = BRAND_TRAITS;
    int SKILL_EASILY_TO_GET_PARAM[3] = {1,2,5};
} brand_data;*/


lazy_static!{
    pub static ref INTERNAL_ABILITY_NAMES:Vec<&'static str> = vec![
        "MainInk_Save",
        "SubInk_Save",
        "InkRecovery_Up",
        "HumanMove_Up",
        "SquidMove_Up",
        "SpecialIncrease_Up",
        "RespawnSpecialGauge_Save",
        "SpecialSpec_Up",
        "RespawnTime_Save",
        "JumpTime_Save",
        "SubSpec_Up",
        "OpInkEffect_Reduction",
        "SubEffect_Reduction",
        "Action_Up"
    ];
}