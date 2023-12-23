use crate::new_rewrite::custom_objects::ability_types::{SubAbility, Ticket};
use crate::new_rewrite::custom_objects::brand_types::Brand;
use crate::new_rewrite::custom_objects::collection_types::{AbilityCombo, TicketSet, TicketSetCombo, AbilitySet};
use crate::new_rewrite::leanny_utils::{advance_seed, get_ability, GearSeed};
use std::collections::hash_map::Entry;
use std::collections::{HashMap, HashSet};
use std::convert::identity;
use std::iter::FromIterator;
use enum_iterator::all;
use itertools::Itertools;
use serde::{Serialize, Deserialize};
use serde_with::serde_as;
use tsify::{declare, Tsify};
use wasm_bindgen::prelude::*;
use crate::new_rewrite::custom_objects::single_gear_result::SingleGearResult;
use serde_with::FromInto;
use wasm_bindgen_test::console_log;


#[declare]
pub type GearSlotCombo = Vec<GearSlot>;
#[declare]
pub type GearSlotSetCombo = Vec<GearSlotSet>; // replaces TicketSetCombo

#[derive(Clone, Copy, Serialize, Tsify)]
#[tsify(namespace)]
#[serde(tag = "variant", content = "contents")]
pub enum GearSlotSet {
    TicketSet(TicketSet),
    Chunks { ability: SubAbility, quantity: i32 },
    TicketSetAndChunks{ ticket_set:TicketSet, ability: SubAbility, quantity: i32 }
}

impl GearSlotSet{
    pub fn into_ticket_set_without_none(self) -> Option<TicketSet> {
        if let GearSlotSet::TicketSet(ticket_set) = self {
            if !ticket_set.contains(Ticket::None) {
                return Some(ticket_set);
            }
        }
        else if let GearSlotSet::TicketSetAndChunks {ticket_set,..} = self{
            if !ticket_set.contains(Ticket::None) {
                return Some(ticket_set);
            }
        }
        return None;
    }

    pub fn get_ticket_set_without_none(&self) -> Option<&TicketSet> {
        if let GearSlotSet::TicketSet(ticket_set) = self {
            if !ticket_set.contains(Ticket::None) {
                return Some(ticket_set);
            }
        }
        else if let GearSlotSet::TicketSetAndChunks {ticket_set,..} = self{
            if !ticket_set.contains(Ticket::None) {
                return Some(ticket_set);
            }
        }
        return None;
    }

}


#[derive(Eq, PartialEq, Hash, Clone, Serialize, Tsify)]
#[tsify(namespace)]
#[serde(tag = "variant", content = "contents")]
pub enum GearSlot {
    Ticket(Ticket),
    Chunks { ability: SubAbility, quantity: i32 },
    TicketAndChunks{ ticket:Ticket, ability: SubAbility, quantity: i32 }
}

#[serde_as]
#[derive(Serialize,Deserialize,Tsify)]
#[tsify(into_wasm_abi,from_wasm_abi)]
pub struct DesiredAbilities(
    #[serde_as(as="Vec<FromInto<Vec<SubAbility>>>")]
    Vec<AbilityCombo>
);

#[derive(Serialize,Deserialize,Tsify)]
#[tsify(into_wasm_abi,from_wasm_abi)]
pub struct AllowedChunks(pub HashMap<SubAbility, i32>);

#[derive(Serialize,Deserialize,Tsify)]
#[tsify(into_wasm_abi,from_wasm_abi)]
pub struct AllowedDrinks(pub HashMap<Ticket, i32>);



// #[serde_as]
#[derive(Clone)]
#[wasm_bindgen]
pub struct Gear {
    #[wasm_bindgen(getter_with_clone)]
    pub id: String,
    pub seed: GearSeed,
    pub brand: Brand,
    pub(crate) desired_abilities: HashSet<AbilityCombo>,
    pub(crate) allowed_chunks: HashMap<SubAbility, i32>,
    pub max_allowed_chunks: i32,
    
    pub how_far_to_check:Option<i32>
    //  next_chunk_options could be a parameter here instead of a function parameter below
}

#[wasm_bindgen]
impl Gear{
    #[wasm_bindgen(getter)]
    pub fn desired_abilities(&self)->DesiredAbilities{
        return DesiredAbilities(self.desired_abilities.iter().cloned().sorted_by_key(|x|x.to_vec()).collect())
    }
    #[wasm_bindgen(setter)]
    pub fn set_desired_abilities(&mut self,DesiredAbilities(desired_abilities):DesiredAbilities){
        console_log!("SET DESIRED ABILITIES: {:?}",desired_abilities);
        self.desired_abilities=HashSet::from_iter(desired_abilities);
    }

