<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<!-- @migration-task Error while migrating Svelte code: Identifier 'gearPurifyCategory' has already been declared
https://svelte.dev/e/js_parse_error -->
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component
https://svelte.dev/e/store_invalid_scoped_subscription -->
<script lang="ts">
    import { run } from 'svelte/legacy';


    import type {GearInputState} from "../stores/createGear.svelte";
    import GearImageAndAbilities from "../DisplaySingleGear/SingleGearInputs/GearImageAndAbilities.svelte";
    import InputHowFarToCheck from "../DisplaySingleGear/SingleGearInputs/InputHowFarToCheck.svelte";
    import HideResultTableButton from "../DisplaySingleGear/SingleGearInputs/HideResultTableButton.svelte";
    import InputMaxChunks from "../DisplaySingleGear/SingleGearInputs/InputMaxChunks.svelte";
    import DisplaySingleGear from "../DisplaySingleGear/DisplaySingleGear.svelte";
    import InputGearPurifyCategory from "../DisplaySingleGear/SingleGearInputs/InputGearPurifyCategory.svelte";
    import {createGearPurifyCategoryMap, type GearPurifyCategory} from "../types/gearTypes";
    import {type SubAbility} from "wasm-splatoon-gear-checker";
    import InputGearPurifyCategoryNostore
        from "../DisplaySingleGear/SingleGearInputs/InputGearPurifyCategoryNostore.svelte";
    import GearAbilitiesTable from "../DisplaySingleGear/GearAbilitiesTable/GearAbilitiesTable.svelte";
    import {Button} from "@sveltestrap/sveltestrap";
    import DisplayGlobalAbilities
        from "../DisplaySingleGear/GearAbilitiesTable/DisplayGlobalAbilities/DisplayGlobalAbilities.svelte";
    import InputLocalAbilities
        from "../DisplaySingleGear/GearAbilitiesTable/InputLocalAbilities/InputLocalAbilities.svelte";

    interface Props {
        gearInputState: GearInputState;
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
        global_desired_abilities: SubAbility[][];
        allGearCategories?: GearPurifyCategory[];
        rowType?: "first"|"second"|null;
        hidden?: boolean;
    }


    let {
        gearInputState = $bindable(),
        allGearCategoriesMap = $bindable(),
        global_desired_abilities = $bindable(),
        allGearCategories = $bindable([]),
        rowType = null,
        hidden = false
    }: Props = $props();




    // run(() => {
    //     ({
    //         gearInfo:{gear, gearId, gearType},
    //         gearPurifyCategory,
    //         max_allowed_chunks,
    //         local_how_far_to_check,
    //         hideResultTable,
    //         wasmGear,
    //         desired_abilities_info: {
    //             enable_all_global, enable_all_local,
    //             local_desired_abilities,global_desired_abilities_map, local_desired_abilities_map,
    //             show_all_global, show_all_local, show_disabled_global, show_enabled_global
    //         },
    //         computed_desired_abilities,
    //         single_gear_result
    //     }=gearInputState);
    // });
    let {
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
        }=$derived(gearInputState);
    run(() => {
        console.log($hideResultTable)
    });

</script>

{#if rowType=="first"||rowType==null}
    <tr style={hidden?"visibility:collapse;":""}>
        <DisplaySingleGear>
            {#snippet gearPurifyCategory_snippet()}
                        <div >
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
                    {/snippet}

            {#snippet gearImageAndAbilities_snippet()}
                        <GearImageAndAbilities  {gearId} {gearType}/>
                    {/snippet}
            {#snippet max_allowed_chunks_snippet()}
                        <InputMaxChunks  bind:max_allowed_chunks={$max_allowed_chunks}/>
                    {/snippet}
            {#snippet how_far_to_check_snippet()}
                        <InputHowFarToCheck  bind:how_far_to_check={$local_how_far_to_check}/>
                    {/snippet}
            {#snippet hideResultTable_snippet()}
                        <HideResultTableButton  bind:hideResultTable={$hideResultTable}/>
                    {/snippet}
        </DisplaySingleGear>
    </tr>
{/if}
{#if rowType=="second"||rowType==null}

    <tr style={hidden?"visibility:collapse;":""}>
        <td colspan="6" style={$hideResultTable?"border-color:transparent":""}>
            <GearAbilitiesTable show_all_global={$show_all_global}
                                hideResultTable={$hideResultTable}
            >
                {#snippet enable_all_global_snippet()}
                    <input  type="checkbox" bind:checked={$enable_all_global}/>
                {/snippet}

                {#snippet enable_all_local_snippet()}
                    <input   type="checkbox" bind:checked={$enable_all_local}/>
                {/snippet}

                {#snippet show_all_local_snippet()}
                    <Button  on:click={()=>{show_all_local.update((x)=>(x=!x))}}> {$show_all_local?"Hide":"Show"} </Button>
                    {/snippet}
                    
                <!-- @migration-task: migrate this slot by hand, `show_all_global` would shadow a prop on the parent component -->
                {#snippet show_all_global_snippet()}
                    <Button  on:click={()=>{show_all_global.update((x)=>(x=!x))}}>{$show_all_global?"Hide":"Show"}</Button>
                {/snippet}

                {#snippet show_enabled_global_snippet()}
                    <Button  on:click={()=>{show_enabled_global.update((x)=>(x=!x))}}>{$show_enabled_global?"Hide":"Show"}</Button>
                {/snippet}

                {#snippet show_disabled_global_snippet()}
                    <Button  on:click={()=>{show_disabled_global.update((x)=>(x=!x))}}>{$show_disabled_global?"Hide":"Show"}</Button>
                {/snippet}

                {#snippet disabledGlobalAbilities_snippet()}
                    <DisplayGlobalAbilities 
                                type="disabledAbilities"
                                single_gear_result={$single_gear_result}
                                bind:global_desired_abilities_map={$global_desired_abilities_map}
                                {global_desired_abilities}
                                hidden={!$show_disabled_global||!$show_all_global}/>
                {/snippet}

                {#snippet enabledGlobalAbilities_snippet()}
                    <DisplayGlobalAbilities 
                                type= "enabledAbilities"
                                single_gear_result={$single_gear_result}
                                bind:global_desired_abilities_map={$global_desired_abilities_map}
                                {global_desired_abilities}
                                hidden={!$show_enabled_global||!$show_all_global}/>
                {/snippet}

                {#snippet InputLocalAbilities_snippet()}
                    <InputLocalAbilities 
                                bind:local_desired_abilities={$local_desired_abilities}
                                bind:local_desired_abilities_map={$local_desired_abilities_map}
                                single_gear_result={$single_gear_result}
                                hidden={!$show_all_local} />
                {/snippet}

            </GearAbilitiesTable>
        </td>
    </tr>
{/if}
