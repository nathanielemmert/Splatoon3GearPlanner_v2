import type { HaveGearMap } from "./typesLeanny";
import type {SingleGearResult, SubAbility} from "wasm-splatoon-gear-checker";
import {type Brand, Gear} from "wasm-splatoon-gear-checker";
import type {WasmGear} from "../../lib/types/types";
import {OrderedMap} from "immutable";
import type {GearInputState} from "../stores/createGear.svelte.svelte";




export const GearType = ["Head" , "Clothes" , "Shoes"] as const;
export type GearType = typeof GearType[number];

export type PureGearCategory = {
    type:"pure",
    id:string,
    gearType:GearType,
    subAbility:SubAbility,
    containedGear:GearInputState[]

};
export type NamedGearCategory = {
    type:"named",
    id:string,
    name:string,
    containedGear:GearInputState[],
}

export type GearPurifyCategory = PureGearCategory | NamedGearCategory
export type GearPurifyCategoryType = GearPurifyCategory["type"]

export type GearPurifyCategoryId = Pick<PureGearCategory, "type"|"gearType"|"subAbility"> | Pick<NamedGearCategory, "type"|"name">


export function createGearPurifyCategoryMap(

):{pure: Map<"Head" | "Clothes" | "Shoes", Map<SubAbility, GearPurifyCategory>>, named: Map<string, GearPurifyCategory>}{
    return {
        pure:new Map([
            ...GearType.map((gearType)=>[
                gearType,
                new Map<SubAbility,GearPurifyCategory>()
            ] as const)
        ]),
        named:new Map<string,GearPurifyCategory>(),
    }
}



export type GearInfo = {
    gearId:string,
    gearType:GearType,
    gear:HaveGearMap,
}






/*export type GearInputState = {
    inpState:{
        selectedForPurify:boolean,
        hideResultTable:boolean,
    },
    gearInfo:GearInfo,
    categoryState:{
        category:GearCategoryName
    }
    singleGearResult:SingleGearResult
}*/

// DisplayCategory: visible/hidden
// PurifyCategory: [arbitrary]

// desired_abilities
// allowed_chunks
// max_allowed_chunks
// how_far_to_check
/* 
Each DisplaySingleGear:
    1. Dropdown Button to Add Gear to PurifyCategory
    2. Picture of Gear and its Main/Sub Abilities. 
    3. max allowed chunks (dropdown)
        3a. advanced: specify individual chunk amounts.
    4. How far to Check(textbox)    
    5. Show Dropdown


    Dropdown: Global/Local desired abilities. 
        1. Global desired abilities (hidden/visible) // Hidden has a default of being shown, user can click to hide them.
            - enable/disable Checkbox for entire category, and individual desired abilities.

        2. Local desired abilities (hidden/visible) // Hidden has a default of being shown, user can click to hide them.
            - enable/disable Checkbox for entire category, and individual desired abilities.

        All desired abilities have their background color changed depending on if they are possible under the current SingleGearResult/MultiGearResult.

At the bottom:
    Displays each GearCategory.
    Button to add category:
        1. empty custom category
        2. creates category by gearType and MainAbility, and adds all applicable gear to that category (ignores gears that are filtered out or already in a category.)
         




*/

