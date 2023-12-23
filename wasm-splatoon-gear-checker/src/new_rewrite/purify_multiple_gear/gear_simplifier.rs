use std::collections::HashSet;
use crate::new_rewrite::custom_objects::ability_types::Ticket;
use crate::new_rewrite::custom_objects::collection_types::{TicketSet, TicketSetCombo};
use crate::new_rewrite::purify_multiple_gear::gear_category::GearCategory;



/*pub type SimplifiedGear = HashSet<TicketSetCombo>;*/

pub struct SimplifiedGear{
    pub repr: HashSet<TicketSetCombo>
}

impl SimplifiedGear{
    fn new(repr: HashSet<TicketSetCombo>)->SimplifiedGear{
        return SimplifiedGear{ repr };
    }
}

impl SimplifiedGear{
    pub fn find_needed_tickets(&self,mut needed_tickets:&mut TicketSet){
        for ticket_set_combo in self.repr.iter(){
            if needed_tickets==&TicketSet::ALL{break;}
            if let Some(ticket_set) = ticket_set_combo.get(0){
                needed_tickets.insert_all(*ticket_set);
            }
        }
    }
    pub fn is_already_purified(&self)->bool{
        return self.repr.iter().any(TicketSetCombo::is_empty);
    }
    pub fn apply_ticket_to_gear(&self, ticket:Ticket, depth_limit:i32, ticket_was_used: &mut bool) -> SimplifiedGear {
        return SimplifiedGear { repr:
            self.repr.iter().map(|combo| {
                if !combo.is_empty() && combo.first().unwrap().contains(ticket) {
                    if combo.len() as i32 <= depth_limit { *ticket_was_used = true; }
                    return combo.iter().skip(1).cloned().collect();
                } else {
                    return combo.clone();
                }
            }).collect()
        }
    }
}



pub struct GearSimplifier();
impl GearSimplifier{
    pub fn simplify_gear_category(gear_category:&GearCategory) ->SimplifiedGear{
        //todo: actually simplify the gear. right now it does no simplification at all.
        return SimplifiedGear::new(gear_category.get_all_ticket_set_combos().into_iter().collect());
    }

}


