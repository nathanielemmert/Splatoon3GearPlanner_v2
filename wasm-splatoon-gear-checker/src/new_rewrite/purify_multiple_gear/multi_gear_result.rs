use std::collections::{BTreeMap, HashMap};
use derivative::Derivative;
use serde::Serialize;
use serde_with::serde_as;
use tsify::{declare, Tsify};
use wasm_bindgen::prelude::wasm_bindgen;
use crate::new_rewrite::custom_objects::collection_types::{AbilityCombo, AbilityCombo_key, TicketCombo, TicketSetCombo};
use crate::new_rewrite::custom_objects::gear_types::GearSlot;
use crate::new_rewrite::purify_multiple_gear::gear_category::GearCategory;
use serde_with::FromInto;
use crate::new_rewrite::custom_objects::ability_types::{SubAbility, Ticket};

//type TicketComboResult = Vec<Vec<>>
// for each gear category, for each gear in the category,

// what are the ways to purify that specific gear with that specific ticket combo?
// In the old program it was called GearPlan.
// In the new program, actual_ticket_combo also has to factor in chunks.
// HashMap<AbilityCombo, (soonest_index, actual_ticket_combo)>



// if i ever implement partial updates, instead of Vec<Vec<>>, they sould both be hashmaps,
// with the keys being an id for each gearCategory, and each gear.
#[declare]
pub type TicketComboPurifyResult = Vec<Vec<BTreeMap<AbilityCombo_key, SummarizedGearPurifyPlan>>>;

#[derive(Clone, Serialize, Tsify, Derivative)]
#[derivative(PartialEq,Eq, Hash)]
pub struct SummarizedGearPurifyPlan{
    pub soonest_index:i32,
    pub chunks_used:BTreeMap<SubAbility, i32>,
    #[derivative(Hash="ignore")]
    #[derivative(PartialEq="ignore")]
    pub actual_ticket_combo:[GearSlot;3]
}

impl SummarizedGearPurifyPlan{
    pub fn new(soonest_index:i32, chunks_used:BTreeMap<SubAbility, i32>, actual_ticket_combo:[GearSlot;3])->SummarizedGearPurifyPlan{
        return SummarizedGearPurifyPlan{soonest_index,chunks_used, actual_ticket_combo};
    }
}



//TODO: in theory, i dont care what the actual ticket combo is.
// two SingleGearPurifyPlans should be equal if they have the same soonest_index, and use the same number/type of chunks.
// however, this doesnt fit into my current UI model.
/*#[derive(Eq, PartialEq, Hash, Clone, Serialize, Tsify)]
pub struct SingleGearPurifyPlan{
    pub soonest_index:i32,
    pub actual_ticket_combo:[GearSlot;3]
}

impl SingleGearPurifyPlan{
    pub fn new(soonest_index:i32, actual_ticket_combo:[GearSlot;3])->SingleGearPurifyPlan{
        return SingleGearPurifyPlan{soonest_index,actual_ticket_combo};
    }
}*/

#[serde_as]
#[derive(Tsify, Serialize)]
#[tsify(into_wasm_abi)]
pub struct MultiGearResult{
    #[serde_as(as = "Vec<FromInto<Vec<Ticket>>>")]
    pub ticket_combos:Vec<TicketCombo>,

    #[serde_as(as = "HashMap<_,HashMap<FromInto<Vec<Ticket>>,_>>")]
    pub result_table:HashMap<TicketComboPurifyResult,HashMap<TicketCombo,TicketComboPurifyResult>>
}

impl MultiGearResult{
    //TODO: ticket_combos MUST be in sorted order for this to work.
    pub fn new(ticket_combos:Vec<TicketCombo>, gear_categories:&Vec<GearCategory>)->MultiGearResult{
        return MultiGearResult{
            result_table: Self::list_ticket_combo_result_for_each_ticket_combo(ticket_combos.clone(), gear_categories),
            ticket_combos,
        }
    }
}

impl MultiGearResult{
    fn list_ticket_combo_result_for_each_ticket_combo(
        ticket_combos: Vec<TicketCombo>,
        gear_categories : &Vec<GearCategory>
    )-> HashMap<TicketComboPurifyResult,HashMap<TicketCombo,TicketComboPurifyResult>>{
        let mut result:HashMap<TicketComboPurifyResult,HashMap<TicketCombo,TicketComboPurifyResult>> = HashMap::new();

        for ticket_combo in ticket_combos{
            let ticket_combo_result: TicketComboPurifyResult = Self::list_ticket_combo_result_for_each_gear_category(ticket_combo.clone(),gear_categories);
            //result.entry(ticket_combo_result).or_insert(Vec::new()).push(ticket_combo);
            let x = result
                .entry(ticket_combo_result.clone())
                .or_insert(HashMap::new())
                .insert(ticket_combo,ticket_combo_result);

        }
        return result;
    }

    fn list_ticket_combo_result_for_each_gear_category(
        ticket_combo: TicketCombo,
        gear_categories : &Vec<GearCategory>
    )-> TicketComboPurifyResult {
        return gear_categories.iter().map(|gear_category|{
            return gear_category.purify_with_ticket_combo(ticket_combo.clone());
        }).collect();
    }
}








