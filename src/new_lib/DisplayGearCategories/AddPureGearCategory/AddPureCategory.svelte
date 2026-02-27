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
        type GearPurifyCategory, 
        type PureGearCategory
    } from "../../types/gearCategoryTypes";
    import {GearType} from "../../types/gearTypes"
    import {LeannySubAbility,MainAbility,SubAbility} from "wasm-splatoon-gear-checker";
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
    import InputMainAbility from "../../SingleUseInputs/InputMainAbility.svelte"


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

    const blank_ability_combo = [LeannySubAbility.None, LeannySubAbility.None, LeannySubAbility.None] as const;


    let gearType:GearType=$state(null);
    let pureSubAbility:LeannySubAbility=$state(LeannySubAbility.None);

    let mainAbility:MainAbility=$state(MainAbility.ComeBack);
    let subAbilities:[LeannySubAbility,LeannySubAbility,LeannySubAbility] = $state([...blank_ability_combo])

    // If i click on a gearType in the pure section, it should set gearType on the bottom, and the sub abilities on the bottom.
    // If i set a gearType on the bottom, it should set a gearType on the top.
    // If i set the sub Abilities on the bottom, it should set pureSubAbility on the top (if the entered sub abilities happen to be pure)
    //
    // Ideally, the pureSubAbility variable would be removed, and all logic would only deal with [A,A,A] instead of A.


    
    const toggle = ()=>{
        open=!open
        if(!open){
            gearType=null;
            pureSubAbility=LeannySubAbility.None;
        }
    };
    let validInput = $derived(gearType!=null && pureSubAbility!=LeannySubAbility.None)
    run(() => {
        console.log(gearType,pureSubAbility,validInput)
    });

    function createPureGearCategory(auto_add:boolean){
        let containedGearState = $state([] as GearInputState[])
        let _pureSubAbility = pureSubAbility as unknown as SubAbility
        let newCategory:PureGearCategory = $state({
            type: "pure", 
            gearType, 
            mainAbility:_pureSubAbility as unknown as MainAbility,
            subAbilities:[_pureSubAbility,_pureSubAbility,_pureSubAbility],
             containedGear:containedGearState
        });
        if(allGearCategoriesMap.pure.get(gearType)?.get(_pureSubAbility)==null){
            allGearCategoriesMap.pure.get(gearType)?.set(_pureSubAbility,newCategory)
            allGearCategoriesMap=allGearCategoriesMap;

            allGearCategories.push(newCategory)
        }
        if(auto_add){
            console.log("AUTO ADD");
            addAllGearToCategory(newCategory)
        }
        toggle()
    }


    function addAllGearToCategory(newCategory:PureGearCategory){batch(()=>{
            console.log("STARTED ADDING",allDisplayedGear)
            let x = 0
            for(const gearInputState of allDisplayedGear) {
                console.log("ADDING",x++);
               const {
                   gearPurifyCategory, single_gear_result, gearInfo,
                   desired_abilities_info:{enable_all_global,show_all_global,local_desired_abilities_map,local_desired_abilities}
               } = gearInputState;
               if(gearInfo.gear.MainSkill == newCategory.mainAbility){
                    console.log(MainAbility[gearInfo.gear.MainSkill],gearInputState)
               }

               if(gearPurifyCategory()!=null){continue;}
               if(gearInfo.gearType!=gearType){continue;}
                if(gearInfo.gear.RandomContext==0){continue;}
               if(gearInfo.gear.MainSkill!=newCategory.mainAbility){continue;}
               if(single_gear_result().summary[newCategory.subAbilities]==null){continue;}


               newCategory.containedGear.push(gearInputState);newCategory.containedGear=newCategory.containedGear;
               gearPurifyCategory.set(newCategory);
               // DISABLE ALL GLOBAL DESIRED ABILITIES OF THE GEAR. SET LOCAL ONES TO ONLY BE 3 IN A ROW OF THE MAIN ABILITY.
               // TODO: the removeGearFromCategory() function should UNDO these changes. 

               enable_all_global.set(false);
               show_all_global.set(false);
               //TODO: Maybe instead of overwriting the local desired abilities, I could just disable them all, and add the category sub abilities as the only enabled local desired ability.
               local_desired_abilities_map.set( OrderedMap())
               local_desired_abilities.set([newCategory.subAbilities])
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
        <SelectPureCategory bind:subAbility={pureSubAbility} {allGearCategoriesMap} bind:gearType/>

        <h4 class="mt-3">Already Created:</h4>
        <SelectPureCategory bind:subAbility={pureSubAbility} bind:gearType {allGearCategoriesMap} alreadyCreated/>

    </ModalBody>
    <ModalFooter>
            <div style:margin-right={"auto"}> <!-- margin-right overrides the right alignment of modal footer to make this div left aligned. -->
                OR: Manually Select Main/Sub:
            </div>
            <InputMainAbility bind:abilityId={mainAbility}/>
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


