<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
    import type { HaveGearMap } from "./types/typesLeanny";
    import type { GearParam } from "./types/typesParams";
    /*import {purify_single_gear,ValueToAbilityCombo,ValueToTicketSet} from "../../build/release";*/
    import {brand_data} from "../old_splatoon_data/splatoon3_data_2";
    import SubAbilityImages from "./ImageTypes/SubAbilityImages.svelte";
/*    import {
        BigIntToAbilityCombo,
        getBrandNumber,
        type SingleGearResult,
        // type TicketSet,
        type WasmGear,
        type WasmMap,
    } from "./wasmHelpers/helperFunctions";*/

    import {
        purify_single_gear_js as purify_single_gear,
        type SingleGearResult,
        SixteenAbilityCombo,
        TicketSet
    } from "wasm-splatoon-gear-checker"
    let BigIntToAbilityCombo = SixteenAbilityCombo.to_js_ability_combo
    let ValueToTicketSet = TicketSet.to_js_tickets

    // export let gear: HaveGearMap;
    // export let params_gearInfo: GearParam;
    // export let desiredAbilities: number[][];

    export let single_gear_result:SingleGearResult;


    


    const brand_traits = brand_data["Traits"];

    function num_tickets_used(ticketSetCombos:Array<TicketSet[]>):number{
        console.log(ticketSetCombos.map((ticketSetCombo:TicketSet[])=>{
            return ticketSetCombo.map((ticketSet:TicketSet)=>{
                const ticketsInSet = ValueToTicketSet(ticketSet.value).map(i=>i.value);
                return ticketsInSet
            })
        }))
        return Math.min(...ticketSetCombos.map((ticketSetCombo:TicketSet[])=>{
            return ticketSetCombo.filter((ticketSet:TicketSet)=>{
                const ticketsInSet = ValueToTicketSet(ticketSet.value).map(i=>i.value);
                return !ticketsInSet.includes(0xF);
            }).length
        }))
    }
    

    
    function find_soonest_index_for_each_desired_ability(result: SingleGearResult) {
        // let returnmap: { [key: string]: { soonest_index: number,num_tickets_used:number } } = {};

        let returnmap = new Map<bigint,{ soonest_index: number,num_tickets_used:number }>();

        //ValueToAbilityCombo
        for (let gear_index = 0; gear_index < result.length; gear_index++) {
            for (const [desired_ability,ticket_set_combos] of result[gear_index].entries()) {
                // ticket_set_combos is the TicketSetCombo[], can be used to find combos which use NO TICKETS
                if (!(desired_ability in returnmap)) {
                    returnmap.set( desired_ability,
                        {
                            soonest_index: gear_index,
                            num_tickets_used:num_tickets_used(ticket_set_combos)
                        });
                }
            }
        }
        return returnmap;
    }

    function filter_out_all_tickets(result: SingleGearResult) {
        //TODO: IMPLEMENT THIS function TO DISPLAY GEAR PURIFIABLE WITH NO TICKETS:

        //I will have to loop through the singleGearResult 
        // and manually filter out all entries that require using any tickets. 

        // let returnmap: { [key: string]: { soonest_index: number,num_tickets_used:number } } = {};

        // //ValueToAbilityCombo
        // for (let gear_index = 0; gear_index < result.length; gear_index++) {
        //     for (const desired_ability of result[gear_index].keys) {
        //         // result[gear_index].values is the TicketSetCombo[], can be used to find combos which use NO TICKETS
        //         if (!(desired_ability.toString() in returnmap)) {
        //             returnmap[desired_ability.toString()] = {
        //                 soonest_index: gear_index,
        //                 num_tickets_used:0
        //             };
        //         }
        //     }
        // }
        // return returnmap;
    }





    $: summarized_gear_result =
    [...find_soonest_index_for_each_desired_ability(single_gear_result).entries()]
    .map( ([abilityCombo,{soonest_index,num_tickets_used}])=>[
       BigIntToAbilityCombo(abilityCombo),
        {soonest_index,num_tickets_used}
    ] as const)
    .sort( (entry1,entry2)=>entry1[1].soonest_index-entry2[1].soonest_index);
    //.sort( (entry1,entry2)=>entry1[0][0]-entry2[0][0]); // internal ability order
</script>
<div>
    <table>
        <thead><tr>
            <th>
                Abilities
            </th>
            <th>
                Soonest Index
            </th>
            <th>
                # of Tickets used at that Index
            </th>
        </tr></thead>
        <tbody>
        {#each summarized_gear_result as [abilityIds,{soonest_index,num_tickets_used}] }
            <tr>
                <td>
                    <SubAbilityImages {abilityIds} />
                </td>
                <td>
                    {soonest_index}
                </td>
                <td>
                    {num_tickets_used}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

