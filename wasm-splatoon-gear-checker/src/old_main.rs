
/*use std::collections::{HashMap, HashSet};
use serde::{Deserialize, Serialize};
use tsify::{declare, Tsify};
use wasm_bindgen::JsObject;
use wasm_bindgen::prelude::*;
use wasm_bindgen_test::__rt::log;
use wasm_bindgen_test::console_log;
use crate::old::custom_objects::{ExternalGear, GearPlan, InternalGear, SixteenAbilityCombo_Value, TicketCombo_N_Length, TicketSetCombo, TicketValue};
use crate::old::leanny_utils::{get_ability};
use crate::old::leanny_params::{INTERNAL_ABILITY_NAMES, INTERNAL_BRAND_NAMES};
use crate::old::process_single_gear::purify_single_gear;
use crate::old::purify_multiple_gear::purify_all_gear;

#[wasm_bindgen]
pub fn old_purify_multiple_gear_to_js() -> JsValue {
    let gear: InternalGear = InternalGear {
        seed: 0x799474c6,
        brand: INTERNAL_BRAND_NAMES.get("Inkline").unwrap().to_string(),
        desired_abilities: HashSet::from([
            0xFFFFFFFFFFFFF000,
            0xFFFFFFFFFFFFF111,
            0xFFFFFFFFFFFFF222,
            0xFFFFFFFFFFFFF333,
            0xFFFFFFFFFFFFF444,
            0xFFFFFFFFFFFFF555,
            0xFFFFFFFFFFFFF666,
            0xFFFFFFFFFFFFF777,
            0xFFFFFFFFFFFFF888,
            0xFFFFFFFFFFFFF999,
            0xFFFFFFFFFFFFFaaa,
            0xFFFFFFFFFFFFFbbb,
            0xFFFFFFFFFFFFFccc,
            0xFFFFFFFFFFFFFddd,
        ]),
    };
    let allowed_next_drinks: Vec<TicketValue> =
        vec![0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    //let purified_single_gear = purify_single_gear(&gear, 5, &allowed_next_drinks);
    let purified_all_gear = purify_all_gear(vec![gear],20,2,true,allowed_next_drinks);
    let js_serializer =
        serde_wasm_bindgen::Serializer::new().serialize_large_number_types_as_bigints(true);

    return (&purified_all_gear).serialize(&js_serializer).unwrap();
}

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct JsVal<T>(pub T);

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ExternalGearArray(pub Vec<ExternalGear>);

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct DrinkArray(pub Vec<TicketValue>);


#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MultipleGearResult(pub HashMap<TicketCombo_N_Length, Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>>>);
impl MultipleGearResult {//TODO: this should be done using a macro.
fn into_js(&self) -> Result<<Self as Tsify>::JsType, serde_wasm_bindgen::Error>where Self: serde::Serialize,{
    let js_serializer = serde_wasm_bindgen::Serializer::new().serialize_large_number_types_as_bigints(true);
    self.serialize(&js_serializer).map(JsCast::unchecked_from_js)
}
}

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct SingleGearResult(pub Vec<HashMap<SixteenAbilityCombo_Value, Vec<TicketSetCombo>>>);
impl SingleGearResult{//TODO: this should be done using a macro.
fn into_js(&self) -> Result<<Self as Tsify>::JsType, serde_wasm_bindgen::Error>where Self: serde::Serialize,{
    let js_serializer = serde_wasm_bindgen::Serializer::new().serialize_large_number_types_as_bigints(true);
    self.serialize(&js_serializer).map(JsCast::unchecked_from_js)
}
}


#[wasm_bindgen]
pub fn old_purify_all_gear_js(
    ExternalGearArray(gear_array): ExternalGearArray,
    how_far_to_check:i32,//=20,
    depth_limit:i32,//=5,
    always_check_full_depth:bool,//=false,
    DrinkArray(allowed_drinks):DrinkArray//|null = global_allowed_drinks,
) -> MultipleGearResult {

    let gear_list:Vec<InternalGear> = gear_array.into_iter().map(|gear|{
        InternalGear::from_external_gear(gear)
    }).collect();
    let purified_all_gear = purify_all_gear(gear_list,how_far_to_check,depth_limit,always_check_full_depth,allowed_drinks);
    return MultipleGearResult(purified_all_gear);

}
#[wasm_bindgen]
pub fn old_purify_single_gear_js(
    gear: ExternalGear,
    how_far_to_check:i32,//=20,
    DrinkArray(allowed_drinks):DrinkArray//|null = global_allowed_drinks,
) ->SingleGearResult{

    let gear:InternalGear = InternalGear::from_external_gear(gear);
    let mut purified_single_gear = purify_single_gear(&gear, how_far_to_check, &allowed_drinks);
    purified_single_gear.iter_mut().for_each(|map|{
        map.iter_mut().for_each(|(a,b)|{
            b.sort();
        });
    });
    return SingleGearResult(purified_single_gear);

}*/