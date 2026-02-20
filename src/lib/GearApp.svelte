<script lang="ts">
    import { run } from 'svelte/legacy';

    import { writable, type Writable } from "svelte/store";
/*    import { purify_all_gear } from "../../build/release";*/
    import {purify_all_gear_js as purify_all_gear} from "wasm-splatoon-gear-checker"
    import App from "../App.svelte";
    import DisplayAllGear from "./DisplayAllGear.svelte";
    import DisplayDesiredAbilities from "./DisplayDesiredAbilities.svelte";
    import FileInput from "./SingleUseInputs/JsonFileInput.svelte";
    import MultipleGearTable from "./MultipleGearResult/MultipleGearTable.svelte";
    import type {
        AllGearInputState,
        AllWasmGear,
        GearInputState,
        GearType,
        NewGearFilters,
        WasmGear
    } from "./types/types";
    import type { GearSeedDatabase } from "./types/typesLeanny";
    //import type { MultipleGearResult, TicketCombo_N_Length, WasmGear, WasmMap } from "./wasmHelpers/helperFunctions";
    import {type MultipleGearResult} from "wasm-splatoon-gear-checker";
    import {gearDbStore} from "./stores/stores"
    import InputHowFarToCheck from "./SingleUseInputs/InputHowFarToCheck.svelte";
    import InputTicketDepthLimit from "./SingleUseInputs/InputTicketDepthLimit.svelte";
    import InputCheckFullTicketDepth from "./SingleUseInputs/InputCheckFullTicketDepth.svelte";
    import GearFilters from "./SingleUseInputs/GearFilters.svelte";
    import GearSortAndFilter from "./GearSortAndFilter.svelte";
    import {setContext} from "svelte";
    import {type SingleGearResultFilters} from "./types/types";
    import InputDesiredAbilities from "./InputDesiredAbilities.svelte";
    import InputAllowedDrinks from "./SingleUseInputs/InputAllowedDrinks.svelte";

    let userGearDatabase:GearSeedDatabase = $state();

    let userGearDatabaseStore=writable<GearSeedDatabase>();
    setContext("userGearDatabaseStore",userGearDatabaseStore);
    run(() => {
        $userGearDatabaseStore = userGearDatabase;
    });

    run(() => {
        console.log("userDbStore",$userGearDatabaseStore)
    });

    let howFarToCheck:number=$state(20);
    let ticketDepthLimit:number = $state(3);
    let alwaysCheckFullTicketDepth:boolean=$state(false);

    let globalDesiredAbilities:number[][] = $state([...Array(14).keys()].map(i =>[i,i,i]));

    let gearFilters:NewGearFilters = $state();
    let singleGearResultFilters:SingleGearResultFilters = $state();

    let allowed_drinks:number[]=$state([]);


    //TODO: gearFilters should be applied here, and only be passed down after being filtered.


    let allWasmGear:AllWasmGear= $state({
        "Head":{},
        "Clothes":{},
        "Shoes":{},
    });

    let allGearInputState:AllGearInputState = $state({
        "Head":{},
        "Clothes":{},
        "Shoes":{},
    });


    
    

    let gearToPurifyTogether: WasmGear[]=$state([]);
    let resultIndexToGearId:{[key:number]:[gearType:GearType,gearId:string]} = $state();
    run(() => {
        console.log("REREMDERING RESULTINDEXTOGEARID")
        resultIndexToGearId = {}
        let resultIndex=0;
        function addGearToMap(type:GearType,[gearId,g]:[string,WasmGear]):boolean{
            if(g!=null)resultIndexToGearId[resultIndex++]= [type,gearId]
            return g!=null
        }

        gearToPurifyTogether = [
            ...(Object.entries(allWasmGear["Head"]).filter( addGearToMap.bind(this,"Head") )).map(g =>g[1]),
            ...(Object.entries(allWasmGear["Clothes"]).filter( addGearToMap.bind(this,"Clothes") )).map(g =>g[1]),
            ...(Object.entries(allWasmGear["Shoes"]).filter( addGearToMap.bind(this,"Shoes") )).map(g =>g[1]),
        ];
    });

    let multipleGearResult:MultipleGearResult = $derived(purify_all_gear(gearToPurifyTogether,howFarToCheck,ticketDepthLimit,alwaysCheckFullTicketDepth,allowed_drinks));
    

    run(() => {
        console.log("USER GEAR DATABASE",userGearDatabase)
    });



</script>

<FileInput bind:gearSeedDatabase={userGearDatabase} /><br/>

{#if $userGearDatabaseStore}
    <div class="number-input"><InputHowFarToCheck bind:howFarToCheck/></div>
    <div class="number-input"><InputTicketDepthLimit bind:ticketDepthLimit/></div>
    <InputCheckFullTicketDepth bind:alwaysCheckFullTicketDepth/>
    <InputAllowedDrinks bind:allowed_drinks/>
    <GearSortAndFilter bind:gearFilters bind:singleGearResultFilters/>

    <InputDesiredAbilities bind:desiredAbilities={globalDesiredAbilities}/>
    <DisplayAllGear bind:allGearInputState bind:allWasmGear {userGearDatabase} {howFarToCheck} {globalDesiredAbilities} {gearFilters} {singleGearResultFilters} {allowed_drinks}/>
    <MultipleGearTable {multipleGearResult} {resultIndexToGearId} {userGearDatabase}/>
{/if}

<style>
    .number-input{
        display: flex; 
        justify-content: flex-end
    }
</style>


