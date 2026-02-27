
<script lang="ts">
    import {createGearPurifyCategoryMap,  type GearPurifyCategory} from "../types/gearCategoryTypes";
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
    } from "@sveltestrap/sveltestrap";
    import AddPureCategory from "./AddPureGearCategory/AddPureCategory.svelte";
    import DisplaySingleGearCategory from "./DisplaySingleGearCategory.svelte";
    import {type SubAbility} from "wasm-splatoon-gear-checker";
    import type {GearInputState} from "../stores/createGear.svelte";

    interface Props {
        allGearCategories: GearPurifyCategory[];
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
        allDisplayedGear: GearInputState[];
        global_desired_abilities: SubAbility[][];
    }

    let {
        allGearCategories = $bindable(),
        allGearCategoriesMap = $bindable(),
        allDisplayedGear = $bindable(),
        global_desired_abilities
    }: Props = $props();


    let modalOpen = $state(false);


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
            {#each allGearCategories as gearCategory,i}
                <DisplaySingleGearCategory bind:gearCategory={allGearCategories[i]} {allDisplayedGear}  bind:allGearCategories bind:allGearCategoriesMap {global_desired_abilities}/>
            {/each}
        </CardBody>
    </Card>
</div>
