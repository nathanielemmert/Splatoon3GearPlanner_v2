<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
    import { run } from 'svelte/legacy';

    import DisplaySingleGear from "./DisplaySingleGear.svelte";
    import type {
        AllGearInputState,
        AllWasmGear,
        GearFilters,
        GearInfo,
        GearType,
        SingleGearResultFilters
    } from "./types/types";
    import {
        GearDbSchema,
        type GearDb,
        type GearSeedDatabase,
        type HaveGearMap,
    } from "./types/typesLeanny";
    import type { GearParam } from "./types/typesParams";
    /*import type { WasmGear } from "./wasmHelpers/helperFunctions";*/
    import {type WasmGear} from "./types/types";
    import {type NewGearFilters} from "./types/types.js";
    import {type GearInputState} from "./types/types";
    import {gearInfo} from "../assets/gearInfoParams";

    let gearDb= userGearDatabase.GearDB;



    interface Props {
        userGearDatabase: GearSeedDatabase;
        globalDesiredAbilities: number[][];
        allWasmGear: AllWasmGear;
        howFarToCheck: number;
        gearFilters: NewGearFilters;
        singleGearResultFilters: SingleGearResultFilters;
        allGearInputState: AllGearInputState;
        allowed_drinks: number[];
    }

    let {
        userGearDatabase,
        globalDesiredAbilities,
        allWasmGear = $bindable(),
        howFarToCheck,
        gearFilters,
        singleGearResultFilters,
        allGearInputState = $bindable(),
        allowed_drinks
    }: Props = $props();

    let allDisplayedGear:GearInputState[] = $state([]);
    run(() => {
        console.log(singleGearResultFilters)
    });
    run(() => {
        console.log("GEAR FILTERS",gearFilters)
    });

    //TODO: this should only run once when the DisplayAllGear is first instantiated.
    // However, if a new userGearDatabase file is uploaded, this whole component should be destroyed and recreated.
    for (const gearType of ["Head", "Clothes", "Shoes"] as GearType[]) {
        for (const gearId of Object.keys(userGearDatabase.GearDB[`HaveGear${gearType}Map`])) {
            console.log("REASSIGNING GEAR")
            let gear:HaveGearMap = gearDb[`HaveGear${gearType}Map`][gearId] as HaveGearMap
            allGearInputState[gearType][gearId] = {
                inpState:{
                    selectedForPurify: false,
                    hideResultTable: true
                },
                categoryState:{},
                gearInfo: {gear,gearId,gearType}
            } as GearInputState;



            allDisplayedGear.push(allGearInputState[gearType][gearId])
        }
    }




    let gearCategories = $state({
        "Hidden":{
            color:"red",
            order:"0",
            collapsed:true,
            label:"Hidden Gear: "
        },
        "Unselected":{
            color:"gray",
            order:"1",
            collapsed:false,
            label:"Unselected Gear: "
        },
        "Selected":{
            color:"green",
            order:"2",
            collapsed:false,
            label:"Gear Selected to Purify: "
        },
    } as const);

    const maxLabelWidth = Math.max(...Object.values(gearCategories).map(a=>a.label.length))/2

    run(() => {
        for(const key in allDisplayedGear){

            const {gearId,gearType,gear} = allDisplayedGear[key].gearInfo
            const {singleGearResult} = allDisplayedGear[key]
            // const gearInputState = allGearInputState[gearType][gearId]

            let newCategory

            if(allDisplayedGear[key].inpState.selectedForPurify)
                newCategory="Selected"
            else{
                let displayGear:boolean = function filterGear():boolean{
                    if(gear.RandomContext ==0)return false;
                    for (const {filterFunction,inputValue} of Object.values(gearFilters??{})) {
                        if(!filterFunction(inputValue,gearType,[gearId,gear]))
                            return false
                    }
                    for (const {filterFunction,inputValue} of Object.values(singleGearResultFilters??{})) {
                        if(!filterFunction(inputValue,gearType,[gearId,gear],singleGearResult))
                            return false
                    }
                    return true;
                }()
                if(displayGear)
                    newCategory="Unselected"
                else
                    newCategory="Hidden"
            }
            if(newCategory!==allDisplayedGear[key].categoryState.category)
                allDisplayedGear[key].categoryState.category=newCategory
        }
    });

    run(() => {
        (function defaultGearSort(){
            allDisplayedGear.sort((a, b) => a.gearInfo.gearId.localeCompare(b.gearInfo.gearId));
            allDisplayedGear.sort((a, b) => a.gearInfo.gear.MainSkill-(b.gearInfo.gear.MainSkill));
            allDisplayedGear.sort((a, b) =>{
                const gearTypeOrder = {"Head":0,"Clothes":1,"Shoes":2}
                return gearTypeOrder[a.gearInfo.gearType]-gearTypeOrder[b.gearInfo.gearType]
            });
            allDisplayedGear.sort((a, b) => gearCategories[a.categoryState.category].order.localeCompare(gearCategories[b.categoryState.category].order));
            allDisplayedGear = allDisplayedGear;
        })()
    });
    let categoryStarts:{[key:number]:string} = $state();
    let currentIndex=$state(0);
    run(() => {
        categoryStarts=[]
        currentIndex=0;
        let currentCategory:string = -1 as string;
        for(const key in allDisplayedGear){
            const {categoryState:{category}}=allDisplayedGear[key]
            if(category!=currentCategory){
                categoryStarts[key]=category
                currentCategory=category
            }
        }
        console.log(categoryStarts)
    });

    run(() => {
        console.log("allGearInputState",allGearInputState)
    });


</script>


<table>
    <thead><tr>
        <th>Select</th>
        <th>Gear</th>
        <th>Abilities</th>
        <th>Allow Chunks?</th>
        <th>Possible Gear Abilities</th>
    </tr></thead>

    <tbody>
    {#each allDisplayedGear as {inpState:{selectedForPurify,hideResultTable},gearInfo:{gearId,gearType},categoryState: {category},singleGearResult}, listIndex (gearType+gearId)}
        {@const categoryCollapsed = gearCategories[category].collapsed}
        {#if listIndex in categoryStarts}
            <tr><td>
                <span style="float: left;width: {maxLabelWidth}em">{ gearCategories[category].label}</span>
                <button onclick={()=>gearCategories[category].collapsed=!categoryCollapsed}>
                    {(categoryCollapsed) ?"Show":"Hide"}
                </button>
            </td></tr>
        {/if}
        <DisplaySingleGear
                bind:globalWasmGear={allWasmGear[gearType][gearId]}
                bind:gearSelectedForPurify={selectedForPurify}
                bind:hideResultTable={hideResultTable}
                bind:single_gear_result={singleGearResult}
                categoryState={gearCategories[category]}
                {gearId} {globalDesiredAbilities} {howFarToCheck}  {gearType} {allowed_drinks}/>


    {/each}
    </tbody>


</table>

<style>
    table,
    th {
        border-collapse: collapse;
        border: 2px solid black;
    }
</style>
