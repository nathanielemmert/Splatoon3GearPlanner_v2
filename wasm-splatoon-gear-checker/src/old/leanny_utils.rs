//
// Created by Nathan on 9/6/2023.
//

use wasm_bindgen::prelude::wasm_bindgen;



use crate::old::leanny_params::{BRAND_TRAITS,  INTERNAL_ABILITY_NAMES, SKILL_EASILY_TO_GET_PARAM};

/*#[wasm_bindgen]
pub fn advance_seed(mut x32: u32) -> u32 {
    x32 ^= x32 << 13;
    x32 ^= x32 >> 17;
    x32 ^= x32 << 5;
    return x32;
}
*/









//
// fn get_branded_ability( seed: u32, brand: &str)-> u32 {
// let ability_roll: u32 = seed % max_brand_num(brand);//TODO: leanny declares this as i32
// return weighted_ability(ability_roll, brand);
// }
//
// fn weighted_ability(_ability_roll : u32, brand : &str) -> u32 {//TODO: dont export
//     let mut ability_roll = _ability_roll;
//     let mut ability:i32 = -1;
//     while ability_roll >= 0 {
//         ability+=1;
//         ability_roll -= get_ability_weight(brand, ability as u32);
//     }
//     return ability as u32;
// }
//
// pub fn get_ability( _seed:u32, brand:&str, drink:u32 )-> (u32,u32) {
//     let mut seed = _seed;
//     seed = advance_seed(seed);
//     let mut ret:u32 = get_branded_ability(seed, brand);
//     if drink != 0xFFFFFFFF {
//         if seed % 0x64 <= 0x1D {
//             return (drink, seed);
//         }
//         seed = advance_seed(seed);
//         ret = get_branded_ability_with_drink(seed % max_brand_num_drink(brand, drink), brand, drink);
//     }
//     return (ret, seed);
// }
//
//
// fn get_branded_ability_with_drink( seed: u32, brand: &str, drink:u32)-> u32 {
//     let ability_roll: u32 = seed % max_brand_num_drink(brand, drink);
//     return weighted_ability_with_drink(ability_roll, brand, drink);
// }
//
//
//
//
//
//
//
//
//
// fn weighted_ability_with_drink(ability_roll: u32, brand: &str, drink: u32) -> u32 {
//     let mut mut_ability_roll = ability_roll;
//     let mut ability: i32 = -1;
//     while mut_ability_roll >= 0 {
//         ability += 1;
//         mut_ability_roll -= if ability == drink as i32 { 0 } else { get_ability_weight(brand, ability as u32)}
//     }
//     return ability as u32;
// }
//
// fn max_brand_num(brand: &str) -> u32 {
//     let mut n: u32 = 0;
//     for a in INTERNAL_ABILITY_NAMES.iter() {
//         if *a == BRAND_TRAITS[brand]["UnusualGearSkill"] {
//             n += SKILL_EASILY_TO_GET_PARAM[0];
//         } else if *a == BRAND_TRAITS[brand]["UsualGearSkill"] {
//             n += SKILL_EASILY_TO_GET_PARAM[2];
//         } else {
//             n += SKILL_EASILY_TO_GET_PARAM[1];
//         }
//     }
//     return n;
// }
//
// fn max_brand_num_drink(brand: &str, drink: u32) -> u32 {
//     let mut n: u32 = 0;
//     for (index, a) in INTERNAL_ABILITY_NAMES.iter().enumerate() {
//         let ability_index: u32 = index as u32;
//         if ability_index == drink {
//             n += 0;
//         } else if *a == BRAND_TRAITS[brand]["UnusualGearSkill"] {
//             n += SKILL_EASILY_TO_GET_PARAM[0];
//         } else if *a == BRAND_TRAITS[brand]["UsualGearSkill"] {
//             n += SKILL_EASILY_TO_GET_PARAM[2];
//         } else {
//             n += SKILL_EASILY_TO_GET_PARAM[1];
//         }
//     }
//     return n;
// }
//
//
// fn get_ability_weight(brand: &str, ability: u32) -> u32 {
//     let ability_name: &str = INTERNAL_ABILITY_NAMES[ability as usize];
//
//     if ability_name == BRAND_TRAITS[brand]["UnusualGearSkill"]{
//         return SKILL_EASILY_TO_GET_PARAM[0];
//     } else if ability_name == BRAND_TRAITS[brand]["UsualGearSkill"]{
//         return SKILL_EASILY_TO_GET_PARAM[2];
//     } else {
//         return SKILL_EASILY_TO_GET_PARAM[1];
//     }
// }
#[wasm_bindgen]
pub fn advance_seed(_x32: u32 )-> u32 {
    let mut x32 = _x32;
    x32 ^= x32 << 13;
    x32 ^= x32 >> 17;
    x32 ^= x32 << 5;
return x32;

}


