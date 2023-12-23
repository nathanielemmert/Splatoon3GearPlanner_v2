/*use std::collections::HashSet;
use crate::new_rewrite::custom_objects::brand_types::Brand;
use crate::new_rewrite::custom_objects::collection_types::AbilityCombo;
use crate::new_rewrite::custom_objects::gear_types::Gear;
use crate::new_rewrite::leanny_utils::GearSeed;


pub struct ExternalGear{
    pub seed:u32,
    pub brand:String,
    pub desired_abilities:Vec<Vec<u32>>
}

pub type ExternalTicketValue = u32;


pub fn purify_all_gear_js(
    external_gear_array: Vec<Gear>,
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




/*#[wasm_bindgen]
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
/*#[wasm_bindgen]*/
pub fn purify_single_gear_js(
    gear: ExternalGear,
    how_far_to_check:i32,//=20,
    DrinkArray(allowed_drinks):DrinkArray//|null = global_allowed_drinks,
) ->SingleGearResult{

    let gear:InternalGear = InternalGear::from_external_gear(gear);
    let purified_single_gear = purify_single_gear(&gear, how_far_to_check,  &allowed_drinks);
    return SingleGearResult(purified_single_gear);

}*/



/*pub struct Gear{
    pub seed: GearSeed,
    pub brand: Brand,
    pub desired_abilities: HashSet <AbilityCombo>,
    pub id:String,
    pub allowed_chunks
}*/*/