    #[wasm_bindgen(getter)]
    pub fn allowed_chunks(&self)->AllowedChunks{
        return AllowedChunks(self.allowed_chunks.clone())
    }
    #[wasm_bindgen(setter)]
    pub fn set_allowed_chunks(&mut self,AllowedChunks(allowed_chunks):AllowedChunks){
        self.allowed_chunks=allowed_chunks;
    }
}

#[wasm_bindgen]
impl Gear {
    #[wasm_bindgen(constructor)]
    pub fn new(id: String, seed: GearSeed, brand: Brand) -> Gear {
        let default_desired_abilities = AbilitySet::ALL.iter().map(|i|AbilityCombo::from(vec![i,i,i])).collect();
        let default_allowed_chunks: HashMap<SubAbility, i32> = AbilitySet::ALL.iter().map(|i|(i,99)).collect();
        return Gear{
            id,seed,brand,
            desired_abilities: default_desired_abilities,
            allowed_chunks: default_allowed_chunks,
            max_allowed_chunks: 0,
            how_far_to_check: None 
        }
    }

    pub fn with_options(
        self,
        DesiredAbilities(desired_abilities): DesiredAbilities,
        AllowedChunks(allowed_chunks): AllowedChunks,
        max_allowed_chunks: i32,
        how_far_to_check:Option<i32>
    )->Gear{
        return Gear{
            desired_abilities:HashSet::from_iter(desired_abilities),
            allowed_chunks,
            max_allowed_chunks,
            how_far_to_check,
            ..self
        }

    }

    pub fn new_with_defaults(id: String, seed: GearSeed, brand: Brand) -> Gear {
        todo!();
        let default_desired_abilities = AbilitySet::ALL.iter().map(|i|AbilityCombo::from(vec![i,i,i])).collect();
        return Gear{
            id,seed,brand,
            desired_abilities: default_desired_abilities,
            allowed_chunks: HashMap::new(),
            max_allowed_chunks: 0,
            how_far_to_check: None 
        }
    }

}

// advance_seed
impl Gear {
    pub fn advance_seed(&mut self) {
        self.seed = advance_seed(self.seed);
    }
    fn get_next_desired_abilities(
        possible_next_ability: SubAbility,
        desired_abilities: &HashSet<AbilityCombo>,
    ) -> HashSet<AbilityCombo> {
        return desired_abilities
            .iter()
            .filter_map(|combo| {
                combo.get(0).and_then(|desired_first_ability| {
                    if desired_first_ability == possible_next_ability {
                        Some(combo.iter().skip(1).collect()) //Some(combo[1..].clone())
                    } else {
                        None
                    }
                })
            })
            .collect();
    }
    fn get_initial_chunk_options(&self) -> HashMap<SubAbility, Vec<i32>> {
        self.allowed_chunks
            .iter()
            .map(|(&x, &y)| {
                let mut chunk_inventory = y;
                let mut chunk_options: Vec<i32> = Vec::new();
                for chunk_option in [10, 20, 30] {
                    if chunk_inventory < chunk_option {
                        break;
                    }
                    chunk_inventory -= chunk_option;
                    chunk_options.push(chunk_option);
                }
                return (x, chunk_options);
            })
            .collect()
    }
    fn get_next_chunk_options(
        possible_next_ability: SubAbility,
        chunk_options: &HashMap<SubAbility, Vec<i32>>,
    ) -> HashMap<SubAbility, Vec<i32>> {
        chunk_options
            .iter()
            .filter_map(|(&a, v)| {
                if a != possible_next_ability { return Some((a, v.clone())); }
                if v.len() > 1 {
                    return Some((a,v.iter().skip(1).cloned().collect()));
                } else {
                    return None;
                }
            })
            .collect()
    }
    fn get_next_gear(
        &self,
        next_seed: GearSeed,
        next_desired_abilities: HashSet<AbilityCombo>,
        next_gearslot_set: GearSlotSet,
    ) -> Gear {
        let used_chunks = match next_gearslot_set {
            GearSlotSet::Chunks { quantity, .. } => quantity,
            GearSlotSet::TicketSetAndChunks { quantity, .. } => quantity,
            _ => 0,
        };

        return Gear {
            seed: next_seed,
            desired_abilities: next_desired_abilities,
            max_allowed_chunks:self.max_allowed_chunks-used_chunks,
            ..self.clone()
        };
    }
}

