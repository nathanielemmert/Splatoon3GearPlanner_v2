/*import type {SingleGearResult, WasmGear} from "../wasmHelpers/helperFunctions";*/
import type { HaveGearMap } from "./typesLeanny";
import type {ExternalGear, SingleGearResult} from "wasm-splatoon-gear-checker";

export type WasmGear = ExternalGear;


export type GearType = "Head" | "Clothes" | "Shoes";

export type GearFilters = {
    showHeadGear:boolean,
    showClothesGear:boolean,
    showShoesGear:boolean,
}

export type AllWasmGear = {
    "Head":{[key:string]:WasmGear},
    "Clothes":{[key:string]:WasmGear},
    "Shoes":{[key:string]:WasmGear},
};

export type NewGearFilters = {
    [filterName:string]: {
        filterFunction: (currentValue: any, gearType: GearType, [gearId, gear]: [string, HaveGearMap]) => boolean,
        defaultValue:any,
        inputValue?:any,

        inputType:"checkbox"|"dropdown"|"numeric"

    }
};

export type SingleGearResultFilters = {
    [filterName:string]: {
        filterFunction: (currentValue: any, gearType: GearType, [gearId, gear]: [string, HaveGearMap], singleGearResult:SingleGearResult) => boolean,
        defaultValue:any,
        inputValue?:any,

        inputType:"checkbox"|"dropdown"|"numeric"

    }
};

export type AllGearInputState = {
    "Head": {[key:string]:GearInputState},
    "Clothes":{[key:string]:GearInputState},
    "Shoes":{[key:string]:GearInputState},
}

export type GearInputState = {
    inpState:{
        selectedForPurify:boolean,
        hideResultTable:boolean,
    },
    gearInfo:GearInfo,
    categoryState:{
        category:GearCategoryName
    }
    singleGearResult:SingleGearResult
}

export type GearCategoryName = "Hidden"|"Selected"|"Unselected"

export type GearInfo = {
    gearId:string,
    gearType:GearType,
    gear:HaveGearMap,
}