pub fn get_ability( _seed:u32, brand:&str, drink:u32 )-> (u32,u32) {
    let mut seed = _seed;
    seed = advance_seed(seed);
    let mut ret:u32 = get_branded_ability(seed, brand);
    if drink != 0xFFFFFFFF {
        if seed % 0x64 <= 0x1D {
            return (drink, seed);
        }
        seed = advance_seed(seed);
        ret = get_branded_ability_with_drink(seed % max_brand_num_drink(brand, drink), brand, drink);
    }
    return (ret, seed);
}


// CANONICAL LEANNY FUNCTIONS
fn get_branded_ability( seed: u32, brand: &str)-> u32 {
    let ability_roll: i32 = (seed % max_brand_num(brand)) as i32;
    return weighted_ability(ability_roll, brand);
}

fn weighted_ability(_ability_roll : i32, brand : &str) -> u32 {
    let mut ability_roll = _ability_roll;
    let mut ability:i32 = -1;
    while ability_roll >= 0 {
        ability+=1;
        ability_roll -= get_ability_weight(brand, ability as u32) as i32;
    }
    return ability as u32;
}


// FUNCTIONS ADDED BY ME
fn get_branded_ability_with_drink( seed: u32, brand: &str, drink:u32)-> u32 {
    let ability_roll: i32 = (seed % max_brand_num(brand)) as i32;
    return weighted_ability_with_drink(ability_roll, brand, drink);
}

fn weighted_ability_with_drink(_ability_roll : i32, brand : &str, drink : u32) -> u32 {
    let mut ability_roll = _ability_roll;
    let mut ability:i32 = -1;
    while ability_roll >= 0 {
        ability+=1;
        ability_roll -=
            if (ability as u32)==drink{ 0 }
            else{ get_ability_weight(brand, ability as u32) as i32 };
    }
    return ability as u32;
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//UNDER THIS IS FUNCTIONS FROM PARAMS.TS IN THE ASSEMBLYSCRIPT

fn get_ability_weight(brand: &str, ability: u32) -> u32 {

    let ability_name: &str = INTERNAL_ABILITY_NAMES[ability as usize];

    if ability_name.eq( BRAND_TRAITS[brand]["UnusualGearSkill"]){
        return SKILL_EASILY_TO_GET_PARAM[0];
    } else if ability_name.eq( BRAND_TRAITS[brand]["UsualGearSkill"]){
        return SKILL_EASILY_TO_GET_PARAM[2];
    } else {
        return SKILL_EASILY_TO_GET_PARAM[1];
    }
}

fn max_brand_num_drink(brand: &str, drink: u32) -> u32 {
    let mut n: u32 = 0;
    for (index, a) in INTERNAL_ABILITY_NAMES.iter().enumerate() {
        let ability_index: u32 = index as u32;
        if ability_index == drink {
            n += 0;
        } else if (*a).eq(BRAND_TRAITS[brand]["UnusualGearSkill"]) {
            n += SKILL_EASILY_TO_GET_PARAM[0];
        } else if (*a).eq(BRAND_TRAITS[brand]["UsualGearSkill"]) {
            n += SKILL_EASILY_TO_GET_PARAM[2];
        } else {
            n += SKILL_EASILY_TO_GET_PARAM[1];
        }
    }
    return n;
}

fn max_brand_num(brand: &str) -> u32 {
    let mut n: u32 = 0;
    for a in INTERNAL_ABILITY_NAMES.iter() {
        if (*a).eq(BRAND_TRAITS[brand]["UnusualGearSkill"]) {
            n += SKILL_EASILY_TO_GET_PARAM[0];
        } else if (*a).eq(BRAND_TRAITS[brand]["UsualGearSkill"]) {
            n += SKILL_EASILY_TO_GET_PARAM[2];
        } else {
            n += SKILL_EASILY_TO_GET_PARAM[1];
        }
    }
    return n;
}