// purify_single_gear
#[wasm_bindgen]
impl Gear {
    #[wasm_bindgen(js_name = purify_single_gear)]
    pub fn JS_purify_single_gear(
        &self,
        global_how_far_to_check: i32,
        AllowedDrinks(allowed_drinks): AllowedDrinks,
    ) -> SingleGearResult {
        self.purify_single_gear(global_how_far_to_check,allowed_drinks)
    }
    pub(crate) fn purify_single_gear(
        &self,
        global_how_far_to_check: i32,
        allowed_drinks: HashMap<Ticket, i32>,
    ) -> SingleGearResult {

        let mut gear = self.clone();
        let mut chunk_options = self.get_initial_chunk_options();
        let how_far_to_check:i32 = 
            if let Some(x) = self.how_far_to_check {x}
            else {global_how_far_to_check};

        return SingleGearResult::new(
            (0..how_far_to_check)
                .map(|_| {
                    let result = gear.purify_single_gear_index(&allowed_drinks, &chunk_options);
                    gear.advance_seed();
                    return result;
                }).collect(),
            &self.desired_abilities
        );

    }



    fn purify_single_gear_index(
        &self,
        allowed_drinks: &HashMap<Ticket, i32>,
        chunk_options: &HashMap<SubAbility, Vec<i32>>,
    ) -> HashMap<AbilityCombo, Vec<GearSlotSetCombo>> {
        let gear_brand = self.brand;
        let desired_abilities = &self.desired_abilities;

        if desired_abilities.iter().all(AbilityCombo::is_empty) {
            let empty_ability_combo = AbilityCombo::new();
            let empty_gearslot_set_combo = GearSlotSetCombo::new();
            if desired_abilities.len() == 0 { return HashMap::new(); } //TODO: i added this line to prevent results from appearing if desired abilities is COMPLETELY empty to start.
            return HashMap::from([(empty_ability_combo, vec![empty_gearslot_set_combo])]);
        }

        let possible_next_abilities =
            self.check_single_gear_possible_next_abilities(&allowed_drinks, &chunk_options);
        let mut possible_purified_abilities: HashMap<AbilityCombo, Vec<GearSlotSetCombo>> =
            HashMap::new();
        for (possible_next_ability, possible_next_seeds) in possible_next_abilities.into_iter() {
            for (next_seed, x) in possible_next_seeds.into_iter() {
                for next_gearslot_set in x.into_iter(){
                    let next_desired_abilities = Self::get_next_desired_abilities(possible_next_ability, &desired_abilities);
                    let next_chunk_options = Self::get_next_chunk_options(possible_next_ability, chunk_options);
                    let next_gear = self.get_next_gear(next_seed, next_desired_abilities, next_gearslot_set);
                    let next_purified_abilities = next_gear.purify_single_gear_index(allowed_drinks, &next_chunk_options);

                    for (mut next_key, gearslot_set_combos) in next_purified_abilities.into_iter() {
                        next_key.insert(0, possible_next_ability); // next_key = (next_ability, *key)
                        for mut gearslot_set_combo in gearslot_set_combos.into_iter() {
                            // let next_ticket_set_combo:TicketSetCombo = [vec![next_ticket_set], ticket_set_combo].concat();        // = (possible_next_abilities[(next_ability, next_seed)], *ticket_set_combo)
                            gearslot_set_combo.insert(0, next_gearslot_set);
                            possible_purified_abilities
                                .entry(next_key.clone())
                                .or_insert(Vec::new())
                                .push(gearslot_set_combo);
                        }
                    }
                }
            }
        }
        return possible_purified_abilities;
    }



