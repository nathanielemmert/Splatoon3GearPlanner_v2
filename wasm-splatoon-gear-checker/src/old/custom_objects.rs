use std::collections::HashSet;
use std::fmt::{Debug, Formatter};
use serde::{Deserialize, Serialize};
use tsify::{declare, Tsify};
use wasm_bindgen::prelude::wasm_bindgen;
use crate::old::leanny_params::INTERNAL_BRAND_NAMES;

//ExternalGear // FINISHED
#[derive(Tsify, Debug, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ExternalGear{
    pub seed:u32,
    pub brand:String,
    pub desired_abilities:Vec<Vec<u32>>
}

impl ExternalGear {
    fn to_internal_gear(&self)->InternalGear{
        InternalGear{
            desired_abilities:self.desired_abilities.iter().map(|desired_ability_combo|{
                SixteenAbilityCombo::from_ability_values(desired_ability_combo).value
            }).collect(),
            seed:self.seed,
            brand:self.brand.clone()
        }
    }
}



//InternalGear // FINISHED

pub type GearSeed=u32;
pub type GearBrand=u32;

#[derive(Debug, Serialize, Deserialize)]
pub struct InternalGear {
    pub seed: u32,
    pub brand: String,
    pub desired_abilities: HashSet < SixteenAbilityCombo_Value >
}
impl InternalGear{

    pub fn from_external_gear(gear:ExternalGear) ->InternalGear{
        return gear.to_internal_gear()
    }
}



//Ability // FINISHED
#[declare]
pub type AbilityValue = u32;
pub struct Ability {
    pub value: u32
}
impl Ability{
    pub fn from(val: AbilityValue) ->Ability{
        return Ability{value:val%14};
    }
/*    toString()->string{return this.value.toString()+","}*///TODO: convert to rust

}


/*export class _Ability extends Ability{
    constructor(val:AbilityValue) {
        super();
        this.value = val%14;
    }
}*/



//AbilityCombo TODO: FINISH CLASS
// type _AbilityCombo = Array<_Ability>;/**/
pub type AbilityCombo = Vec<Ability>;
/*pub fn AbilityComboToExternal(combo:_AbilityCombo, index: i32 =0, self: Array<_AbilityCombo> = []):AbilityCombo{
    return combo.map((ability:_Ability):Ability=>(ability as Ability));
}*/




//EightAbilityCombo // FINISHED
#[allow(non_camel_case_types)]
pub type SixteenAbilityCombo_Value = u64;
#[allow(non_camel_case_types)]
pub type TicketCombo_N_Length = SixteenAbilityCombo_Value;

#[wasm_bindgen]
pub struct SixteenAbilityCombo {
    // @ts-ignore
    pub(crate) value: u64
}
#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct JsAbilityCombo(Vec<AbilityValue>);

#[wasm_bindgen]
impl SixteenAbilityCombo{
    pub fn to_js_ability_combo(value:SixteenAbilityCombo_Value)->JsAbilityCombo{
        return JsAbilityCombo(SixteenAbilityCombo::to_ability_combo(value).iter().map(|a|a.value).collect())
    }
}


impl SixteenAbilityCombo{


    pub fn to_ability_combo(val:u64) ->Vec<Ability>{//TODO: TEST THE ACCURACY OF THIS FUNCTION
        let mut ability_combo:Vec<Ability> =  vec![];
        for i in 0..16{
            let mask = (0b1111) << (i*4);
            let ability = (val&mask)>>(i*4);
            if ability==0b1111 {break;}
            ability_combo.push(Ability{value:ability as u32});
        }
        return ability_combo
    }
    pub fn size(val:&u64)->u32{//TODO: TEST THE ACCURACY OF THIS FUNCTION
        let mut len:u32 = 0;
        for i in 0..16{
            let mask:u64 = (0b1111) << (i*4);
            let ability :u64= (val&mask)>>(i*4);
            if ability!=0b1111 { len += 1; }
        }
        return len;
    }

    pub fn is_empty(val:&u64) ->bool{
        return SixteenAbilityCombo::size(val)==0
    }
    pub fn from_value(val: &SixteenAbilityCombo_Value) ->SixteenAbilityCombo{
        return SixteenAbilityCombo{value:*val};
    }
    pub fn from_abilities(ability_combo:Vec<Ability>) ->SixteenAbilityCombo{
        // if(ability_combo.length>16)console.error("WASM ERROR: EIGHTABILITYCOMBO HAS MORE THAN 8 ABILITIES:   "+ability_combo.toString());
        let mut value =!0u64;//TODO: make sure this is setting val to 0xffffffffffffffff
        for (i,ability) in ability_combo.iter().enumerate(){
            let mask:u64 = ((0b1111 & ability.value) << (i * 4)) as u64;
            let f_mask:u64 = (0b1111)<< (i*4);
            value = (value & !f_mask) | mask;
        }
        return SixteenAbilityCombo{value};
    }

