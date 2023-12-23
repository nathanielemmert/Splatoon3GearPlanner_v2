
/*
mod utils;

mod leanny_params;
mod custom_objects;
mod leanny_utils;
mod js_wrappers;
mod purify_multiple_gear;*/

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

/*

#[wasm_bindgen]
pub fn purify_all_gear_js(
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
pub fn purify_single_gear_js(
    gear: ExternalGear,
    how_far_to_check:i32,//=20,
    DrinkArray(allowed_drinks):DrinkArray//|null = global_allowed_drinks,
) ->SingleGearResult{

    let gear:InternalGear = InternalGear::from_external_gear(gear);
    let purified_single_gear = purify_single_gear(&gear, how_far_to_check,  &allowed_drinks);
    return SingleGearResult(purified_single_gear);

}

*/

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, untitled4!");
}


