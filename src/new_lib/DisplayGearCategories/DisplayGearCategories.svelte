
<script lang="ts">
    import {createGearPurifyCategoryMap,  type GearPurifyCategory} from "../types/gearTypes";
    import {
        Button,
        ButtonDropdown,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle, DropdownItem, DropdownMenu, DropdownToggle, Modal
    } from "sveltestrap";
    import AddPureCategory from "./AddPureGearCategory/AddPureCategory.svelte";
    import DisplaySingleGearCategory from "./DisplaySingleGearCategory.svelte";
    import {SubAbility} from "wasm-splatoon-gear-checker";
    import type {GearInputState} from "../stores/createGear";

    export let allGearCategories:GearPurifyCategory[];
    export let allGearCategoriesMap:ReturnType<typeof createGearPurifyCategoryMap>;
    export let allDisplayedGear:GearInputState[];
    export let global_desired_abilities:SubAbility[][]


    let modalOpen = false;


</script>


<div>
    <AddPureCategory bind:open={modalOpen} bind:allGearCategories bind:allGearCategoriesMap bind:allDisplayedGear/>
    <Card class="mb-3" style="width: max-content;margin: auto;min-width: 720px">

        <CardHeader >
            <CardTitle >
                <ButtonDropdown>
                    <DropdownToggle color="primary" caret>Add new Category</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Add Named Category</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem on:click={()=>{modalOpen=true}}>Add PURE category</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <span style="text-align: center; width: auto">Gear Categories</span>
            </CardTitle>
        </CardHeader>

        <CardBody>
            {#each allGearCategories as gearCategory}
                <DisplaySingleGearCategory bind:gearCategory bind:allDisplayedGear  bind:allGearCategories bind:allGearCategoriesMap {global_desired_abilities}/>
            {/each}
        </CardBody>
    </Card>
</div>
