use std::collections::{BTreeMap, HashMap};
use serde::{Deserialize, Serialize};
use tsify::Tsify;
use wasm_bindgen::prelude::wasm_bindgen;
use crate::new_rewrite::custom_objects::ability_types::Ticket;
use crate::new_rewrite::custom_objects::collection_types::{AbilityCombo, AbilityCombo_key, TicketCombo, TicketSet, TicketSetCombo};
use crate::new_rewrite::custom_objects::gear_types::{AllowedDrinks, Gear, GearSlotSet, GearSlotSetCombo};
use crate::new_rewrite::custom_objects::single_gear_result::SingleGearResult;
use crate::new_rewrite::purify_multiple_gear::gear_simplifier::SimplifiedGear;
use crate::new_rewrite::purify_multiple_gear::multi_gear_result::{ SummarizedGearPurifyPlan};

//TODO: GearCategory::new()

/*#[derive(Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi,)]
pub struct VecGear(pub Vec<Gear>);*/

#[wasm_bindgen]
#[derive(Clone)]
pub struct GearCategory{
     gears: Vec<Gear>,
     purified_gears:Vec<SingleGearResult>
}
#[wasm_bindgen]
impl GearCategory{
     #[wasm_bindgen(constructor)]
     pub fn js_new()->GearCategory{
          return GearCategory{gears:vec![], purified_gears:vec![]};
     }

     #[wasm_bindgen(js_name="add_gear_to_category")]
     pub fn js_add_gear_to_category(
          &mut self,
          gear:&Gear,
          global_how_far_to_check: i32,
          AllowedDrinks(allowed_drinks): AllowedDrinks
     ){
          let purified_gear = gear.purify_single_gear(global_how_far_to_check,allowed_drinks.clone());
          self.gears.push(gear.clone());
          self.purified_gears.push(purified_gear);
     }

     pub(crate) fn new(
          gears:Vec<Gear>,
          how_far_to_check: i32,
          allowed_drinks: HashMap<Ticket, i32>
     )->GearCategory{
          let purified_gears:Vec<SingleGearResult> = gears.iter().map(|gear|{
               gear.purify_single_gear(how_far_to_check,allowed_drinks.clone())
          }).collect();
          return GearCategory{
               gears,
               purified_gears
          }
     }
}

impl GearCategory{
     pub fn get_all_ticket_set_combos(&self)->Vec<TicketSetCombo>{
          return self.purified_gears.iter().flat_map(|gear|{
               return gear.to_ticketsetcombo_array();
          }).collect();
     }

}

//MultiGearResult
impl GearCategory{
     pub fn purify_with_ticket_combo(&self, ticket_combo:TicketCombo)->Vec<BTreeMap<AbilityCombo_key, SummarizedGearPurifyPlan>>{
          return self.purified_gears.iter().map(|single_gear_result|{
               return single_gear_result.purify_gear_with_ticket_combo(ticket_combo.clone());
          }).collect();
     }
}















