/*import {
    _Ticket,
    HashMap, SixteenAbilityCombo,
    SixteenAbilityCombo_Value,
    TicketCombo,
    TicketSet,
    TicketSetCombo,
    _SixteenAbilityCombo, Ability, Ticket, _Ability
} from "./Custom_Objects_2";*/


use std::collections::HashMap;
use crate::old::custom_objects::{GearPlan, SixteenAbilityCombo, SixteenAbilityCombo_Value, Ticket, TicketCombo, TicketCombo_N_Length, TicketSet, TicketSetCombo};

// pub type TicketCombo_N_Length = SixteenAbilityCombo_Value; //TODO: result ticket combo should be arbitrary length, but right now it is just sixteen long. max length should be hardcoded to be 16
pub fn list_all_gear_abilities_for_each_ticket_combo(
    ticket_combos: Vec<TicketCombo>,
    mapped_gear_solutions : Vec<Vec<HashMap<SixteenAbilityCombo_Value,Vec<TicketSetCombo>>>>
)-> HashMap<TicketCombo_N_Length, Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>>>{
    return ticket_combos.into_iter().map(|ticket_combo|{
        (
            SixteenAbilityCombo::from_ability_values(
                &ticket_combo.iter().map(|t|t.value).collect()
            ).value,
            list_all_gear_abilities_for_single_ticket_combo(ticket_combo, &mapped_gear_solutions)
        )
    }).collect();
}

fn list_all_gear_abilities_for_single_ticket_combo(
    combo:TicketCombo,
    mapped_gear_solutions : &Vec<Vec<HashMap<SixteenAbilityCombo_Value,Vec<TicketSetCombo>>>>
)-> Vec<HashMap<SixteenAbilityCombo_Value, GearPlan>>{

    return mapped_gear_solutions.iter().map(|mapped_gear_solution|{
        list_single_gear_abilities_for_single_ticket_combo(combo.clone(), mapped_gear_solution)
    }).collect();
}

fn list_single_gear_abilities_for_single_ticket_combo(//TODO: REWRITE
    combo:TicketCombo,
    mapped_gear_solution : &Vec<HashMap<SixteenAbilityCombo_Value,Vec<TicketSetCombo>>>
)-> HashMap<SixteenAbilityCombo_Value, GearPlan>{

    //instead of for each desired ability, I have to go through each ability combo entry in mapped result, and skip it if it is already in result

    let mut ticket_combo_results: HashMap<SixteenAbilityCombo_Value, GearPlan> = HashMap::new();

    for (gear_index,gear_index_solution) in mapped_gear_solution.iter().enumerate() {

        for (ability_combo,ticket_set_combos) in gear_index_solution.iter(){
            if ticket_combo_results.contains_key(ability_combo) { continue; }

            // if any of these ticket set combos work, add ability combo to the solution with current index and intersection.
            // actual_ticket_combo = intersect ticket combo with all ticket set combos.
            if let Some(actual_ticket_combo) = intersectTicketComboWithBestTicketSetCombo(&combo, &ticket_set_combos){
                ticket_combo_results.insert(*ability_combo, GearPlan{soonest_index: gear_index as i32, actual_ticket_combo});
            }
        }

    }
    return ticket_combo_results;
}





fn numTicketsUsedInTicketSetCombo(combo:&Vec<TicketSet>)->f64{//TODO: Currently only works with ticketsetcombo of 3 or less. probably ok
   /*
    for i in 0.. (3 - combo.len()) {
        combo = combo.concat([ TicketSet.fromTickets([new _Ticket(0xf)]) ])
    }

    const a=combo[0], b=combo[1], c=combo[2];

    const na=a.contains(new _Ticket(0xf))?1:0,
          nb=b.contains(new _Ticket(0xf))?1:0,
          nc=c.contains(new _Ticket(0xf))?1:0;

    const total_n=na+nb+nc;


    const ab = a.intersection(b);
    const bc = b.intersection(c);
    const abc= ab.intersection(bc);

    if (total_n==3) { return 0; }
    if (total_n==2) { return 1; }
    if (total_n==1){
        if (nc==1 && !ab.isEmpty())return 1.5;
        if (na==1 && !bc.isEmpty())return 1.75;
        return 2;
    }
    if (total_n==0) {
        if (!abc.isEmpty()) return 2.123;
        if (!bc.isEmpty()) return 2.75;
        if (!ab.isEmpty()) return 2.5;
        return 3;
    }
    //console.log("PROBLEM"+a.toString()+b.toString()+c.toString())*/
    return -1f64;
}


