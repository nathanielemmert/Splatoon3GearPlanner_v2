use std::collections::{BTreeMap, HashMap, HashSet};
use std::convert::TryInto;
use serde::Serialize;
use serde_with::serde_as;
use tsify::Tsify;
use crate::new_rewrite::custom_objects::ability_types::Ticket;
use crate::new_rewrite::custom_objects::collection_types::{AbilityCombo, AbilityCombo_key, TicketCombo, TicketSet, TicketSetCombo};
use crate::new_rewrite::custom_objects::gear_types::{GearSlot, GearSlotCombo, GearSlotSet, GearSlotSetCombo};
use crate::new_rewrite::purify_multiple_gear::multi_gear_result::SummarizedGearPurifyPlan;
use crate::new_rewrite::custom_objects::ability_types::SubAbility;
use serde_with::FromInto;


#[serde_as]
#[derive(Clone, Serialize, Tsify)]
#[tsify(into_wasm_abi)]
pub struct SingleGearResult {
    #[serde_as(as="Vec<HashMap<FromInto<Vec<SubAbility>>, _>>")]
    pub single_gear_result:Vec<HashMap<AbilityCombo, Vec<GearSlotSetCombo>>>,
    pub summary:BTreeMap<AbilityCombo_key, i32>
}

impl SingleGearResult{
    pub fn new(
        single_gear_result:Vec<HashMap<AbilityCombo, Vec<GearSlotSetCombo>>>,
        desired_abilities:&HashSet<AbilityCombo>
    )->SingleGearResult{
        let summary = Self::calculate_gear_summary(&single_gear_result,desired_abilities);
        return SingleGearResult{single_gear_result,summary};
    }

    pub fn get_repr(self)->Vec<HashMap<AbilityCombo, Vec<GearSlotSetCombo>>>{
        return self.single_gear_result;
    }
}

impl SingleGearResult{
    pub fn calculate_gear_summary(
        single_gear_result:&Vec<HashMap<AbilityCombo, Vec<GearSlotSetCombo>>>,
        desired_abilities:&HashSet<AbilityCombo>
    )->BTreeMap<AbilityCombo_key, i32>{
        let mut desired_abilities = desired_abilities.clone();

        let mut ticket_combo_results: BTreeMap<AbilityCombo_key, i32> = BTreeMap::new();

        for (gear_index,gear_index_solution) in single_gear_result.iter().enumerate() {

            for (ability_combo,gearslot_set_combos) in gear_index_solution.iter(){
                let ability_combo_key = ability_combo.to_vec();
                if desired_abilities.contains(ability_combo) && !ticket_combo_results.contains_key(&ability_combo_key) {
                    ticket_combo_results.insert(ability_combo_key, gear_index as i32);
                }
            }

        }
        return ticket_combo_results;

    }
}

//GearCategory
impl SingleGearResult{

    pub fn to_ticketsetcombo_array(&self)->Vec<TicketSetCombo>{
        return self.single_gear_result.iter().flat_map(|i|{
            return i.iter().flat_map(|(_,gearslot_set_combos)| {
                Self::filter_noneticket_and_chunks(gearslot_set_combos)
            }).collect::<Vec<TicketSetCombo>>();
        }).collect::<Vec<TicketSetCombo>>();
    }

    fn filter_noneticket_and_chunks(ticket_set_combos:&Vec<GearSlotSetCombo>,) ->Vec<TicketSetCombo>{//TODO: maybe doesnt work
        return ticket_set_combos.iter().map(|ticket_set_combo|{
            return ticket_set_combo.iter().filter_map(GearSlotSet::get_ticket_set_without_none).cloned().collect();
        }).collect::<Vec<TicketSetCombo>>();
    }
}

//MultiGearResult
impl SingleGearResult{
    pub fn purify_gear_with_ticket_combo(&self,ticket_combo:TicketCombo)->BTreeMap<AbilityCombo_key, SummarizedGearPurifyPlan>{
        let mapped_gear_solution = &self.single_gear_result;

        //instead of for each desired ability, I have to go through each ability combo entry in mapped result, and skip it if it is already in result

        let mut ticket_combo_results: BTreeMap<AbilityCombo_key, SummarizedGearPurifyPlan> = BTreeMap::new();

        for (gear_index,gear_index_solution) in mapped_gear_solution.iter().enumerate() {

            for (ability_combo,gearslot_set_combos) in gear_index_solution.iter(){
                let ability_combo = ability_combo.to_vec();
                if ticket_combo_results.contains_key(&*ability_combo) { continue; }

                // if any of these ticket set combos work, add ability combo to the solution with current index and intersection.
                // actual_ticket_combo = intersect ticket combo with all ticket set combos.
                if let Some((chunks_used_map,actual_ticket_combo)) = Self::get_actual_ticket_combo_using_least_chunks(&ticket_combo, &gearslot_set_combos){ //Self::get_best_actual_ticket_combo(&ticket_combo, &gearslot_set_combos){
                    ticket_combo_results.insert(
                        ability_combo.clone(),
                        SummarizedGearPurifyPlan::new(gear_index as i32, chunks_used_map, actual_ticket_combo)
                    );
                }
            }

        }
        return ticket_combo_results;

    }