    fn check_single_gear_possible_next_abilities(
        &self,
        allowed_drinks: &HashMap<Ticket, i32>,
        chunk_options: &HashMap<SubAbility, Vec<i32>>,
    ) -> HashMap<SubAbility, HashMap<GearSeed, GearSlotPurifyChoices>> {
        let gear_seed = self.seed;
        let gear_brand = self.brand;
        let desired_abilities = &self.desired_abilities;

        let needed_next_abilities: HashSet<SubAbility> = desired_abilities
            .iter()
            .filter_map(|combo| combo.get(0))
            .collect();


        let mut possible_next_abilities: HashMap<SubAbility, HashMap<GearSeed, GearSlotPurifyChoices>> = HashMap::new();

        for &next_drink in allowed_drinks.keys() {
            let (next_ability, next_seed, roll_type) =
                get_ability(gear_seed, gear_brand, next_drink.into());

            if needed_next_abilities.contains(&next_ability) {
                    possible_next_abilities
                        .entry(next_ability).or_insert(HashMap::new())
                        .entry(next_seed).or_insert(GearSlotPurifyChoices::new())
                        .insert_ticket_set(next_drink);
            }
            for needed_next_ability in &needed_next_abilities{
                if let Some(chunks_quantities) = chunk_options.get(&needed_next_ability) {
                    if let Some(&chunk_quantity) = chunks_quantities.get(0) {
                        if chunk_quantity<= self.max_allowed_chunks {
                            possible_next_abilities
                                .entry(*needed_next_ability).or_insert(HashMap::new())
                                .entry(next_seed).or_insert(GearSlotPurifyChoices::new())
                                .insert_ticket_set_and_chunks(next_drink, *needed_next_ability, chunk_quantity);
                        }
                    }
                }
            }
        }
        for needed_next_ability in needed_next_abilities{
            if let Some(chunks_quantities) = chunk_options.get(&needed_next_ability) {
                if let Some(&chunk_quantity) = chunks_quantities.get(0) {
                    if chunk_quantity<= self.max_allowed_chunks {
                        possible_next_abilities
                            .entry(needed_next_ability).or_insert(HashMap::new())
                            .entry(gear_seed).or_insert(GearSlotPurifyChoices::new())
                            .insert_chunks(needed_next_ability, chunk_quantity);
                    }
                }
            }
        }

        return possible_next_abilities;

        /*for &next_drink in allowed_drinks.keys() {
            let (next_ability, next_seed, roll_type) =
                get_ability(gear_seed, gear_brand, next_drink.into());

            if needed_next_abilities.contains(&next_ability) {
                possible_next_abilities
                    .entry(next_ability).or_insert(HashMap::new())
                    .entry(next_seed).or_insert(TicketSet::new())
                    .insert(next_drink);
            }
        }

        return possible_next_abilities
            .into_iter()
            .map(|(sub_ability, gear_slots)| {
                //TODO: try using TicketSetAndChunks here if possible.
                let mut gear_slots:HashMap<GearSeed, GearSlotSet> = gear_slots
                    .into_iter()
                    .map(|(gear_seed, ticket_set)| {
                        return (gear_seed, GearSlotSet::TicketSet(ticket_set));
                    })
                    .collect();

                if let Some(chunks_quantities) = chunk_options.get(&sub_ability) {
                    if let Some(&chunk_quantity) = chunks_quantities.get(0) {
                        if chunk_quantity<= self.max_allowed_chunks {
                            gear_slots.insert(gear_seed, GearSlotSet::Chunks { ability: sub_ability, quantity: chunk_quantity, }, );
                        }
                    }
                }
                return (sub_ability, gear_slots);
            }).collect();*/
    }
}

pub struct GearSlotPurifyChoices{
    chunks:Option<GearSlotSet>,
    ticket_set: Option<GearSlotSet>,
    ticket_set_and_chunks:Option<GearSlotSet>
}

impl GearSlotPurifyChoices{
    pub fn insert_chunks(&mut self, ability:SubAbility, quantity:i32){
        if let None = self.chunks{
            self.chunks = Some(GearSlotSet::Chunks {ability, quantity})
        }
    }
    pub fn insert_ticket_set(&mut self, ticket: Ticket){
        if let None = self.ticket_set{
            self.ticket_set = Some(GearSlotSet::TicketSet(TicketSet::new()))
        }
        if let Some(GearSlotSet::TicketSet(ticket_set)) = &mut self.ticket_set{
            ticket_set.insert(ticket);
        }
    }
    pub fn insert_ticket_set_and_chunks(&mut self, ticket:Ticket, ability:SubAbility, quantity:i32){
        if let None = self.ticket_set_and_chunks{
            self.ticket_set_and_chunks = Some(GearSlotSet::TicketSetAndChunks{ticket_set:TicketSet::new(), ability, quantity})
        }
        if let Some(GearSlotSet::TicketSetAndChunks{ticket_set, ability, quantity}) = &mut self.ticket_set_and_chunks{
            ticket_set.insert(ticket);
        }
    }
}
impl IntoIterator for GearSlotPurifyChoices{
    type Item = <Vec<GearSlotSet> as IntoIterator>::Item;
    type IntoIter = <Vec<GearSlotSet> as IntoIterator>::IntoIter;

    fn into_iter(self) -> Self::IntoIter {
        return vec![self.ticket_set, self.chunks, self.ticket_set_and_chunks]
            .into_iter()
            .filter_map(identity).collect_vec().into_iter()
    }
}
impl GearSlotPurifyChoices{
    //TODO: probably shouldnt allow a blank to be created.
    pub fn new()->GearSlotPurifyChoices{return GearSlotPurifyChoices{chunks:None, ticket_set:None, ticket_set_and_chunks:None}}
}



/*pub fn purify_single_gear(
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
}*/

/*pub fn purify_single_gear_index(
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
}*/

/*pub fn check_single_gear_possible_next_abilities(
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
}*/
