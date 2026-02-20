// @ts-ignore

import {type GearInfo, type GearPurifyCategory} from "../types/gearTypes";
import {gearInfoParams} from "../../assets/gearInfoParams";
import {Gear, type SubAbility} from "wasm-splatoon-gear-checker";
import {OrderedMap} from "immutable";
import {DEFAULT_ALLOWED_DRINKS} from "../types/helperFunctions";
import {writable, derived, type StoreOptions} from "@amadeus-it-group/tansu"
import {global_desired_abilities, globalHowFarToCheck, IMMUTABLE_STORE_OPTIONS} from "./globalSettings.svelte";


export type GearInputState = ReturnType<typeof createGear>;


export function createGear(gearInfo:GearInfo){
    console.log("CREATE GEAR")
    const {gearType, gearId, gear} = gearInfo;
    const RowId = gearInfoParams[gearType][gearId].__RowId;
    const gearBrand = gearInfoParams[gearType][gearId].Brand;
    const wasmGear = new Gear(RowId, gear.RandomContext,gearBrand)

    const enable_all_local=writable(true);
    const enable_all_global=writable(true);
    const local_desired_abilities= writable([] as SubAbility[][],IMMUTABLE_STORE_OPTIONS);
    const local_desired_abilities_map = writable(OrderedMap<SubAbility[],boolean>(),IMMUTABLE_STORE_OPTIONS);
    const global_desired_abilities_map = writable(OrderedMap<SubAbility[],boolean>(),IMMUTABLE_STORE_OPTIONS);

    const max_allowed_chunks = writable(10);
    const local_how_far_to_check = writable<number|undefined>(20);
    const computed_how_far_to_check =
        derived(
            [globalHowFarToCheck, local_how_far_to_check],
            ([$globalHowFarToCheck, $local_how_far_to_check])=>{
                return $local_how_far_to_check ?? $globalHowFarToCheck;
            }
        );

    enable_all_local.subscribe(()=>console.log(RowId,"enable_all_local"))
    enable_all_global.subscribe(()=>console.log(RowId,"enable_all_global"))
    local_desired_abilities.subscribe(()=>console.log(RowId,"local_desired_abilities"))
    local_desired_abilities_map.subscribe(()=>console.log(RowId,"local_desired_abilities_map"))
    global_desired_abilities_map.subscribe(()=>console.log(RowId,"global_desired_abilities_map"))
    global_desired_abilities.subscribe(()=>console.log(RowId,"global_desired_abilities"))



    const computed_desired_abilities = derived(
        [enable_all_local, enable_all_global, local_desired_abilities, local_desired_abilities_map, global_desired_abilities, global_desired_abilities_map],
        ([$enable_all_local,
              $enable_all_global,
              $local_desired_abilities,
              $local_desired_abilities_map,
              $global_desired_abilities,
              $global_desired_abilities_map]
        ) => {
            console.log("COMPUTING DESIRED ABILITIES")
            let x = new Set<string>();
            if($enable_all_global){
                for(let a of $global_desired_abilities){
                    if(($global_desired_abilities_map.get(a)??true)){
                        x.add(JSON.stringify(a))
                    }
                }
            }

            if($enable_all_local){
                for(let a of $local_desired_abilities){
                    if(($local_desired_abilities_map.get(a)??true)){
                        x.add(JSON.stringify(a))
                    }
                }
            }
            let new_desired_abilities:SubAbility[][]  = [...x].map(i=>JSON.parse(i));
            return new_desired_abilities
        });


    max_allowed_chunks.subscribe((value)=>{wasmGear.max_allowed_chunks=value});
    local_how_far_to_check.subscribe((value)=>{wasmGear.how_far_to_check=value});
    computed_desired_abilities.subscribe((value)=>{wasmGear.desired_abilities=value});

    let dont_recompute_initial_value=false;
    //TODO: i want one singular optimized webworker that inputs all of the wasmGear, and outputs an array of single_gear_results.
    // 1. it should be called in DisplayAllGear in the initialize_app() function.
    // 2. this function will receive 1 of the single_gear_results to use as an initial value.
    // 3. once 1 and 2 are complete, set dont_recompute_initial_value = true so it isnt recomputed.

    let single_gear_result = derived(
        [computed_desired_abilities,max_allowed_chunks,computed_how_far_to_check],
        ([$computed_desired_abilities,
             $max_allowed_chunks,
             $computed_how_far_to_check
         ])=>{
            if (dont_recompute_initial_value){
                dont_recompute_initial_value=false;
                return;
            }
            let x = wasmGear.purify_single_gear($computed_how_far_to_check,DEFAULT_ALLOWED_DRINKS);
            type SummaryKey = string//should be SubAbility[]
            type SummaryValue = typeof x.summary extends Map<any, infer I> ? I : never
            return  {
                ...x,
                summary:Object.fromEntries(x.summary.entries()) as { [key:SummaryKey]:SummaryValue }
            };
        }
    ,{summary: {},single_gear_result:[]})
    single_gear_result.subscribe(()=>console.log("single_gear_result"))

    return {
        RowId,
        gearInfo,
        gearPurifyCategory:writable<GearPurifyCategory|null>(null),
        max_allowed_chunks,
        local_how_far_to_check,
        computed_how_far_to_check,
        hideResultTable:writable(true),
        desired_abilities_info:{
            enable_all_local,
            enable_all_global,
            local_desired_abilities,
            local_desired_abilities_map,
            global_desired_abilities_map,
            show_all_local:writable(true),
            show_all_global:writable(true),
            show_enabled_global:writable(true),
            show_disabled_global:writable(false),
        },
        computed_desired_abilities,
        single_gear_result,
        wasmGear,
    }
}