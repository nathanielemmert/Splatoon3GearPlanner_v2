<script lang="ts">

    import type {SubAbility} from "wasm-splatoon-gear-checker";
    import {createGearPurifyCategoryMap, type GearPurifyCategory} from "../types/gearTypes";
    import type {GearInputState} from "../stores/createGear";
    import DisplaySingleGearRow from "./DisplaySingleGearRow.svelte";

    interface Props {
        allDisplayedGear: GearInputState[];
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
        global_desired_abilities: SubAbility[][];
        allGearCategories?: GearPurifyCategory[];
    }

    let {
        allDisplayedGear,
        allGearCategoriesMap = $bindable(),
        global_desired_abilities = $bindable(),
        allGearCategories = $bindable([])
    }: Props = $props();

</script>


{#each allDisplayedGear as gearInputState }<!--(gearInputState.RowId)-->
    <DisplaySingleGearRow bind:gearInputState bind:allGearCategoriesMap bind:allGearCategories bind:global_desired_abilities />
{/each}