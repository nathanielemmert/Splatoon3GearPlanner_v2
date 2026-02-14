#![allow(warnings, unused)]
/*#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(dead_code)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case )]*/
mod old;
mod old_main;
mod js_wrappers;
mod new_rewrite;
pub mod utils;


use std::cell::RefCell;
use std::collections::{HashMap, HashSet};
use std::convert::{TryFrom, TryInto};
use std::rc::Rc;
use std::str::FromStr;
use serde::{Deserialize, Serialize};
use ts_rs::TS;
use tsify::{declare, Tsify};
// use wasm_bindgen::JsObject;
use wasm_bindgen::prelude::*;
use wasm_bindgen_test::__rt::log;
use wasm_bindgen_test::console_log;
// use crate::js_wrappers::{ExternalGear, ExternalGearArray};
use crate::new_rewrite::custom_objects::ability_types::{Drink, SubAbility, Ticket};
use crate::new_rewrite::custom_objects::brand_types::Brand;
use crate::new_rewrite::custom_objects::collection_types::{AbilityCombo, AbilitySet, TicketSet};
use crate::new_rewrite::custom_objects::gear_types::Gear;
use crate::new_rewrite::purify_multiple_gear::gear_category::GearCategory;
use crate::new_rewrite::purify_multiple_gear::gear_purifier::GearPurifier;
use crate::new_rewrite::purify_multiple_gear::multi_gear_result::MultiGearResult;
// use crate::old::custom_objects::{ExternalGear, GearPlan, InternalGear, SixteenAbilityCombo_Value, TicketCombo_N_Length, TicketSetCombo, TicketValue};
use crate::old::leanny_utils::get_ability;
use crate::old::leanny_params::{INTERNAL_ABILITY_NAMES, INTERNAL_BRAND_NAMES};
use crate::old::process_single_gear::purify_single_gear;
use crate::old::purify_multiple_gear::purify_all_gear;
// use crate::old_main::{DrinkArray, MultipleGearResult, old_purify_single_gear_js, SingleGearResult};


#[macro_use]
extern crate lazy_static;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}




/*#[wasm_bindgen]
pub fn new_purify_multiple_gear_to_js() -> JsValue {

    let desired_abilities: HashSet<AbilityCombo> = AbilitySet::ALL.iter().map(|ability|{
        AbilityCombo::from_elem(ability,3)
    }).collect();

    let gear: Gear = Gear {
        allowed_chunks: HashMap::new(),
        max_allowed_chunks: 0,
        id: "".to_string(),
        seed: 0x799474c6,
        brand: Brand::from_str("Inkline").unwrap(),
        desired_abilities,
        how_far_to_check:None
    };

    let depth_limit=2;
    let always_check_full_depth = true;
    let how_far_to_check = 20;


    let internal_allowed_drinks: HashMap<Ticket, i32> = TicketSet::ALL.iter().map(|ticket|{
        return (ticket,i32::MAX)
    }).collect();

    let gear_list:Vec<GearCategory> = vec![ GearCategory::new(vec![gear],how_far_to_check,internal_allowed_drinks.clone())];


    let purified_all_gear = GearPurifier::new(gear_list.clone()).with_setting(depth_limit,always_check_full_depth).purify_all_gear();

    let result:MultipleGearResult =  MultiGearResult::new(purified_all_gear,&gear_list).into();

    let js_serializer =
        serde_wasm_bindgen::Serializer::new().serialize_large_number_types_as_bigints(true);

    return (result).serialize(&js_serializer).unwrap();



}


#[wasm_bindgen]
pub fn purify_all_gear_js(
    ExternalGearArray(gear_array): ExternalGearArray,
    how_far_to_check:i32,//=20,
    depth_limit:i32,//=5,
    always_check_full_depth:bool,//=false,
    DrinkArray(allowed_drinks):DrinkArray//|null = global_allowed_drinks,
) -> MultipleGearResult {

    let internal_allowed_drinks: HashMap<Ticket, i32> = allowed_drinks.iter().map(|drink|{
        let ticket:Ticket = Drink::try_from(*drink).unwrap().into();
        return (ticket,i32::MAX)
    }).collect();

    let gear_list:Vec<GearCategory> = gear_array.into_iter().map(|external_gear|{
        let g:Gear = external_gear.into();
        return GearCategory::new(vec![g],how_far_to_check,internal_allowed_drinks.clone());
    }).collect();


    let purified_all_gear = GearPurifier::new(gear_list.clone()).with_setting(depth_limit,always_check_full_depth).purify_all_gear();

    let result =  MultiGearResult::new(purified_all_gear,&gear_list);



    return result.into();
    /*let purified_all_gear = purify_all_gear(gear_list,how_far_to_check,depth_limit,always_check_full_depth,allowed_drinks);
    return MultipleGearResult(purified_all_gear);*/

}
#[wasm_bindgen]
pub fn purify_single_gear_js(
    gear: ExternalGear,
    how_far_to_check:i32,//=20,
    DrinkArray(allowed_drinks):DrinkArray//|null = global_allowed_drinks,
) ->SingleGearResult{
    let internal_allowed_drinks: HashMap<Ticket, i32> = allowed_drinks.iter().map(|drink|{
        let ticket:Ticket = Drink::try_from(*drink).unwrap().into();
        return (ticket,i32::MAX)
    }).collect();

    let g:Gear = gear.into();

    return g.purify_single_gear(how_far_to_check,internal_allowed_drinks).into();
}


#[derive(TS, Serialize)]
#[ts(export)]
#[wasm_bindgen]
pub enum EnumTest{
    Apple1,
    Apple2,
    Apple3,
    Orangey
}
#[wasm_bindgen]
pub fn enum_test()->EnumTest{
    return EnumTest::Apple1
}


#[wasm_bindgen]
pub fn test_ability(a:Drink)->SubAbility{
    console_log!("Drink: {:?}",a);
    return SubAbility::Action_Up
}


#[wasm_bindgen]
pub fn new_purify_single_gear_js(
    gear: ExternalGear,
    how_far_to_check:i32,//=20,
    DrinkArray(allowed_drinks):DrinkArray//|null = global_allowed_drinks,
) -> crate::new_rewrite::custom_objects::single_gear_result::SingleGearResult{
    let internal_allowed_drinks: HashMap<Ticket, i32> = allowed_drinks.iter().map(|drink|{
        let ticket:Ticket = Drink::try_from(*drink).unwrap().into();
        return (ticket,i32::MAX)
    }).collect();

    let g:Gear = gear.into();

    return g.purify_single_gear(how_far_to_check,internal_allowed_drinks);
}*/




















