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
<!-- @migration-task Error while migrating Svelte code: Cannot subscribe to stores that are not declared at the top level of the component -->
<script lang="ts">
    import {Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "@sveltestrap/sveltestrap";
    import type {
        GearPurifyCategory,
        GearPurifyCategoryId,
        NamedGearCategory
    } from "../../types/gearTypes";
    import {createGearPurifyCategoryMap} from "../../types/gearTypes";
    import {gearNameParams} from "../../../assets/translationParams";
    import type {GearInputState} from "../../stores/createGear";
    import * as uuid from "uuid"
    import {batch, type WritableSignal} from "@amadeus-it-group/tansu";



    export let allGearCategoriesMap:ReturnType<typeof createGearPurifyCategoryMap>;
    export let allGearCategories:GearPurifyCategory[];

    // export let gearPurifyCategory:WritableSignal<GearPurifyCategory | null,GearPurifyCategory|null>;
    export let gearPurifyCategory : WritableSignal<GearPurifyCategory | null>;


    export let gearInputState:GearInputState;


    function removeGearFromCategory(gearInputState:GearInputState, gearPurifyCategory:GearPurifyCategory|null){


        batch(()=>{
            if($gearPurifyCategory==null)return;
            $gearPurifyCategory.containedGear = $gearPurifyCategory.containedGear.filter((i)=>(i!==gearInputState))

            $gearPurifyCategory=null;


        })
        allGearCategories=allGearCategories;
        allGearCategoriesMap=allGearCategoriesMap;

    }

    function addGearToCategory(gearInputState:GearInputState, gearPurifyCategory:GearPurifyCategory|null){
        if($gearPurifyCategory==null)return;
        $gearPurifyCategory.containedGear = $gearPurifyCategory.containedGear.filter((i)=>(i!==gearInputState))
        $gearPurifyCategory.containedGear.push(gearInputState);

    }



    function removeGear(){
        removeGearFromCategory(gearInputState, $gearPurifyCategory)
    }

    function addGearToSoloCategory(){
        removeGearFromCategory(gearInputState, $gearPurifyCategory);
        let newCategory:NamedGearCategory = {type: "named", name: "", id:uuid.v4(), containedGear: []}
        allGearCategoriesMap.named.set(newCategory.id,newCategory);
        allGearCategories.push(newCategory);
        addGearToCategory(gearInputState,newCategory)
    }



</script>

<ButtonDropdown>
    <DropdownToggle color={$gearPurifyCategory!=null?"danger":"primary"} caret>
        {#if $gearPurifyCategory!=null}
            Remove
        {:else}
            Select
        {/if}
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem on:click={removeGear}>Remove from Category</DropdownItem>
        <DropdownItem divider />
        <DropdownItem on:click={addGearToSoloCategory}>Add/switch to new solo category</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Add/switch to new category</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Add/switch to existing category</DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>Add to pure category</DropdownItem>

    </DropdownMenu>
</ButtonDropdown>

<style>
    .selected {
        background-color: red;
        color: white;
    }
    button{
        width: 6em;
    }
</style>