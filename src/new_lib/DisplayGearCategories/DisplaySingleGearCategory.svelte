<script lang="ts">

    import {
        Button,
        ButtonDropdown,
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        DropdownItem,
        DropdownMenu,
        DropdownToggle
    } from "@sveltestrap/sveltestrap";
    import type {GearPurifyCategory} from "../types/gearTypes";
    import {createGearPurifyCategoryMap} from "../types/gearTypes";
    import {abilityNameParams} from "../../assets/translationParams";
    import {type SubAbility} from "wasm-splatoon-gear-checker";
    import DisplayAllGearRows from "../DisplayAllGearRows/DisplayAllGearRows.svelte";
    import GearCategoryName from "../ImageTypes/GearCategoryName/GearCategoryName.svelte";
    import type {GearInputState} from "../stores/createGear.svelte";



    interface Props {
        gearCategory: GearPurifyCategory;
        allDisplayedGear: GearInputState[];
        allGearCategories: GearPurifyCategory[];
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
        global_desired_abilities: SubAbility[][];
    }

    let {
        gearCategory = $bindable(),
        allDisplayedGear,
        allGearCategories = $bindable(),
        allGearCategoriesMap = $bindable(),
        global_desired_abilities
    }: Props = $props();


    let showCategory=$state(true);

</script>


<Card style="width: max-content">
    <CardHeader>

        <CardTitle>
            <div style="align-items: center">
                <div style="width:fit-content;margin:auto">
                    <div style="float:left;">
                        <ButtonDropdown>
                            <Button color="primary">
                                Enable/Disable
                            </Button>
                            <DropdownToggle split color="primary" />
                            <DropdownMenu>
                                <DropdownItem>Add Unselected Gear</DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>Delete Category</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    Category: <GearCategoryName gearPurifyCategory={gearCategory}/>
                    <div style="float: right;vertical-align: center;">
                        <Button  on:click={()=>(showCategory=!showCategory)}>{showCategory?"Hide":"Show"}</Button>
                    </div>
                </div>
            </div>
        </CardTitle>
    </CardHeader>

    <CardBody style={showCategory?"":"visibility:collapse;padding:1px"}>
        <DisplayAllGearRows bind:allDisplayedGear={gearCategory.containedGear} bind:allGearCategories bind:allGearCategoriesMap {global_desired_abilities}/>
    </CardBody>


</Card>