/*use std::collections::{BTreeMap, HashMap, HashSet};
use std::convert::{TryFrom, TryInto};
use std::str::FromStr;
use serde::{Deserialize, Serialize};
use tsify::Tsify;
use crate::new_rewrite::custom_objects::ability_types::SubAbility;
use crate::new_rewrite::custom_objects::brand_types::Brand;
use crate::new_rewrite::custom_objects::collection_types::{AbilityCombo, AbilityCombo_key, TicketCombo, TicketSet};
use crate::new_rewrite::custom_objects::gear_types::{Gear, GearSlot, GearSlotSet, GearSlotSetCombo};
use crate::new_rewrite::custom_objects::single_gear_result::SingleGearResult as new_SingleGearResult;
use crate::new_rewrite::purify_multiple_gear::multi_gear_result::{MultiGearResult, TicketComboPurifyResult};
use crate::old_main::{MultipleGearResult, SingleGearResult};

use crate::old::custom_objects::{
    SixteenAbilityCombo,
    Ability as old_Ability,
    Ticket as old_Ticket,
    TicketCombo as old_TicketCombo,
    TicketSet as old_TicketSet,
    TicketSetCombo as old_TicketSetCombo,
    GearPlan, SixteenAbilityCombo_Value, TicketCombo_N_Length,
};

#[derive(Tsify, Debug, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ExternalGear{
    pub seed:u32,
    pub brand:String,
    pub desired_abilities:Vec<Vec<u32>>
}

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ExternalGearArray(pub Vec<ExternalGear>);

impl Into<Gear> for ExternalGear{
    fn into(self) -> Gear {
        return Gear{
            id: "".to_string(),
            seed: self.seed,
            brand: Brand::from_str(&self.brand).unwrap(),
            desired_abilities: get_desired_abilities(self.desired_abilities),
            allowed_chunks: HashMap::new(),
            max_allowed_chunks: 0,
            how_far_to_check:None
        }
    }
}

pub fn get_desired_abilities(external_desired_abilities:Vec<Vec<u32>>)->HashSet<AbilityCombo>{
    return external_desired_abilities.iter().map(|ability_combo|{
        return ability_combo.iter().map(|ability|{
            SubAbility::try_from(*ability as u8).unwrap()
        }).collect::<AbilityCombo>();
    }).collect::<HashSet<AbilityCombo>>();

}

pub fn get_SixteenAbilityCombo_Value(ability_combo:&AbilityCombo)->u64{

    let ability_combo:Vec<old_Ability> =ability_combo.iter().map(|ability|{
        return old_Ability::from(ability as u32);
    }).collect();

    return SixteenAbilityCombo::from_abilities(ability_combo).value;

}
pub fn key_get_SixteenAbilityCombo_Value(ability_combo:&AbilityCombo_key)->u64{

    let ability_combo:Vec<old_Ability> =ability_combo.iter().map(|&ability|{
        return old_Ability::from(ability as u32);
    }).collect();

    return SixteenAbilityCombo::from_abilities(ability_combo).value;

}

pub fn get_TicketCombo_N_Length(ticket_combo:&TicketCombo)->u64{
    let ticket_combo:Vec<old_Ticket> =ticket_combo.iter().map(|ticket|{
        return old_Ticket::from(&(ticket as u32));
    }).collect();

    return SixteenAbilityCombo::from_ability_values(
        &ticket_combo.iter().map(|t|t.value).collect()
    ).value;
}













// pub struct GearPlan{
//     pub soonest_index: i32,
//     pub(crate) actual_ticket_combo: TicketCombo//TicketCombo
// }

//pub struct SingleGearPurifyPlan{
//     pub soonest_index:i32,
//     pub actual_ticket_combo:[GearSlot;3]
// }

pub fn convert_SingleGearPurifyPlan(purify_plan:&SingleGearPurifyPlan)->Option<GearPlan>{

    let mut actual_ticket_combo:old_TicketCombo = old_TicketCombo::new();

    for gear_slot in &purify_plan.actual_ticket_combo{
        if let GearSlot::Ticket(ticket) = gear_slot{
            actual_ticket_combo.push(old_Ticket::from(&(*ticket as u32)))
        }
        else{
            return None
        }
    }

    return Some(GearPlan{
        actual_ticket_combo,
        soonest_index:purify_plan.soonest_index
    })
}


pub fn convert_TicketComboPurifyResult(
    ticket_combo_purify_result:&Vec<Vec<BTreeMap<AbilityCombo_key, SingleGearPurifyPlan>>>
)->Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>>{

    let mut result: Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>> = Vec::new();

    for category in ticket_combo_purify_result.iter().cloned(){
        let gear = &category[0];
        let mut gear_result: HashMap<SixteenAbilityCombo_Value, GearPlan> = HashMap::new();

        for (ability_combo,purify_plan) in gear{
            if let Some(gear_plan) = convert_SingleGearPurifyPlan(purify_plan){
                gear_result.insert(
                    key_get_SixteenAbilityCombo_Value(ability_combo),
                    gear_plan
                );
            }
        }
        result.push(gear_result);
    }
    return result;
}
impl Into<MultipleGearResult> for MultiGearResult{
    fn into(self) -> MultipleGearResult {
        //pub type SixteenAbilityCombo_Value = u64;
        //pub type TicketCombo_N_Length = SixteenAbilityCombo_Value;

        //type MultiGearResult = HashMap<TicketComboPurifyResult,Vec<TicketCombo>>
        //type TicketComboPurifyResult = Vec<Vec<BTreeMap<AbilityCombo_key, SingleGearPurifyPlan>>>;



        let x = self.result_table;
        let mut result: HashMap<TicketCombo_N_Length, Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>>> = HashMap::new();

        for (ticket_combo_result,ticket_combos) in x.iter(){
            let converted_ticket_combo_result = convert_TicketComboPurifyResult(ticket_combo_result);
            for ticket_combo in ticket_combos{
                result.insert(
                    get_TicketCombo_N_Length(ticket_combo),
                    converted_ticket_combo_result.clone(),
                );
            }
        }

        return MultipleGearResult(result);

        //  HashMap<TicketCombo_N_Length, Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>>>

    }
}

impl Into<crate::old_main::SingleGearResult> for new_SingleGearResult{
    fn into(self) -> crate::old_main::SingleGearResult {
        let gear: Vec<HashMap<AbilityCombo, Vec<GearSlotSetCombo>>> = self.single_gear_result;
        let mut result =
            gear.into_iter().map(|index| {
                convert_gear_index(index)
            }).collect::<Vec<HashMap<SixteenAbilityCombo_Value, Vec<old_TicketSetCombo>>>>();
        result.iter_mut().for_each(|map| {
            map.iter_mut().for_each(|(a, b)| {
                b.sort();
            });
        });
        return SingleGearResult(result);

    }

}
fn convert_gear_index(
    gear_index: HashMap<AbilityCombo, Vec<GearSlotSetCombo>>
)->HashMap<SixteenAbilityCombo_Value, Vec<old_TicketSetCombo>>{
    return gear_index.into_iter().filter_map(|(ability_combo, gearslot_set_combos)|{
        let ticket_set_combos = convert_gearslot_set_combos(gearslot_set_combos);

        if let Some(ticket_set_combos) = ticket_set_combos{
            return Some((
                get_SixteenAbilityCombo_Value(&ability_combo),
                ticket_set_combos
            ));
        }
        return None;
    }).collect::<HashMap<SixteenAbilityCombo_Value, Vec<old_TicketSetCombo>>>();
}

fn convert_gearslot_set_combos(
    gearslot_set_combos: Vec<GearSlotSetCombo>
)->Option<Vec<old_TicketSetCombo>>{
    let result:Vec<old_TicketSetCombo> = gearslot_set_combos.into_iter().filter_map(|gearslot_set_combo|{
        let mut ticket_set_combo = old_TicketSetCombo::new();
        for gear_slot_set in gearslot_set_combo{
            match gear_slot_set {
                GearSlotSet::TicketSet(ticket_set) => {
                    ticket_set_combo.push(convert_ticket_set(ticket_set));
                }
                GearSlotSet::Chunks { .. } => {
                    return None;
                }
            }
        }
        return Some(ticket_set_combo);
    }).collect::<Vec<old_TicketSetCombo>>();

    if !result.is_empty(){
        return Some(result);
    }
    else{
        return None;
    }
}

pub fn convert_ticket_set(ticket_set:TicketSet)->old_TicketSet{
    old_TicketSet::from_tickets(
        ticket_set.iter().map(|ticket|{
            old_Ticket::from(&(ticket as u32))
        }).collect()
    )
}
*/