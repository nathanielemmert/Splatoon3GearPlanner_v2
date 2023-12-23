use crate::old::custom_objects::{
    AbilityValue, GearSeed, InternalGear, SixteenAbilityCombo, SixteenAbilityCombo_Value, Ticket,
    TicketSet, TicketSetCombo, TicketSetValue, TicketValue,
};
use crate::old::leanny_params::INTERNAL_BRAND_NAMES;
use crate::old::leanny_utils::{advance_seed, get_ability};
use serde::Serialize;
use std::collections::{HashMap, HashSet};
use wasm_bindgen::prelude::wasm_bindgen;
use wasm_bindgen::JsValue;

// pub static GLOBAL_ALLOWED_DRINKS:Vec<TicketValue> =vec![0xFFFFFFFF]; /*[0xFFFFFFFF,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];*/
//TODO: WASM_BINDGEN MACRO
pub fn purify_single_gear(
    gear: &InternalGear,              //TODO: EXTERNAL GEAR
    how_far_to_check: i32,            //TODO: DEFAULT = 20
    allowed_drinks: &Vec<TicketValue>, //TODO:  make this argument optional. DEFAULT= GLOBAL ALLOWED DRINKS
) -> Vec<HashMap<SixteenAbilityCombo_Value, Vec<TicketSetCombo>>> {
    let mut seed = gear.seed;
    return (0..how_far_to_check)
        .map(|_| {
            let next_gear_index = InternalGear {
                seed,
                brand: gear.brand.to_string(),
                desired_abilities: (&gear.desired_abilities).clone(),
            };
            seed = advance_seed(seed);
            return purify_single_gear_index(&next_gear_index, allowed_drinks);
        })
        .collect();
}

pub fn purify_single_gear_index(
    gear: &InternalGear,
    allowed_drinks: &Vec<TicketValue>,
) -> HashMap<SixteenAbilityCombo_Value, Vec<TicketSetCombo>> {
    // :Map<AbilityComboID, Array<TicketSetCombo>> //TODO: could be Map<EightAbilityCombo_Value, Set<FourTicketSetCombo_Value>> if i cared enough
    let gear_brand: &str = gear.brand.as_ref();
    let desired_abilities = &gear.desired_abilities;

    if desired_abilities.iter().all(SixteenAbilityCombo::is_empty) {
        let empty_ability_combo: SixteenAbilityCombo_Value =
            SixteenAbilityCombo::from_abilities(vec![]).value;
        let empty_ticket_set_combo: TicketSetCombo = vec![];
        if desired_abilities.len() == 0 {
            return HashMap::new();
        } //TODO: i added this line to prevent results from appearing if desired abilities is COMPLETELY empty to start.
        return HashMap::from([(empty_ability_combo, vec![empty_ticket_set_combo])]);
    }

    let possible_next_abilities = check_single_gear_possible_next_abilities(gear, &allowed_drinks);
    let mut possible_purified_abilities: HashMap<SixteenAbilityCombo_Value, Vec<TicketSetCombo>> =
        HashMap::new();

    for (next_ability, possible_next_seeds) in possible_next_abilities.into_iter() {
        for (next_seed, next_ticket_set) in possible_next_seeds.into_iter() {
            let next_desired_abilities: HashSet<SixteenAbilityCombo_Value> = desired_abilities
                .iter()
                .filter(|desired_ability_combo| {
                    !SixteenAbilityCombo::is_empty(desired_ability_combo)
                        && next_ability
                            == SixteenAbilityCombo::get_first_ability_value(desired_ability_combo)
                })
                .map(SixteenAbilityCombo::remove_first_ability)
                .collect();
            let next_purified_abilities = purify_single_gear_index(
                &InternalGear {
                    seed: next_seed,
                    brand: gear_brand.to_string(),
                    desired_abilities: next_desired_abilities,
                },
                allowed_drinks,
            );

            for (key, ticket_set_combos) in next_purified_abilities.into_iter() {
                let next_key = SixteenAbilityCombo::prepend_ability(next_ability, key); // = (next_ability, *key)
                for mut ticket_set_combo in ticket_set_combos.into_iter() {
                    // let next_ticket_set_combo:TicketSetCombo = [vec![next_ticket_set], ticket_set_combo].concat();        // = (possible_next_abilities[(next_ability, next_seed)], *ticket_set_combo)
                    ticket_set_combo.insert(0, next_ticket_set);
                    possible_purified_abilities
                        .entry(next_key).or_insert(Vec::new())
                        .push(ticket_set_combo);
                }
            }
        }
    }
    return possible_purified_abilities;
}

pub fn check_single_gear_possible_next_abilities(
    gear: &InternalGear,
    allowed_next_drinks: &Vec<TicketValue>,
) -> HashMap<AbilityValue, HashMap<GearSeed, TicketSet>> {
    let gear_seed: u32 = gear.seed;
    let gear_brand: &str = gear.brand.as_ref();
    let desired_abilities: &HashSet<SixteenAbilityCombo_Value> = &gear.desired_abilities;

    let mut possible_next_abilities: HashMap<AbilityValue, HashMap<GearSeed, TicketSet>> =
        HashMap::new();
    let needed_next_abilities: HashSet<AbilityValue> = desired_abilities
        .iter()
        .filter(|ability_combo_value| SixteenAbilityCombo::size(ability_combo_value) > 0)
        .map(SixteenAbilityCombo::get_first_ability_value)
        .collect();

    for next_drink in allowed_next_drinks {
        let (next_ability, next_seed) = get_ability(gear_seed, gear_brand, *next_drink);
        if needed_next_abilities.contains(&next_ability) {
            possible_next_abilities
                .entry(next_ability)
                .or_insert(HashMap::new())
                .entry(next_seed)
                .or_insert(TicketSet::new())
                .add(Ticket::from(next_drink));
        }
    }
    return possible_next_abilities;
}

#[wasm_bindgen]
pub fn send_example_to_js() -> JsValue {
    let gear: &InternalGear = &InternalGear {
        seed: 0x799474c6,
        brand: INTERNAL_BRAND_NAMES.get("Inkline").unwrap().to_string(),
        desired_abilities: HashSet::from([
            0xFFFFFFFFFFFFF000,
            0xFFFFFFFFFFFFF111,
            0xFFFFFFFFFFFFF222,
            0xFFFFFFFFFFFFF333,
            0xFFFFFFFFFFFFF444,
            0xFFFFFFFFFFFFF555,
            0xFFFFFFFFFFFFF666,
            0xFFFFFFFFFFFFF777,
            0xFFFFFFFFFFFFF888,
            0xFFFFFFFFFFFFF999,
            0xFFFFFFFFFFFFFaaa,
            0xFFFFFFFFFFFFFbbb,
            0xFFFFFFFFFFFFFccc,
            0xFFFFFFFFFFFFFddd,
        ]),
    };
    let allowed_next_drinks: Vec<TicketValue> =
        vec![0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let example = purify_single_gear(gear, 5, &allowed_next_drinks);
    let js_serializer =
        serde_wasm_bindgen::Serializer::new().serialize_large_number_types_as_bigints(true);
    (&example).serialize(&js_serializer).unwrap()
}

// ---- PROCESS SINGLE GEAR ----
