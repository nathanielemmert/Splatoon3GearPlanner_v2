use crate::new_rewrite::custom_objects::ability_types::{SubAbility, Ticket};
use crate::new_rewrite::custom_objects::collection_types::{TicketCombo, TicketSet, TicketSetCombo};
use crate::new_rewrite::custom_objects::gear_types::Gear;
use crate::new_rewrite::purify_multiple_gear::gear_category::GearCategory;
use crate::new_rewrite::purify_multiple_gear::gear_search_repr::GearSearchRepr;
use crate::new_rewrite::purify_multiple_gear::gear_simplifier::{GearSimplifier, SimplifiedGear};
use enum_like::EnumValues;
use std::collections::HashSet;
use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen_test::console_log;
use crate::new_rewrite::purify_multiple_gear::multi_gear_result::MultiGearResult;

#[wasm_bindgen]
pub struct GearPurifier {
    gear_categories: Vec<GearCategory>,

    how_far_to_check: i32, //=20,
    depth_limit: i32,
    always_check_full_depth: bool,
    forced_depth_limit:i32,
    allowed_drinks: Vec<Ticket>,
    // ticket_inventory
    // chunk_inventory
}
#[wasm_bindgen]
impl GearPurifier{
    #[wasm_bindgen(constructor)]
    pub fn js_new()->GearPurifier{
        return Self::new(vec![]);
    }
    #[wasm_bindgen(js_name=with_setting)]
    pub fn js_with_setting(mut self, depth_limit: i32, always_check_full_depth: bool, forced_depth_limit:i32) -> GearPurifier {
        self.depth_limit = depth_limit;
        self.always_check_full_depth = always_check_full_depth;
        self.forced_depth_limit=forced_depth_limit;
        return self;
    }
    #[wasm_bindgen(js_name=add_gear_category)]
    pub fn js_add_gear_category(&mut self,gear_category:GearCategory){
        self.gear_categories.push(gear_category);
    }
    #[wasm_bindgen(js_name=purify_all_gear)]
    pub fn js_purify_all_gear(&self)->MultiGearResult{
        let purified_all_gear = self.purify_all_gear();
        let result =  MultiGearResult::new(purified_all_gear,&self.gear_categories);
        return result;
    }
}

impl GearPurifier {
    pub fn new(gear_categories: Vec<GearCategory>) -> GearPurifier {
        return GearPurifier {
            gear_categories,
            how_far_to_check: 20,
            depth_limit: 4,
            forced_depth_limit:4,
            always_check_full_depth: true,
            allowed_drinks: Ticket::values().collect(),
        };
    }
    pub fn with_setting(mut self, depth_limit: i32, always_check_full_depth: bool, forced_depth_limit:i32) -> GearPurifier {
        self.depth_limit = depth_limit;
        self.always_check_full_depth = always_check_full_depth;
        self.forced_depth_limit=forced_depth_limit;
        return self;
    }
}

impl GearPurifier {
    pub fn purify_all_gear(&self) -> Vec<TicketCombo> {
        let all_gear = GearSearchRepr::new(&self.gear_categories);
        return self.purify_all_gear_BFS(all_gear);
    }

    fn purify_all_gear_BFS(&self, mut all_gear: GearSearchRepr) -> Vec<TicketCombo> {
        let mut result: Vec<TicketCombo> = vec![];
        for limit in 0..=self.depth_limit {
            let mut next_result = self.purify_all_gear_DFS(&mut all_gear, limit);
            if next_result.len() > 0 {
                result.append(&mut next_result);
                if self.always_check_full_depth == false
                || (self.always_check_full_depth == true && self.forced_depth_limit<=limit){
                    break;
                }
            }
        }
        return result;
    }

    fn purify_all_gear_DFS(
        &self,
        gear_list: &mut GearSearchRepr,
        depth_limit: i32,
    ) -> Vec<TicketCombo> {
        if depth_limit < 0 {
            return vec![];
        }
        if (!self.always_check_full_depth || depth_limit == 0)
            && gear_list.all_gear_is_already_purified()
        {
            let empty_ticket_combo: TicketCombo = TicketCombo::new();
            return vec![empty_ticket_combo];
        }

        let next_tickets: TicketSet = gear_list.find_needed_tickets();

        /*let mut ticket_combos_that_purify_all_gear: Vec<TicketCombo> = vec![];// TODO: this could be a flat_map

        for next_ticket in next_tickets {
            let next_gear_list:GearSearchRepr = gear_list.apply_ticket_to_all_gear(&next_ticket, &depth_limit);

            if let Some(next_gear_list) = next_gear_list {
                let mut result: Vec<TicketCombo> = self.purify_all_gear_DFS(&next_gear_list, depth_limit - 1);
                if !result.is_empty() {
                    prepend_ticket_to_all_combos(next_ticket, &mut result);
                    ticket_combos_that_purify_all_gear.append(&mut result);
                }
            }
        }*/

        let ticket_combos_that_purify_all_gear: Vec<TicketCombo> = next_tickets
            .iter()
            .flat_map(|next_ticket| {
                let next_gear_list: Option<GearSearchRepr> =
                    gear_list.apply_ticket_to_all_gear(next_ticket, depth_limit);

                if let Some(mut next_gear_list) = next_gear_list {
                    let mut result: Vec<TicketCombo> =
                        self.purify_all_gear_DFS(&mut next_gear_list, depth_limit - 1);
                    if !result.is_empty() {
                        prepend_ticket_to_all_combos(next_ticket, &mut result);
                        return result;
                    }
                }
                return vec![];
            })
            .collect();

        return ticket_combos_that_purify_all_gear;
    }
}

fn prepend_ticket_to_all_combos(ticket: Ticket, combos: &mut Vec<TicketCombo>) {
    //TODO: this might be a good idea to do through copy instead. combos.map combo => [ticket].concat(combo)
    for mut combo in combos {
        combo.insert(0, ticket);
    }
}