fn bestTicketSetCombo<'a>(combo1:Option<&'a TicketSetCombo>, combo2:&'a TicketSetCombo)-> &'a TicketSetCombo {
    match combo1 {
        None => combo2,
        Some(combo)=>{
            if numTicketsUsedInTicketSetCombo(&combo) < numTicketsUsedInTicketSetCombo(&combo2) {
                combo
            }
            else{
                combo2
            }
        }
    }
}


fn intersectTicketComboWithBestTicketSetCombo(
    ticket_combo:&TicketCombo,
    ticket_set_combos:&Vec<TicketSetCombo>
)-> Option<TicketCombo> {
    let mut best_ticket_set_combo: Option<&TicketSetCombo> = None;

    for ticket_set_combo in ticket_set_combos.iter() {
        //find the ticketsetcombo that contains ticket_combo, and uses the least tickets
        //if ticket combo purifies ticketsetcombo, add it to the result
        if ticketComboPurifiesTicketSetCombo(&ticket_combo, &ticket_set_combo) {
            best_ticket_set_combo = Some(bestTicketSetCombo(best_ticket_set_combo, &ticket_set_combo));//TODO: Refactor the bestTicketSetCombo function
        }
    }

    if let Some(ticket_set_combo) = best_ticket_set_combo {
        return Some(intersectTicketComboWithTicketSetCombo(&ticket_combo, &ticket_set_combo));
    }
    return None;
}


fn intersectTicketComboWithTicketSetCombo(
    _ticket_combo:&TicketCombo,
    _ticket_set_combo:&Vec<TicketSet>
)->TicketCombo{

    let mut ticket_combo = (*_ticket_combo).clone();
    let mut ticket_set_combo =(*_ticket_set_combo).clone();


    ticket_combo=ticket_combo.into_iter().filter(|ticket|!(ticket.value==0xf)).collect();//TODO: this line shouldnt be needed

    let mut final_ticket_combo:TicketCombo  = vec![];
    while ticket_set_combo.len()>0 && ticket_combo.len()>0 {
        if ticket_set_combo[0].contains(&Ticket::from(&0xf)) {
            final_ticket_combo.push(Ticket::from(&0xf));
            ticket_set_combo.remove(0);
        }
        else if ticket_set_combo[0].contains(&ticket_combo[0]) {
            final_ticket_combo.push(ticket_combo.remove(0));//pop from both
            ticket_set_combo.remove(0);
        }
        else{
            ticket_combo.remove(0);
        }
    }

    while ticket_set_combo.len()>0 && ticket_set_combo[0].contains(&Ticket::from(&0xf)) {
        final_ticket_combo.push(Ticket::from(&0xf));
        ticket_set_combo.remove(0);
    }

    return final_ticket_combo;
}

fn ticketComboPurifiesTicketSetCombo(
    _ticket_combo:&TicketCombo,
    _ticket_set_combo:&Vec<TicketSet>
)-> bool{
    let mut ticket_set_combo:Vec<TicketSet> =_ticket_set_combo.iter().filter(|set|!set.contains(&Ticket::from(&0xf))).cloned().collect();
    let mut ticket_combo:TicketCombo=_ticket_combo.iter().filter(|ticket|ticket.value!=0xf).cloned().collect();//TODO: this line shouldnt be needed

    while ticket_set_combo.len()>0 && ticket_combo.len()>0 {
        if ticket_set_combo[0].contains(&ticket_combo[0]) {
            ticket_set_combo.remove(0);//ticket_set_combo = ticket_set_combo.slice(1)
        }
        ticket_combo.remove(0);
    }
    return ticket_set_combo.len()==0;
}




/*export class GearPlan{ soonest_index!: i32; actual_ticket_combo!: TicketCombo;}*/


