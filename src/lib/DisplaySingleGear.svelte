<script lang="ts">
    import { gearInfo } from "../assets/gearInfoParams";
    import { VERSION } from "../main";
    import GearImage from "./ImageTypes/GearImage.svelte";
    import MainAbilityImage from "./ImageTypes/MainAbilityImage.svelte";
    import SubAbilityImages from "./ImageTypes/SubAbilityImages.svelte";
    import SingleGearResultTable from "./SingleGearResultTable.svelte";
    import type {GearSeedDatabase, HaveGearMap} from "./types/typesLeanny";
    import {type WasmGear} from "./types/types";
    import {
        purify_single_gear_js as purify_single_gear,
        type SingleGearResult
    } from "wasm-splatoon-gear-checker/wasm_splatoon_gear_checker"
    import {getContext} from "svelte";
    import type {Writable} from "svelte/store";

    export let howFarToCheck:number;
    export let gearId: string;
/*    export let gear: HaveGearMap;*/
    export let gearType: "Head" | "Clothes" | "Shoes";
    export let globalDesiredAbilities: number[][];
     export let globalWasmGear: WasmGear;

    export let gearSelectedForPurify:boolean;
    export let hideResultTable: boolean = false;

    export let single_gear_result:SingleGearResult;

    export let allowed_drinks:number[];

    export let categoryState:{
        color:string,
        order:string,
        collapsed:boolean,
    };

    $:categoryColor = categoryState.color;
    $:categoryCollapsed = categoryState.collapsed;
    // export let categoryColor:string;

    // let gear:HaveGearMap;
    const gearSeedDatabase=getContext<Writable<GearSeedDatabase>>("userGearDatabaseStore")
    $:console.log(categoryColor)
    $:gearDb = $gearSeedDatabase.GearDB
    $:console.log("gearDbgetContext",gearDb)
    $:gear = gearDb[`HaveGear${gearType}Map`][gearId];


    console.log("SINGLE GEAR INITIAL RENDER")

    $:console.log("HOW FAR TO CHECK",howFarToCheck)
    $:console.log("gearId",gearId)
    $:console.log("gear=",gear==null?null:"")
/*    $:console.log("ExDrinksArray",gear.ExDrinksArray==null?null:"")
    $:console.log("Favorite",gear.Favorite==null?null:"")
    $:console.log("ExSkillArray",gear.ExSkillArray==null?null:"" )
    $:console.log("MainSkill",gear.MainSkill==null?null:"" )
    $:console.log("RandomContext",gear.RandomContext==null?null:"" )*/

    $:console.log("gearType",gearType)
    $:console.log("globalDesiredAbilities",globalDesiredAbilities)
    $:console.log("gearSelectedForPurify",gearSelectedForPurify)
    $:console.log("hideResultTable",hideResultTable)




    $: params_gearInfo = gearInfo[gearType][gearId];
    $: gear_filename = params_gearInfo.__RowId;


    let localWasmGear: WasmGear;
    $:localWasmGear = {
                      seed: gear.RandomContext,
                      brand: params_gearInfo.Brand,
                      desired_abilities: (gear.MainSkill>=0 && gear.MainSkill<=13)?[Array(3).fill(gear.MainSkill)]:[],//TODO: RIGHT NOW IT IS HARDCODED TO ONLY SHOW PURE GEAR
                  }
    $:globalWasmGear =
            (gearSelectedForPurify)
                ? localWasmGear
                : undefined;
    $:console.log(globalWasmGear)



    /*let single_gear_result:SingleGearResult;*/
    $:single_gear_result= purify_single_gear(localWasmGear,howFarToCheck,allowed_drinks);

    // $: nonempty_single_gear_result = single_gear_result.some(m=>m.keys.length>0)



</script>
<!--TODO: this if tag should be removed and turned into a filter. "Hide gear that have no single gear results"-->
    <tr style="background-color: {categoryColor}; {categoryCollapsed ? 'visibility:collapse' : ''}">
        <td class="gear-checkbox">
            <input type="checkbox" bind:checked={gearSelectedForPurify} />
        </td>
        <td class="gear-image">
            <GearImage {gear_filename} />
        </td>
        <td class="ability-images">
            <div class="container">
                <MainAbilityImage abilityId={gear.MainSkill.toString()} />
                <SubAbilityImages abilityIds={gear.ExSkillArray} />
            </div>
        </td>
        <td>
            <input type="checkbox" />
        </td>
        <td>
            <button id="toggle" on:click={()=>hideResultTable=!hideResultTable}>
                {hideResultTable ? "Show" : "Hide"}
            </button>

        </td>
    </tr>

    <tr style="background-color: {categoryColor}; {hideResultTable||categoryCollapsed ? 'visibility:collapse' : ''}">
        <td colspan="10">
            <SingleGearResultTable {single_gear_result} />
        </td>
    </tr>


<style>
    td {
        border: 2px solid black;
    }
</style>
