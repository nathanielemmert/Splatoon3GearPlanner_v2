use crate::new_rewrite::custom_objects::ability_types::Ticket;
use crate::new_rewrite::custom_objects::collection_types::{TicketSet, TicketSetCombo};
use crate::new_rewrite::purify_multiple_gear::gear_category::GearCategory;
use crate::new_rewrite::purify_multiple_gear::gear_simplifier::{GearSimplifier, SimplifiedGear};

pub struct GearSearchRepr {
    gear_list: Vec<SimplifiedGear>,
}

impl GearSearchRepr {
    pub fn new(gear_categories: &Vec<GearCategory>) -> GearSearchRepr {
        return GearSearchRepr {
            gear_list: gear_categories
                .iter()
                .map(GearSimplifier::simplify_gear_category)
                .collect(),
        };
    }
}

impl GearSearchRepr{
    pub fn all_gear_is_already_purified(&self)->bool{
        return self.gear_list.iter().all(|gear|{
            return gear.is_already_purified()
        });
    }
    pub fn find_needed_tickets(&self)->TicketSet{
        // set of tickets that appear in index 0 in all gear
        let mut needed_tickets: TicketSet = TicketSet::new();

        for gear in self.gear_list.iter(){
            if needed_tickets==TicketSet::ALL{break;}
            gear.find_needed_tickets(&mut needed_tickets);
        }
        return needed_tickets;
    }

    pub fn apply_ticket_to_all_gear(&self, ticket:Ticket, depth_limit:i32)->Option<GearSearchRepr>{
        let mut ticket_was_used = false;
        let x:Vec<SimplifiedGear> =  self.gear_list.iter().map(|gear|{
            return gear.apply_ticket_to_gear(ticket, depth_limit, &mut ticket_was_used);
        }).collect();

        if ticket_was_used {
            return Some(GearSearchRepr{gear_list:x});
        }
        else{
            return None;
        }
    }
}


