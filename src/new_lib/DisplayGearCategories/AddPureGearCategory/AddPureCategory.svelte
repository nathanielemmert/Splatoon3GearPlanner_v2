<script lang="ts">
    import { run } from 'svelte/legacy';


    import {
        Button, ButtonDropdown,
        Dropdown, DropdownItem,
        DropdownMenu,
        DropdownToggle, ListGroup, ListGroupItem,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader
    } from "@sveltestrap/sveltestrap";
    import {
        createGearPurifyCategoryMap,
        type GearPurifyCategory, type GearPurifyCategoryId,
        type PureGearCategory
    } from "../../types/gearCategoryTypes";
    import {GearType} from "../../types/gearTypes"
    import {LeannySubAbility} from "wasm-splatoon-gear-checker";
    import InputGearType from "../Inputs/InputGearType.svelte";
    import InputSubAbility from "../Inputs/InputSubAbility.svelte";
    import {gearInfoParams as gearInfoParams} from "../../../assets/gearInfoParams";
    import {OrderedMap} from "immutable";
    import {ALL_SUB_ABILITIES} from "../../types/helperFunctions";
    import SubAbilityImage from "../../ImageTypes/SubAbilityImage.svelte";
    import SubAbilityImages from "../../ImageTypes/SubAbilityImages.svelte";
    import SmallSubAbilityImage from "../../ImageTypes/SmallSubAbilityImage.svelte";
    import SmallSubAbilityImages from "../../ImageTypes/SmallSubAbilityImages.svelte";
    import SelectPureCategory from "./SelectPureCategory.svelte";
    import type {GearInputState} from "../../stores/createGear.svelte";
    import {batch} from "@amadeus-it-group/tansu";



    let gearType:GearType=$state(null);
    let subAbility:LeannySubAbility=$state(LeannySubAbility.None);


    interface Props {
        allGearCategories: GearPurifyCategory[];
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
        allDisplayedGear: GearInputState[];
        open: boolean;
    }

    let {
        allGearCategories = $bindable(),
        allGearCategoriesMap = $bindable(),
        allDisplayedGear = $bindable(),
        open = $bindable()
    }: Props = $props();

    
    const toggle = ()=>{
        open=!open
        if(!open){
            gearType=null;
            subAbility=LeannySubAbility.None;
        }
    };
    let validInput = $derived(gearType!=null && subAbility!=LeannySubAbility.None)
    run(() => {
        console.log(gearType,subAbility,validInput)
    });

    function createPureGearCategory(auto_add:boolean){
        let containedGearState = $state([])
        let newCategory:PureGearCategory = $state({type: "pure", gearType, subAbility, containedGear:containedGearState});
        if(allGearCategoriesMap.pure.get(gearType)?.get(subAbility)==null){
            allGearCategoriesMap.pure.get(gearType)?.set(subAbility,newCategory)
            allGearCategoriesMap=allGearCategoriesMap;

            allGearCategories.push(newCategory)
        }
        if(auto_add){
            console.log("AUTO ADD");
            addAllGearToCategory(newCategory)
        }
        toggle()
    }


    function addAllGearToCategory(newCategory:GearPurifyCategory){batch(()=>{
            console.log("STARTED ADDING",allDisplayedGear)
            let x = 0
            for(const gearInputState of allDisplayedGear) {
                console.log("ADDING",x++);
               const {
                   gearPurifyCategory, single_gear_result, gearInfo,
                   desired_abilities_info:{enable_all_global,show_all_global,local_desired_abilities_map,local_desired_abilities}
               } = gearInputState;

               if(gearPurifyCategory()!=null){continue;}
               if(gearInfo.gearType!=gearType){continue;}
                if(gearInfo.gear.RandomContext==0){continue;}
               if(gearInfo.gear.MainSkill!=subAbility){continue;}
               if(single_gear_result().summary[[subAbility,subAbility,subAbility]]==null){continue;}


               newCategory.containedGear.push(gearInputState);newCategory.containedGear=newCategory.containedGear;
               gearPurifyCategory.set(newCategory);
               //TODO: DISABLE ALL GLOBAL DESIRED ABILITIES OF THE GEAR. SET LOCAL ONES TO ONLY BE 3 IN A ROW OF THE MAIN ABILITY.
               enable_all_global.set(false);
               show_all_global.set(false);
               local_desired_abilities_map.set( OrderedMap())
               local_desired_abilities.set([[subAbility,subAbility,subAbility]])
            }
            console.log(newCategory)
    });console.log("FINISHED ADDING");}


</script>
<!--
1. Input gearType
2. Input SubAbility

If category already exists, show that.

Two Submit buttons. One to add All unselected, the other to create the category as empty.

3. Automatically add unselected gear to this category?

Onsubmit, set gear.category to the category, and add gear rowId to the category.
-->

<!--<InputGearType bind:gearType/>
        <InputSubAbility bind:subAbility/>

        -->


<Modal bind:isOpen={open} {toggle} scrollable>
    <ModalHeader {toggle}>Add PURE Category</ModalHeader>
    <ModalBody>
        <h4 class="mt-3">Not Created Yet:</h4>
        <SelectPureCategory bind:subAbility {allGearCategoriesMap} bind:gearType/>

        <h4 class="mt-3">Already Created:</h4>
        <SelectPureCategory bind:subAbility bind:gearType {allGearCategoriesMap} alreadyCreated/>

    </ModalBody>
    <ModalFooter>
            <div style:margin-right={"auto"}> <!-- margin-right overrides the right alignment of modal footer to make this div left aligned. -->
                OR: Manually Select Main/Sub:
            </div>
            (TODO: Add Main/sub input here on next line)
            <div>
                <Button color="primary" disabled={!validInput} on:click={()=>createPureGearCategory(true)}>Create category & add all gear</Button>
                <Button color="primary" disabled={!validInput} on:click={()=>createPureGearCategory(false)}>Create empty category</Button><br/>
            </div>
            
            <Button color="secondary" on:click={toggle}>Cancel</Button><br/>
    </ModalFooter>
</Modal>


<style>
    div{
        padding: 2px;
    }
</style>