    fn get_actual_ticket_combo_using_least_chunks(ticket_combo:&TicketCombo, gearslot_set_combos: &Vec<GearSlotSetCombo>) ->Option<(BTreeMap<SubAbility,i32>, [GearSlot;3])>{
        return gearslot_set_combos
            .iter()
            .filter_map(|gearslot_set_combo| {
                //get the intersection of the ticket_combo and gearslot_set_combo, if the intersection purifies gearslot_set_combo
                if let Some(actual_ticket_combo) = Self::get_actual_gearslot_combo(ticket_combo.clone(), gearslot_set_combo.clone()){
                    let chunks_used_map = Self::get_num_chunks_used_map(gearslot_set_combo);
                    return Some((chunks_used_map,actual_ticket_combo))
                }
                return None;
            }).min_by_key(|(chunks_used_map,actual_ticket_combo),|{
            (
                Self::num_chunks_used_in_map(chunks_used_map),
            )
        }).and_then(|(chunks_used_map,actual_ticket_combo)|Some((chunks_used_map, actual_ticket_combo)));
    }

    fn get_best_actual_ticket_combo(ticket_combo:&TicketCombo,gearslot_set_combos: &Vec<GearSlotSetCombo>)->Option<[GearSlot;3]>{
        // the best gearslot_set_combo is the one that uses the least chunks.
        // if chunks are equal, then the best is which one uses the least tickets.
        //TODO: this function technically can hide information from the user, even though it is unlikely.
        // it might be a good idea to return all suitable "actual_ticket_combos".
        // then in the svelte UI, only one will be displayed at a time
        // ,but if there is more than one it will be a dropdown that you can click on and see the other options.

        //1. find the best gearslot_set_combo
        //2. intersect ticket_combo with the best gearslot_set_combo.
        //3. return the intersection

        return gearslot_set_combos
            .iter()
            .filter_map(|gearslot_set_combo| {
                //get the intersection of the ticket_combo and gearslot_set_combo, if the intersection purifies gearslot_set_combo
                if let Some(x) = Self::get_actual_gearslot_combo(ticket_combo.clone(), gearslot_set_combo.clone()){
                    return Some((gearslot_set_combo.clone(),x))
                }
                return None;
            }).max_by_key(|(gearslot_set_combo,_)|{
                (
                 -Self::num_chunks_used(gearslot_set_combo),
                 -Self::num_tickets_used(gearslot_set_combo))
            }).and_then(|(_,actual_ticket_combo)|Some(actual_ticket_combo));
    }

