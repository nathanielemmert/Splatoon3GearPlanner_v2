<!-- @migration-task Error while migrating Svelte code: Cannot reassign or bind to each block argument in runes mode. Use the array and index variables instead (e.g. `array[i] = value` instead of `entry = value`, or `bind:value={array[i]}` instead of `bind:value={entry}`)
https://svelte.dev/e/each_item_invalid_assignment -->
<script lang="ts">

    import type {SubAbility} from "wasm-splatoon-gear-checker";
    import {createGearPurifyCategoryMap, type GearPurifyCategory} from "../types/gearTypes";
    import type {GearInputState} from "../stores/createGear.svelte";
    import DisplaySingleGearRow from "./DisplaySingleGearRow.svelte";

    interface Props {
        allDisplayedGear: GearInputState[];
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
        global_desired_abilities: SubAbility[][];
        allGearCategories?: GearPurifyCategory[];
    }

    let {
        allDisplayedGear = $bindable(),
        allGearCategoriesMap = $bindable(),
        global_desired_abilities = $bindable(),
        allGearCategories = $bindable([])
    }: Props = $props();

</script>


{#each allDisplayedGear as gearInputState ,i}<!--(gearInputState.RowId)-->
    <DisplaySingleGearRow bind:gearInputState={allDisplayedGear[i]} bind:allGearCategoriesMap bind:allGearCategories bind:global_desired_abilities />
{/each}