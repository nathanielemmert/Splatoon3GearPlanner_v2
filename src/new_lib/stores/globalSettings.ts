

import {ALL_SUB_ABILITIES} from "../types/helperFunctions";
import {writable} from "@amadeus-it-group/tansu";

/* from svelte source code: https://github.com/sveltejs/svelte/blob/93313982991320c7bf2d65a037565b275addbea8/src/runtime/internal/utils.ts#L39*/
export function not_equal<T>(a: T, b: T):boolean {
    return a != a ? b == b : a !== b;
}

export const IMMUTABLE_STORE_OPTIONS = {
    equal:function immutableEqual<T>(a: T, b: T):boolean{
        return !not_equal(a,b);
    }
};

export let globalHowFarToCheck=writable(20);
export let ticketDepthLimit=writable(4);
export let alwaysCheckFullTicketDepth=writable(false);
export let forcedTicketDepthLimit=writable(3);
// separate setting for *Force checked* ticket depth limit.
//     e.g. CAN go up to 5, ALWAYS go to at least 4.

export let global_desired_abilities = writable(ALL_SUB_ABILITIES.map(i =>[i,i,i]),IMMUTABLE_STORE_OPTIONS);
// global_desired_abilities.subscribe(()=>console.log("global_desired_abilities_map"))






