<script lang="ts">
    import { writable } from "svelte/store";
    import type { GearSeedDatabase } from "./types/typesLeanny";
    import { setContext } from "svelte";
    import JsonFileInput from "./SingleUseInputs/JsonFileInput.svelte";
    import { SubAbility, Ticket } from "wasm-splatoon-gear-checker";
    import { ALL_SUB_ABILITIES } from "./types/helperFunctions";
    import DisplayAllGear from "./DisplayAllGear.svelte";
    import InputDesiredAbilities from "./SingleUseInputs/InputDesiredAbilities/InputDesiredAbilities.svelte";
    import {global_desired_abilities, globalHowFarToCheck} from "./stores/globalSettings.svelte";
    import InputHowFarToCheck from "./DisplaySingleGear/SingleGearInputs/InputHowFarToCheck.svelte";




    let userGearDatabase = $state({state:null as GearSeedDatabase});



    setContext<{state:GearSeedDatabase}>("userGearDatabaseStore",userGearDatabase);// could use createContext instead of setContext() https://svelte.dev/docs/svelte/context#Type-safe-context
    /* 
    There is only one usage of userGearDatabaseStore, so it should be easy to refactor 
    Usages of getContext("userGearDatabaseStore")
        - new_lib/DisplaySingleGear/SingleGearInputs/GearImageAndAbilities.svelte
    */
    

    

    let allowed_drinks:Ticket[]=[];


</script>

<JsonFileInput bind:gearSeedDatabase={userGearDatabase.state} /><br/>
{#if userGearDatabase.state!=null}
    <div class="number-input"><InputHowFarToCheck bind:how_far_to_check={$globalHowFarToCheck}/></div>
<!--
    <div class="number-input"><InputTicketDepthLimit bind:ticketDepthLimit/></div>
    <InputAllowedDrinks bind:allowed_drinks/>
    <GearSortAndFilter bind:gearFilters bind:singleGearResultFilters/> -->

    <DisplayAllGear userGearDatabase = {userGearDatabase.state} global_desired_abilities={$global_desired_abilities} {allowed_drinks}/> <!-- howFarToCheck={$globalHowFarToCheck} -->
<!--<MultipleGearTable {multipleGearResult} {resultIndexToGearId} {userGearDatabase}/> -->
{/if}


<style>
    .number-input{
        display: flex; 
        justify-content: flex-end
    }
</style>


