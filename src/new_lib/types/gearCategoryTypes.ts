import type { SubAbility } from "wasm-splatoon-gear-checker/pkg/wasm_splatoon_gear_checker";
import { GearType } from "./gearTypes";
import type { GearInputState } from "../stores/createGear.svelte";

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
