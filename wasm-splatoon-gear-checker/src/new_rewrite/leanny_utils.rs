//
// Created by Nathan on 9/6/2023.
//

use std::convert::{TryFrom, TryInto};
use strum::IntoEnumIterator;
use tsify::declare;
use wasm_bindgen::prelude::wasm_bindgen;
use crate::new_rewrite::custom_objects::ability_types::{Drink, SubAbility};
use crate::new_rewrite::custom_objects::brand_types::{Brand, SkillEasilyToGetParam};

use strum_macros::EnumIter;

#[declare]
pub type GearSeed = u32;




/*#[wasm_bindgen]*/
pub fn advance_seed(_x32: GearSeed )-> GearSeed {
    let mut x32 = _x32;
    x32 ^= x32 << 13;
    x32 ^= x32 >> 17;
    x32 ^= x32 << 5;
    return x32;
}
#[derive(Debug)]
pub enum AbilityRollType{
    Random_Ability,
    Drink_Ability
}

pub fn get_ability( _seed:GearSeed, brand:Brand, drink:Drink )-> (SubAbility,GearSeed, AbilityRollType) {
    let mut seed = _seed;
    seed = advance_seed(seed);
    let mut ret = get_branded_ability(seed, brand);
    if drink != 0xFFFFFFFF {
        if seed % 0x64 <= 0x1D {
            return (
                drink.try_into().unwrap(),
                seed,
                AbilityRollType::Drink_Ability
            );
        }
        seed = advance_seed(seed);
        ret = get_branded_ability_with_drink(seed % max_brand_num_drink(brand, drink), brand, drink);
    }
    return (ret, seed, AbilityRollType::Random_Ability);
}


// CANONICAL LEANNY FUNCTIONS


pub fn get_branded_ability( seed: GearSeed, brand: Brand)-> SubAbility {
    let ability_roll: i32 = (seed % max_brand_num(brand)) as i32;
    return weighted_ability(ability_roll, brand);
}

fn weighted_ability(_ability_roll : i32, brand : Brand) -> SubAbility {
    let mut ability_roll = _ability_roll;
    for ability in SubAbility::iter(){
        ability_roll -= get_ability_weight(brand, ability ) as i32;
        if ability_roll<0 {
            return ability
        }
    }
    return None.unwrap();
}


// FUNCTIONS ADDED BY ME
fn get_branded_ability_with_drink( seed: GearSeed, brand: Brand, drink:Drink)-> SubAbility {
    let ability_roll: i32 = (seed % max_brand_num(brand)) as i32;
    return weighted_ability_with_drink(ability_roll, brand, drink);
}

fn weighted_ability_with_drink(_ability_roll : i32, brand : Brand, drink : Drink) -> SubAbility {


    let mut ability_roll = _ability_roll;
    for ability in SubAbility::iter(){
        if ability  == drink {
            ability_roll -= 0;
        }
        else{
            ability_roll -= get_ability_weight(brand, SubAbility::try_from(ability as u8).unwrap() ) as i32;
        }
        if ability_roll<0 {
            return ability
        }
    }
    return None.unwrap();
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//UNDER THIS IS FUNCTIONS FROM PARAMS.TS IN THE ASSEMBLYSCRIPT

fn get_ability_weight(brand: Brand, ability: SubAbility) -> u32 {
    if Some(ability) == brand.brand_traits().UnusualGearSkill{
        return SkillEasilyToGetParam[0];
    }else if Some(ability) == brand.brand_traits().UsualGearSkill{
        return SkillEasilyToGetParam[2];
    }else{
        return SkillEasilyToGetParam[1];
    }
}

fn max_brand_num_drink(brand: Brand, drink: Drink) -> u32 {
    let mut n: u32 = 0;
    for ability in SubAbility::iter() {
        if ability == drink {
            n += 0;
        } else{
            n+=get_ability_weight(brand, ability);
        }
    }
    return n;
}

fn max_brand_num(brand: Brand) -> u32 {
    let mut n: u32 = 0;
    for ability in SubAbility::iter() {
        n+=get_ability_weight(brand, ability);
    }
    return n;
}