    pub fn get_actual_gearslot_combo(mut ticket_combo:TicketCombo, mut ticket_set_combo:GearSlotSetCombo) ->Option<[GearSlot;3]>{
        /*ticket_combo=ticket_combo.into_iter().filter(|ticket|!(ticket.value==0xf)).collect(); // this line shouldnt be needed*/

        let mut actual_ticket_combo:GearSlotCombo = GearSlotCombo::new();
        while !ticket_set_combo.is_empty() && !ticket_combo.is_empty() {
            match ticket_set_combo[0]{
                GearSlotSet::Chunks { ability, quantity } => {
                    actual_ticket_combo.push(GearSlot::Chunks {ability,quantity});
                    ticket_set_combo.remove(0);
                }
                GearSlotSet::TicketSet(ticket_set) => {
                    if ticket_set.contains(Ticket::None) {
                        actual_ticket_combo.push(GearSlot::Ticket(Ticket::None));
                        ticket_set_combo.remove(0);
                    }
                    else if ticket_set.contains(ticket_combo.get(0).unwrap()) {
                        actual_ticket_combo.push(GearSlot::Ticket(ticket_combo.remove(0)));//pop from both
                        ticket_set_combo.remove(0);
                    }
                    else{
                        ticket_combo.remove(0);
                    }
                }
                GearSlotSet::TicketSetAndChunks{ticket_set,ability, quantity} => {
                    if ticket_set.contains(Ticket::None) {
                        actual_ticket_combo.push(GearSlot::TicketAndChunks{ticket:Ticket::None, ability, quantity});
                        ticket_set_combo.remove(0);
                    }
                    else if ticket_set.contains(ticket_combo.get(0).unwrap()) {
                        actual_ticket_combo.push(GearSlot::TicketAndChunks{ticket:ticket_combo.remove(0), ability, quantity});//pop from both
                        ticket_set_combo.remove(0);
                    }
                    else{
                        ticket_combo.remove(0);
                    }
                }
            }
        }

        while !ticket_set_combo.is_empty(){//&& ticket_set_combo[0].contains(Ticket::None)
            match ticket_set_combo[0]{
                GearSlotSet::TicketSet(ticket_set) => {
                    if ticket_set.contains(Ticket::None) {
                        actual_ticket_combo.push( GearSlot::Ticket(Ticket::None));
                        ticket_set_combo.remove(0);
                    }
                    else{
                        break;
                    }
                }
                GearSlotSet::TicketSetAndChunks{ticket_set, ability, quantity} => {
                    if ticket_set.contains(Ticket::None) {
                        actual_ticket_combo.push( GearSlot::TicketAndChunks{ticket:Ticket::None, ability, quantity});
                        ticket_set_combo.remove(0);
                    }
                    else{
                        break;
                    }
                }
                GearSlotSet::Chunks { ability, quantity } => {
                    actual_ticket_combo.push(GearSlot::Chunks {ability,quantity});
                    ticket_set_combo.remove(0);
                }
            }
        }

        while actual_ticket_combo.len()<3 {
            actual_ticket_combo.push(GearSlot::Ticket(Ticket::None));
        }

        return if ticket_set_combo.is_empty() {
            Some(actual_ticket_combo.try_into().ok().unwrap())
        } else {
            None
        };
    }

    pub fn get_num_chunks_used_map(gearslot_set_combo:&GearSlotSetCombo) ->BTreeMap<SubAbility,i32>{

        let mut result:BTreeMap<SubAbility,i32> = BTreeMap::new();
        for gearslot in gearslot_set_combo{
            if let GearSlotSet::Chunks { quantity,ability,.. } = gearslot {
                *result.entry(*ability).or_insert(0)+=quantity;
            }
            else if let GearSlotSet::TicketSetAndChunks { quantity,ability,.. } = gearslot {
                *result.entry(*ability).or_insert(0)+=quantity;
            }
        }
        return result;
    }

    pub fn get_num_chunks_used_map_actual_ticket_combo(gearslot_set_combo:&[GearSlot;3]) ->BTreeMap<SubAbility,i32>{

        let mut result:BTreeMap<SubAbility,i32> = BTreeMap::new();
        for gearslot in gearslot_set_combo{
            if let GearSlot::Chunks { quantity,ability,.. } = gearslot {
                *result.entry(*ability).or_insert(0)+=quantity;
            }
            else if let GearSlot::TicketAndChunks { quantity,ability,.. } = gearslot {
                *result.entry(*ability).or_insert(0)+=quantity;
            }
        }
        return result;
    }

    pub fn num_chunks_used_in_map(chunks_used_map:&BTreeMap<SubAbility,i32>)->i32{
        return chunks_used_map.values().sum();

    }



    pub fn num_chunks_used(gearslot_set_combo:&GearSlotSetCombo)->i32{

        let mut sum = 0;
        for gearslot in gearslot_set_combo{
            if let GearSlotSet::Chunks { quantity,.. } = gearslot {
                sum+=quantity;
            }
            else if let GearSlotSet::TicketSetAndChunks { quantity,.. } = gearslot {
                sum+=quantity;
            }

        }
        return sum;
    }
    pub fn num_tickets_used(gearslot_set_combo:&GearSlotSetCombo)->i32{
        //TODO: take into account two of the same ticket in a row being better
        let mut sum = 0;
        for gearslot in gearslot_set_combo{
            if let GearSlotSet::TicketSet(ticket_set) = gearslot {
                if !ticket_set.contains(Ticket::None){
                    sum+=1;
                }
            }
            else if let GearSlotSet::TicketSetAndChunks{ ticket_set,.. } = gearslot {
                if !ticket_set.contains(Ticket::None){
                    sum+=1;
                }
            }
        }
        return sum;
    }

}