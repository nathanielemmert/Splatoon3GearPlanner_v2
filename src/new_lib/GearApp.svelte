<script lang="ts">
    import { writable } from "svelte/store";
    import type { GearSeedDatabase } from "./types/typesLeanny";
    import { setContext } from "svelte";
    import JsonFileInput from "./SingleUseInputs/JsonFileInput.svelte";
    import { SubAbility, Ticket } from "wasm-splatoon-gear-checker";
    import { ALL_SUB_ABILITIES } from "./types/helperFunctions";
    import DisplayAllGear from "./DisplayAllGear.svelte";
    import InputDesiredAbilities from "./SingleUseInputs/InputDesiredAbilities/InputDesiredAbilities.svelte";
    import {global_desired_abilities, globalHowFarToCheck} from "./stores/globalSettings";
    import InputHowFarToCheck from "./DisplaySingleGear/SingleGearInputs/InputHowFarToCheck.svelte";




    let userGearDatabase:GearSeedDatabase = $derived(userGearDatabase);

    let userGearDatabaseStore=writable<GearSeedDatabase>();
    setContext("userGearDatabaseStore",userGearDatabaseStore);
    

    let allowed_drinks:Ticket[]=[];


</script>

<JsonFileInput bind:gearSeedDatabase={userGearDatabase} /><br/>
{#if $userGearDatabaseStore}
    <div class="number-input"><InputHowFarToCheck bind:how_far_to_check={$globalHowFarToCheck}/></div>
<!--
    <div class="number-input"><InputTicketDepthLimit bind:ticketDepthLimit/></div>
    <InputAllowedDrinks bind:allowed_drinks/>
    <GearSortAndFilter bind:gearFilters bind:singleGearResultFilters/> -->

    <DisplayAllGear {userGearDatabase} howFarToCheck={$globalHowFarToCheck} global_desired_abilities={$global_desired_abilities} {allowed_drinks}/>
<!--     <MultipleGearTable {multipleGearResult} {resultIndexToGearId} {userGearDatabase}/> -->
{/if}


<style>
    .number-input{
        display: flex; 
        justify-content: flex-end
    }
</style>


