<script lang="ts">
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

    let userGearDatabase:GearSeedDatabase;

    let userGearDatabaseStore=writable<GearSeedDatabase>();
    setContext("userGearDatabaseStore",userGearDatabaseStore);
    $: $userGearDatabaseStore = userGearDatabase;

    $:console.log("userDbStore",$userGearDatabaseStore)

    let howFarToCheck:number=20;
    let ticketDepthLimit:number = 3;
    let alwaysCheckFullTicketDepth:boolean=false;

    let globalDesiredAbilities:number[][] = [...Array(14).keys()].map(i =>[i,i,i]);

    let gearFilters:NewGearFilters;
    let singleGearResultFilters:SingleGearResultFilters;

    let allowed_drinks:number[]=[];


    //TODO: gearFilters should be applied here, and only be passed down after being filtered.


    let allWasmGear:AllWasmGear= {
        "Head":{},
        "Clothes":{},
        "Shoes":{},
    };

    let allGearInputState:AllGearInputState = {
        "Head":{},
        "Clothes":{},
        "Shoes":{},
    };


    
    

    let gearToPurifyTogether: WasmGear[]=[];
    let resultIndexToGearId:{[key:number]:[gearType:GearType,gearId:string]};
    $:{
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
    }

    let multipleGearResult:MultipleGearResult;
    $:multipleGearResult = purify_all_gear(gearToPurifyTogether,howFarToCheck,ticketDepthLimit,alwaysCheckFullTicketDepth,allowed_drinks);

    $:console.log("USER GEAR DATABASE",userGearDatabase)



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


