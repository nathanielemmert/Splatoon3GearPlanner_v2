import {LeannyDrink, LeannySubAbility, MainAbility, SubAbility, Ticket} from "wasm-splatoon-gear-checker"


export function transformLeannyDrinkIntoTicket(drink:LeannyDrink):Ticket{
    switch(drink){
        case LeannyDrink.None:
            return Ticket.None
        default:
            return drink as unknown as Ticket
    }
}

export const subAbilitiesArePure = (input:[LeannySubAbility, LeannySubAbility, LeannySubAbility]) => {
            const base = input[0];
            return input.every(element => element === base);
}
export function arraysEqual(a:any[], b:any[]):boolean {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
}

function enumValues<O extends object, V extends O[keyof O] >(obj: O): V[] {
    return Object.values(obj).filter(k => !isNaN(k)) as V[]
}

export const ALL_SUB_ABILITIES = enumValues(SubAbility);
export const ALL_TICKETS = enumValues(Ticket);
export const ALL_LEANNY_SUB_ABILITIES = enumValues(LeannySubAbility);
export const ALL_MAIN_ABILITIES = enumValues(MainAbility);

export const DEFAULT_ALLOWED_DRINKS = new Map(ALL_TICKETS.map(i=>[i,99]));

export const ABILITY_NAMES = [
    "Ink Saver (Main)",
    "Ink Saver (Sub)",
    "Ink Recovery Up",
    "Run Speed Up",
    "Swim Speed Up",
    "Special Charge Up",
    "Special Saver",
    "Special Power Up",
    "Quick Respawn",
    "Quick Super Jump",
    "Sub Power Up",
    "Ink Resistance Up",
    "Sub Resistance Up",
    "Intensify Action"
];