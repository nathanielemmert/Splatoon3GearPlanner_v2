#![allow(warnings)]
use std::collections::{HashMap, HashSet};
use std::str::FromStr;
use crate::new_rewrite::custom_objects::ability_types::Ticket;
use crate::new_rewrite::custom_objects::brand_types::Brand;
use crate::new_rewrite::custom_objects::collection_types::{AbilityCombo, AbilitySet, TicketSet};
use crate::new_rewrite::custom_objects::gear_types::Gear;
use crate::new_rewrite::purify_multiple_gear::gear_category::GearCategory;
use crate::new_rewrite::purify_multiple_gear::gear_purifier::GearPurifier;
use crate::new_rewrite::purify_multiple_gear::multi_gear_result::MultiGearResult;



mod new_rewrite;
pub mod utils;
pub fn main() {

    let internal_brand_names =  HashMap::from([
        ("SquidForce", "B00"),
        ("Zink", "B01"),
        ("Krak-On", "B02"),
        ("Rockenberg", "B03"),
        ("Zekko", "B04"),
        ("Forge", "B05"),
        ("Firefin", "B06"),
        ("Skalop", "B07"),
        ("Splash Mob", "B08"),
        ("Inkline", "B09"),
        ("Tentatek", "B10"),
        ("Takoroka", "B11"),
        ("Annaki", "B15"),
        ("Enperry", "B16"),
        ("Toni Kensa", "B17"),
        ("Barazushi", "B19"),
        ("Emberz", "B20"),
        ("Grizzco", "B97"),
        ("Cuttlegear", "B98"),
        ("amiibo", "B99"),
    ]);
    let desired_abilities: HashSet<AbilityCombo> = AbilitySet::ALL.iter().map(|ability|{
        AbilityCombo::from_elem(ability,3)
    }).collect();


    let gear: Gear = Gear {
        allowed_chunks: HashMap::new(),
        max_allowed_chunks: 0,
        id: "".to_string(),
        seed: 0x799474c6,
        brand: Brand::from_str(internal_brand_names.get("Inkline").unwrap()).unwrap(),
        desired_abilities
    };

    let depth_limit=2;
    let always_check_full_depth = true;
    let how_far_to_check = 20;




    let internal_allowed_drinks: HashMap<Ticket, i32> = TicketSet::ALL.iter().map(|ticket|{
        return (ticket,i32::MAX)
    }).collect();



    let gear_list:Vec<GearCategory> = vec![ GearCategory::new(vec![gear],how_far_to_check,internal_allowed_drinks.clone())];



    let purified_all_gear = GearPurifier::new(gear_list.clone()).with_setting(depth_limit,always_check_full_depth).purify_all_gear();

    let result =  MultiGearResult::new(purified_all_gear,&gear_list);
    println!("{:?}", result.ticket_combos);
}