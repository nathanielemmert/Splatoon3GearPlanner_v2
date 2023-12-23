<script lang="ts">

    import type {SubAbility} from "wasm-splatoon-gear-checker";
    import {createGearPurifyCategoryMap, type GearPurifyCategory} from "../types/gearTypes";
    import type {GearInputState} from "../stores/createGear";
    import DisplaySingleGearRow from "./DisplaySingleGearRow.svelte";

    export let allDisplayedGear:GearInputState[];
    export let allGearCategoriesMap :ReturnType<typeof createGearPurifyCategoryMap>;
    export let global_desired_abilities:SubAbility[][];
    export let allGearCategories:GearPurifyCategory[] = [];

</script>


{#each allDisplayedGear as gearInputState }<!--(gearInputState.RowId)-->
    <DisplaySingleGearRow bind:gearInputState bind:allGearCategoriesMap bind:allGearCategories bind:global_desired_abilities />
{/each}