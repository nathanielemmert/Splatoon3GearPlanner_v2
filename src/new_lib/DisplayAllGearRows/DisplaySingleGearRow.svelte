<script lang="ts">

    import type {GearInputState} from "../stores/createGear";
    import GearImageAndAbilities from "../DisplaySingleGear/SingleGearInputs/GearImageAndAbilities.svelte";
    import InputHowFarToCheck from "../DisplaySingleGear/SingleGearInputs/InputHowFarToCheck.svelte";
    import HideResultTableButton from "../DisplaySingleGear/SingleGearInputs/HideResultTableButton.svelte";
    import InputMaxChunks from "../DisplaySingleGear/SingleGearInputs/InputMaxChunks.svelte";
    import DisplaySingleGear from "../DisplaySingleGear/DisplaySingleGear.svelte";
    import InputGearPurifyCategory from "../DisplaySingleGear/SingleGearInputs/InputGearPurifyCategory.svelte";
    import {createGearPurifyCategoryMap, type GearPurifyCategory} from "../types/gearTypes";
    import {SubAbility} from "wasm-splatoon-gear-checker";
    import InputGearPurifyCategoryNostore
        from "../DisplaySingleGear/SingleGearInputs/InputGearPurifyCategoryNostore.svelte";
    import GearAbilitiesTable from "../DisplaySingleGear/GearAbilitiesTable/GearAbilitiesTable.svelte";
    import {Button} from "sveltestrap";
    import DisplayGlobalAbilities
        from "../DisplaySingleGear/GearAbilitiesTable/DisplayGlobalAbilities/DisplayGlobalAbilities.svelte";
    import InputLocalAbilities
        from "../DisplaySingleGear/GearAbilitiesTable/InputLocalAbilities/InputLocalAbilities.svelte";

    export let gearInputState:GearInputState;
    export let allGearCategoriesMap :ReturnType<typeof createGearPurifyCategoryMap>;
    export let global_desired_abilities:SubAbility[][];
    export let allGearCategories:GearPurifyCategory[] = [];
    export let rowType:"first"|"second"
    export let hidden:boolean=false;



    $:({
        gearInfo:{gear, gearId, gearType},
        gearPurifyCategory,
        max_allowed_chunks,
        local_how_far_to_check,
        hideResultTable,
        wasmGear,
        desired_abilities_info: {
            enable_all_global, enable_all_local,
            local_desired_abilities,global_desired_abilities_map, local_desired_abilities_map,
            show_all_global, show_all_local, show_disabled_global, show_enabled_global
        },
        computed_desired_abilities,
        single_gear_result
    }=gearInputState);
    $:console.log($hideResultTable)

</script>
{#if rowType=="first"||rowType==null}
    <tr style={hidden?"visibility:collapse;":""}>
        <DisplaySingleGear>
            <div slot="gearPurifyCategory">
                <!-- <InputGearPurifyCategoryNostore
                                          bind:allGearCategories
                                          bind:allGearCategoriesMap
                                          bind:gearInputState
                                          bind:gearPurifyCategory={$gearPurifyCategory}
                 />-->
                <InputGearPurifyCategory
                        bind:allGearCategories
                        bind:allGearCategoriesMap
                        bind:gearInputState
                        bind:gearPurifyCategory={gearPurifyCategory}
                />
            </div>

            <GearImageAndAbilities slot="gearImageAndAbilities" {gearId} {gearType}/>
            <InputMaxChunks slot="max_allowed_chunks" bind:max_allowed_chunks={$max_allowed_chunks}/>
            <InputHowFarToCheck slot="how_far_to_check" bind:how_far_to_check={$local_how_far_to_check}/>
            <HideResultTableButton slot="hideResultTable" bind:hideResultTable={$hideResultTable}/>
        </DisplaySingleGear>
    </tr>
{/if}
{#if rowType=="second"||rowType==null}

    <tr style={hidden?"visibility:collapse;":""}>
        <td colspan="6" style={$hideResultTable?"border-color:transparent":""}>
            <GearAbilitiesTable show_all_global={$show_all_global}
                                hideResultTable={$hideResultTable}
            >
                <input slot="enable_all_global" type="checkbox" bind:checked={$enable_all_global}/>
                <input slot="enable_all_local"  type="checkbox" bind:checked={$enable_all_local}/>
                <Button slot="show_all_local" on:click={()=>{show_all_local.update((x)=>(x=!x))}}> {$show_all_local?"Hide":"Show"} </Button>
                <Button slot="show_all_global" on:click={()=>{show_all_global.update((x)=>(x=!x))}}>{$show_all_global?"Hide":"Show"}</Button>
                <Button slot="show_enabled_global" on:click={()=>{show_enabled_global.update((x)=>(x=!x))}}>{$show_enabled_global?"Hide":"Show"}</Button>
                <Button slot="show_disabled_global" on:click={()=>{show_disabled_global.update((x)=>(x=!x))}}>{$show_disabled_global?"Hide":"Show"}</Button>
                <DisplayGlobalAbilities slot="disabledGlobalAbilities"
                                        type="disabledAbilities"
                                        single_gear_result={$single_gear_result}
                                        bind:global_desired_abilities_map={$global_desired_abilities_map}
                                        {global_desired_abilities}
                                        hidden={!$show_disabled_global||!$show_all_global}/>
                <DisplayGlobalAbilities slot= "enabledGlobalAbilities"
                                        type= "enabledAbilities"
                                        single_gear_result={$single_gear_result}
                                        bind:global_desired_abilities_map={$global_desired_abilities_map}
                                        {global_desired_abilities}
                                        hidden={!$show_enabled_global||!$show_all_global}/>
                <InputLocalAbilities slot="InputLocalAbilities"
                                     bind:local_desired_abilities={$local_desired_abilities}
                                     bind:local_desired_abilities_map={$local_desired_abilities_map}
                                     single_gear_result={$single_gear_result}
                                     hidden={!$show_all_local} />
            </GearAbilitiesTable>
        </td>
    </tr>
{/if}