    pub fn from_ability_values(ability_combo:&Vec<AbilityValue>) ->SixteenAbilityCombo{
        // if(ability_combo.length>16)console.error("WASM ERROR: EIGHTABILITYCOMBO HAS MORE THAN 8 ABILITIES:   "+ability_combo.toString());
        let mut value =!0u64;//TODO: make sure this is setting val to 0xffffffffffffffff
        for (i,ability) in ability_combo.iter().enumerate(){
            let mask:u64 = ((0b1111 & ability) << (i * 4)) as u64;
            let f_mask:u64 = (0b1111)<< (i*4);
            value = (value & !f_mask) | mask;
        }
        return SixteenAbilityCombo{value};
    }
    pub fn to_ability_value_combo(&self) ->Vec<AbilityValue>{
        let mut ability_combo:Vec<AbilityValue> = vec![];
        for i in 0..16{
            let mask = (0b1111) << (i*4);
            let ability = (self.value&mask)>>(i*4);


            if ability==0b1111 { break; }
            ability_combo.push(ability as AbilityValue);
        }
        return ability_combo;
    }
    pub fn get_first_ability_value(val: &SixteenAbilityCombo_Value) -> AbilityValue {
        return Ability::from((val & 0b1111) as AbilityValue).value
    }
    pub fn remove_first_ability(val: &SixteenAbilityCombo_Value) ->SixteenAbilityCombo_Value{
        return (val>>4) | (0b1111 << (15*4));
    }
    pub fn prepend_ability(val: AbilityValue, combo:SixteenAbilityCombo_Value) ->SixteenAbilityCombo_Value{
        let mask = (0b1111&val) as u64;
        return (combo<<4) | mask;
    }
    //TODO:
    // addFirst(ability:Ability):SixteenAbilityCombo_External {} // static and non-static
    // removeFirst():SixteenAbilityCombo_External {} // static and non-static
    // getFirst(): Ability  // static and non-static
}

/*export class _SixteenAbilityCombo extends SixteenAbilityCombo{// TODO: FINISH CLASS
    constructor(ability_combo:Array<Ability>){
        super();
        if(ability_combo.length>16)console.error("WASM ERROR: EIGHTABILITYCOMBO HAS MORE THAN 8 ABILITIES:   "+ability_combo.toString());
        this.value=~(<u64>0x0)//TODO: make sure this is setting val to 0xffffffffffffffff
        for(let i = 0;i<ability_combo.length;i++){
            const ability = ability_combo[i];
            const mask = (0b1111&ability.value)<< (i*4);
            const F_mask = (0b1111)<< (i*4);
            this.value = (this.value & ~F_mask) | mask;
        }
    }
}*/

pub type AbilityComboID = SixteenAbilityCombo_Value; //TODO: DELETE THIS REDUNDANT TYPE ALIAS



//Ticket // FINISHED
#[declare]
pub type TicketValue = u32;

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]

pub struct JsTicketCombo(Vec<Ticket>);

#[derive(Tsify,Clone, Copy, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct Ticket {
    pub(crate) value: u32
}
impl Ticket{
    pub fn from(val:&TicketValue) ->Ticket{
        return Ticket{value:if *val==0xf||*val==0xFFFFFFFF { 0xf }else { val % 14 }};
    }
    /*toString():string{return this.value.toString()}*/
}
/*export class _Ticket extends Ticket{
    constructor(val:TicketValue) {
        super();
        this.value = (val==0xf || val==0xffffffff)?0xf:val%14;
    }
}*/



//TicketCombo TODO: FINISH CLASS
/*export type _TicketCombo = Array<_Ticket>;*/
pub type TicketCombo = Vec<Ticket>;
/*export function TicketComboToExternal(combo:_TicketCombo, index: i32 =0, self: Array<_TicketCombo> = []):TicketCombo{
    return combo.map((ticket:_Ticket):Ticket=>(ticket as Ticket));
}*/



//TicketSet
pub type TicketSetValue = u16;
#[wasm_bindgen]
#[derive(Clone, Copy, Serialize, Deserialize, Ord, PartialOrd, Eq, PartialEq)]
pub struct TicketSet {
    pub value: u16
}

impl Debug for TicketSet{
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        self.to_tickets().iter().map(|t|t.value).collect::<Vec<u32>>().fmt(f)
    }
}
#[wasm_bindgen]
impl TicketSet{
    pub fn toString()->String{
        "TicketSet".to_string()
    }

    pub fn to_js_tickets(value:u16)->JsTicketCombo{
        return JsTicketCombo(TicketSet{value}.to_tickets());
    }
}

impl TicketSet{


    pub fn new()->TicketSet{
        return TicketSet{value:0};
    }
    /*from_value(val) has a default val of 0*/
    pub fn from_value(val:u16) ->TicketSet{
        return TicketSet{value:val};
    }

