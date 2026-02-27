<script lang="ts">
    import {Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "@sveltestrap/sveltestrap";
    import type {
        GearPurifyCategory,

        NamedGearCategory
    } from "../../types/gearCategoryTypes";
    import {createGearPurifyCategoryMap} from "../../types/gearCategoryTypes";
    import {abilityNameParams, gearNameParams} from "../../../assets/translationParams";
    import type {GearInputState} from "../../stores/createGear.svelte";
    import * as uuid from "uuid"
    import {batch, type WritableSignal} from "@amadeus-it-group/tansu";
    import {MainAbility, type SubAbility} from "wasm-splatoon-gear-checker";




    // export let gearPurifyCategory:WritableSignal<GearPurifyCategory | null,GearPurifyCategory|null>;


    interface Props {
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
        allGearCategories: GearPurifyCategory[];
        gearPurifyCategory: GearPurifyCategory | null;
        gearInputState: GearInputState;
    }

    let {
        allGearCategoriesMap = $bindable(),
        allGearCategories = $bindable(),
        gearPurifyCategory = $bindable(),
        gearInputState = $bindable()
    }: Props = $props();


    function removeGearFromCategory(){


/*        batch(()=>{

        })*/

        if(gearPurifyCategory==null)return;
        gearPurifyCategory.containedGear = gearPurifyCategory.containedGear.filter((i)=>(i!==gearInputState))
        gearPurifyCategory=null;
        allGearCategories=allGearCategories;
        allGearCategoriesMap=allGearCategoriesMap;
        gearInputState=gearInputState;



    }


    function addGearToCategory(gearPurifyCategory:GearPurifyCategory|null){
        if(/*$*/gearPurifyCategory==null)return;
        /*$*/gearPurifyCategory.containedGear = /*$*/gearPurifyCategory.containedGear.filter((i)=>(i!==gearInputState))
        /*$*/gearPurifyCategory.containedGear.push(gearInputState);

    }


    function addGearToSoloCategory(){
        removeGearFromCategory();
        let newCategory:NamedGearCategory = {type: "named", name: "", id:uuid.v4(), containedGear: []}
        allGearCategoriesMap.named.set(newCategory.id,newCategory);
        allGearCategories.push(newCategory);
        addGearToCategory(newCategory)
    }



</script>

<!--<div>
    <select bind:value={gearPurifyCategory}
            on:change={(e)=>{
                if(e.target.value==null){
                    removeGear()
                }
            }}
    >
        <option>Random</option>
        <option value={null}>null</option>
        <option value={"TEST"}>TEST</option>
        {#if gearPurifyCategory!=null && typeof gearPurifyCategory=="object"}
            <option value={gearPurifyCategory}>{abilityNameParams[MainAbility[gearPurifyCategory?.containedGear[0].gearInfo.gear.MainSkill]]}</option>
        {/if}
    </select>
    <button on:click={removeGear}>Remove from Category</button>
</div>-->

<ButtonDropdown>
    <DropdownToggle color={gearPurifyCategory!=null?"danger":"primary"} caret>
        {#if /*$*/gearPurifyCategory!=null}
            Remove
        {:else}
            Select
        {/if}
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem on:click={removeGearFromCategory}>Remove from Category</DropdownItem>
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