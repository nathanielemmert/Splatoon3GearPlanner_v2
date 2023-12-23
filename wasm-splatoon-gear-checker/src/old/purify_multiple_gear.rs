/*import {
    ExternalGear,
    ExternalMap, SixteenAbilityCombo_Value,
    _Ticket, Ticket,
    Ticket_Value,
    _TicketCombo, TicketCombo, TicketComboToExternal,
    _TicketSet, TicketSet,
    _TicketSetCombo, TicketSetCombo
} from "./Custom_Objects_2";
import {global_allowed_drinks, purify_single_gear} from "./process_single_gear";
import {GearPlan, list_all_gear_abilities_for_each_ticket_combo, TicketCombo_N_Length} from "./all_gear_output_table";*/


use std::collections::HashMap;
use std::hash::Hash;
use wasm_bindgen_test::console_log;
use crate::old::all_gear_output_table::list_all_gear_abilities_for_each_ticket_combo;
use crate::old::custom_objects::{GearPlan, InternalGear, SixteenAbilityCombo_Value, Ticket, TicketCombo, TicketCombo_N_Length, TicketSet, TicketSetCombo, TicketValue};
use crate::old::process_single_gear::purify_single_gear;

//TODO: remove_sets_with_Noneticket has a DEFAULT value of false


fn filter_none_ticket(ticket_set_combos:&Vec<Vec<TicketSet>>, remove_sets_with_noneticket:bool)->Vec<Vec<TicketSet>>{
    if !remove_sets_with_noneticket { return ticket_set_combos.clone();}//TODO: IMPORTANT: THIS LINE REMOVES ALL TICKET SETS WITH "No Ticket" as a ticket choice.
    return ticket_set_combos.iter().map(|ticket_set_combo|{
        return ticket_set_combo.iter().filter(|ticket_set|!ticket_set.contains(&Ticket::from(&0xf))).cloned().collect();
    }).into_iter().collect::<Vec<TicketSetCombo>>();
}

fn mapped_gear_solution_to_ticketsetcombo_array(mapped_gear_solution:&Vec<HashMap<SixteenAbilityCombo_Value,Vec<TicketSetCombo>>>, remove_sets_with_noneticket:bool)->Vec<TicketSetCombo>{
    return mapped_gear_solution.iter().flat_map(|i|{
        return i.iter().flat_map(|(_,ticket_set_combos)| {
            return filter_none_ticket(ticket_set_combos,remove_sets_with_noneticket);
        }).collect::<Vec<TicketSetCombo>>();
    }).collect::<Vec<TicketSetCombo>>();
}

fn simplify_ticketsetcombos(combos:Vec<TicketSetCombo>)->Vec<TicketSetCombo>{
    return combos
}


pub fn purify_all_gear(
    gear_list:Vec<InternalGear>,
    how_far_to_check:i32,//=20,
    depth_limit:i32,//=5,
    always_check_full_depth:bool,//=false,
    allowed_drinks:Vec<TicketValue>//|null = global_allowed_drinks,
    )-> HashMap<TicketCombo_N_Length, Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>>>{


    let mut gear_ticket_set_combos: Vec<Vec<TicketSetCombo>> = vec![];
    let mut mapped_gear_solutions: Vec<Vec<HashMap<SixteenAbilityCombo_Value,Vec<TicketSetCombo>>>>=vec![];

    for external_gear in gear_list{
        let mapped_gear_solution : Vec<HashMap<SixteenAbilityCombo_Value,Vec<TicketSetCombo>>> =  purify_single_gear(&external_gear, how_far_to_check, &allowed_drinks);
        let gear_solution = mapped_gear_solution_to_ticketsetcombo_array(&mapped_gear_solution,true);
        let simplified_gear_solution = simplify_ticketsetcombos(gear_solution);
        gear_ticket_set_combos.push(simplified_gear_solution);
        mapped_gear_solutions.push(mapped_gear_solution);
    }



    // let final_ticket_combos=(always_check_full_depth)?purify_all_gear_DFS(gear_ticket_set_combos,depth_limit):purify_all_gear_BFS(gear_ticket_set_combos,depth_limit);
    let final_ticket_combos=purify_all_gear_BFS(&gear_ticket_set_combos, depth_limit, always_check_full_depth);


    let final_result = list_all_gear_abilities_for_each_ticket_combo(final_ticket_combos, mapped_gear_solutions);

    return final_result;
    // TODO: should return a list of ticket combos, along with all indexes which they would work.
    // After simplification is implemented, the input combo might be only one long, but the output ticket combo should be a fixed three long, and include a ticket of None.
}