    pub fn from_tickets(tickets:Vec<Ticket>) ->TicketSet{
        let mut val:u16=0;
        for ticket in tickets{
            let mask:u16 = 0x1<<(ticket.value as u16);
            val = val | mask;
        }
        return TicketSet{value:val};
    }

/*    toString():string{return this.value.toString(2)}*/
    pub fn add(&mut self, ticket:Ticket){
        let mask:u16 = 0x1<<(ticket.value as u16);
        self.value = self.value | mask;
    }
    pub fn add_all(&mut self, tickets:Vec<Ticket>){
        for ticket in tickets{
            self.add(ticket);
        }
    }
    pub fn remove(&mut self, ticket:Ticket){
        self.value = self.value & !(0x1<<ticket.value);
    }
    pub fn remove_all(&mut self, tickets:Vec<Ticket>){
        for ticket in tickets{
            self.remove(ticket);
        }
    }
    pub fn contains(&self,ticket:&Ticket)->bool{
        let mask = 0x1<<ticket.value;
        return (self.value&mask)>0;
    }
/*    pub fn to_tickets(&self) ->Vec<Ticket>{
        let allowed_next_drinks:Vec<TicketValue> = vec![0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let mut tickets:Vec<Ticket> = vec![];
        for allowed_next_drink in allowed_next_drinks {
            let ticket = Ticket{value:allowed_next_drink};
            if self.contains(&ticket) {
                tickets.push(ticket);
            }
        }
        return tickets;
    }*/
    pub fn to_tickets(&self) ->Vec<Ticket>{
        let allowed_next_drinks:Vec<TicketValue> = vec![0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let mut tickets:Vec<Ticket> = vec![];
        for allowed_next_drink in allowed_next_drinks {
            let ticket = Ticket::from(&allowed_next_drink);
            if self.contains(&ticket) {
                tickets.push(ticket);
            }
        }
        return tickets;
    }

    /*toBinaryString(): string {
        // return this.value.toString(2);
        return this.to_tickets().join(",");
    }*/
    pub fn union_in_place(&mut self, other:&TicketSet){
        self.value |=other.value;
    }
    pub fn union(&self,other:&TicketSet)->TicketSet{
        return TicketSet::from_value(self.value | other.value) ;
    }

    pub fn intersection_in_place(&mut self, other:&TicketSet){
        self.value &=other.value;
    }
    pub fn intersection(&self,other:&TicketSet)->TicketSet{
        return TicketSet::from_value(self.value & other.value) ;
    }
    pub fn is_empty(&self) ->bool{
        return self.value==0;
    }

    pub fn contains_noneticket(&self) ->bool{
        return self.contains(&Ticket{value:0xf});
    }

    pub fn is_full(&self) ->bool{
        return self.value!=0;
    }
}//TODO: implement toSet():Set<TicketValue>{}

#[derive(Tsify, Serialize, Deserialize, Clone)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct GearPlan{
    pub soonest_index: i32,
    pub(crate) actual_ticket_combo: TicketCombo//TicketCombo
}
/*#[wasm_bindgen]
impl GearPlan{
    #[wasm_bindgen(getter)]
    pub fn actual_ticket_combo(&self) -> String {
        self.actual_ticket_combo.clone()
    }

    #[wasm_bindgen(setter)]
    pub fn set_actual_ticket_combo(&mut self, field: String) {
        self.actual_ticket_combo = field;
    }
}*/

/*export class _TicketSet extends TicketSet{

    constructor(tickets:Array<Ticket>=[]){
        super();
        let val:u16=0;
        for(let i = 0;i<tickets.length;i++){
            const ticket = tickets[i];
            const mask:u16 = 0x1<< (ticket.value as u16);
            val = val | mask;
        }

        // @ts-ignore TODO: IMMEDIATELY, CHECK IF THIS RETURN VALUE CAN USE INSTANCE METHODS LIKE ADD
        this.value=val;
    }
}*/



//TicketSetCombo TODO: FINISH CLASS
/*type _TicketSetCombo = Array<_TicketSet>;*/
pub type TicketSetCombo = Vec<TicketSet>;
// type TicketSetCombo_ExternalStr = Array<string>;
/*export function TicketSetComboToExternal(combo:_TicketSetCombo, index: i32 =0, self: Array<_TicketSetCombo> = []):TicketSetCombo{
    return combo.map((ticketset:_TicketSet):TicketSet=>(ticketset as TicketSet));
}*/

/*

//FourTicketSetCombo TODO: FINISH CLASS

export type FourTicketSetCombo_Value = u64;

export class FourTicketSetCombo {
    value!:u64;

    static from_value(val:u64=0):FourTicketSetCombo {
        return {value:val};
    }
}

export class _FourTicketSetCombo extends FourTicketSetCombo{

    constructor(ticket_sets:Array<TicketSet>) {
        super();
        if(ticket_sets.length>4)console.error("WASM ERROR: FOURTICKETSETCOMBO HAS MORE THAN 4 TICKETSETS:   "+ticket_sets.toString());
        this.value=0x0;
        for(let i = 0;i<ticket_sets.length;i++){
            const ticket_set = ticket_sets[i];

            const mask = (0xffff & ticket_set.value) << (i*16);
            this.value = this.value | mask;
        }
    }


}*/


