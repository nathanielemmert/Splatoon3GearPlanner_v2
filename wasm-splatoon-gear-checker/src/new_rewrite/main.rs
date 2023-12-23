#![allow(non_camel_case_types)]
#![allow(dead_code)]
#![allow(unused_imports)]

/*mod utils;
mod leanny_params;
mod leanny_utils;
mod custom_objects;
mod js_wrappers;
mod purify_multiple_gear;*/

use custom_objects::ability_types::{SubAbility};
use custom_objects::collection_types::{};
use crate::custom_objects::ability_types::{Drink, Ticket};
use crate::custom_objects::ability_types::Ticket::{Action_Up, SubEffect_Reduction};
use crate::custom_objects::brand_types::Brand;
use crate::custom_objects::collection_types::AbilityCombo;
use crate::leanny_utils::{advance_seed, get_ability, get_branded_ability};


fn main() {

    /*let mut seed = 0x1;
    let brand = Brand::B00;

    for i in 0..50{
        println!("{:?}", get_ability(seed, brand, Drink::None));
        seed = advance_seed(seed);
    }*/

    let mut combo:AbilityCombo = AbilityCombo::new();
    combo.push(SubAbility::Action_Up);

    use Ticket::*;

    println!("{:#b}", (Action_Up|SubEffect_Reduction|MainInk_Save).as_repr());


}