fn purify_all_gear_BFS(gear_list:&Vec< Vec<TicketSetCombo> >, depth_limit:i32,always_check_full_depth:bool/*=false*/)->Vec<TicketCombo>{
    let mut result:Vec<TicketCombo> = vec![];
    for limit in 0..=depth_limit {
        //console_log!("LIMIT: {}",limit);
        let mut next_result = purify_all_gear_DFS(gear_list,limit,always_check_full_depth);
        if next_result.len()>0 {
            result.append(&mut next_result);
            if always_check_full_depth==false { break; }
        }
    }
    return result;
}

fn ticket_set_combo_is_empty(combo: &TicketSetCombo) ->bool{
    return combo.len()==0;
}

fn all_gear_is_already_purified(gear_list:&Vec< Vec<TicketSetCombo> >)->bool{
    return gear_list.iter().all(|gear|{
        return gear.iter().any(|combo|ticket_set_combo_is_empty(combo));
    });
}

fn find_needed_tickets(gear_list: &Vec<Vec<TicketSetCombo>>) ->TicketSet{
    let mut needed_tickets: TicketSet = TicketSet::from_tickets(vec![]);

    for gear in gear_list{
        for combo in gear{
            if ticket_set_combo_is_empty(&combo) { continue; }

            let next_ticket_set = combo.get(0).unwrap();
            needed_tickets.union_in_place(next_ticket_set);
            if needed_tickets.value == 0b0011111111111111 || needed_tickets.value == 0b1011111111111111{
                return needed_tickets; // if needed_tickets is full, return early
            }
        }
    }
    return needed_tickets;
}
// let global_ticket:Ticket = new _Ticket(0xf);

fn apply_ticket_to_all_gear(ticket:&Ticket, gear_list:&Vec< Vec<TicketSetCombo> >, remaining_depth_limit:&i32)->Option<Vec< Vec<TicketSetCombo> >>{
    let mut ticket_was_used = false;
    let x:Vec<Vec<TicketSetCombo>> =  gear_list.iter().map(|combo_list|{
        return combo_list.iter().map(|combo| {
            if combo.len() > 0 && combo.first().unwrap().contains(ticket) {
                if combo.len() as i32<=*remaining_depth_limit  {ticket_was_used=true;}
                return combo.iter().skip(1).cloned().collect();
            } else {
                return combo.clone();
            }
        }).collect();
    }).collect();

    if ticket_was_used {
        return Some(x);
    }
    else{
        return None;
    }
}

/*let global_ticket_prepend:Ticket = new _Ticket(0xf);*/
fn prepend_ticket_to_all_combos(ticket:Ticket, combos: &mut Vec<TicketCombo>){//TODO: this might be a good idea to do through copy instead. combos.map combo => [ticket].concat(combo)
    // global_ticket_prepend = ticket;
    for mut combo in combos{
        combo.insert(0,ticket.clone());
    }
}

/*let global_ticket_was_used = false;
let global_remaining_depth_limit=10;*/

fn purify_all_gear_DFS(gear_list:&Vec< Vec<TicketSetCombo> >, depth_limit:i32,always_check_full_depth:bool/*=false*/)->Vec<TicketCombo>{
    if depth_limit<0 { return vec![]; }


    if always_check_full_depth==false && all_gear_is_already_purified(&gear_list)
    || always_check_full_depth&&depth_limit==0 && all_gear_is_already_purified(&gear_list) {
        let empty_ticket_combo:Vec<Ticket> = vec![];
        return vec![empty_ticket_combo];
    }

    let next_tickets:Vec<Ticket> = find_needed_tickets(gear_list).to_tickets();

    let mut ticket_combos_that_purify_all_gear:Vec<TicketCombo> = vec![];

    for next_ticket in next_tickets{
        /*global_ticket_was_used = false;
        global_remaining_depth_limit=depth_limit;*/
        let _next_gear_list = apply_ticket_to_all_gear(&next_ticket, &gear_list,&depth_limit);
        if let Some(next_gear_list) = _next_gear_list{
            let mut result:Vec<TicketCombo> = purify_all_gear_DFS(&next_gear_list, depth_limit-1, always_check_full_depth);
            if result.len()>0 {
                prepend_ticket_to_all_combos(next_ticket, &mut result);//TODO: this should probably be an in-place operation
                ticket_combos_that_purify_all_gear.append(&mut result)// TODO: SHOULD DEFINITELY BE IN PLACE
            }
        }

    }


    if ticket_combos_that_purify_all_gear.len()>0 { return ticket_combos_that_purify_all_gear; }
    return vec![];
}

