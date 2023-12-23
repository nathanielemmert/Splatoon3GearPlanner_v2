
<script lang="ts">
    import {type GearType, type NewGearFilters, type SingleGearResultFilters} from "./types/types";
import { type HaveGearMap } from "./types/typesLeanny";
    import type {SingleGearResult} from "wasm-splatoon-gear-checker";


    export let gearFilters:NewGearFilters;
    gearFilters ={
        "showHeadGear":{
            filterFunction: function(showHeadGear:boolean, gearType:GearType, [gearId, gear]:[string,HaveGearMap]){
                if(showHeadGear || gearType!="Head")return true;
                return false;
            },
            defaultValue:true,
            inputType:"checkbox",

        },
        "showClothesGear":{
            filterFunction: function(showClothesGear:boolean, gearType:GearType, [gearId, gear]:[string,HaveGearMap]){
                if(showClothesGear || gearType!="Clothes")return true;
                return false;
            },
            defaultValue:true,
            inputType:"checkbox",
        },
        "showShoesGear":{
            filterFunction: function(showShoesGear:boolean, gearType:GearType, [gearId, gear]:[string,HaveGearMap]){
                if(showShoesGear || gearType!="Shoes")return true;
                return false;
            },
            defaultValue:true,
            inputType:"checkbox",
        },
    };
    for (const key in gearFilters) {
        gearFilters[key].inputValue = gearFilters[key].defaultValue
        console.log("DEFAULT VALUE")
    }


    export let singleGearResultFilters:SingleGearResultFilters;
    singleGearResultFilters={
        hideGearWithNoResults:{
            filterFunction: function(hideGearWithNoResults: boolean, gearType: GearType, [gearId, gear]: [string, HaveGearMap], singleGearResult:SingleGearResult):boolean{
                if(hideGearWithNoResults==false)return true;
                console.log("FILTERING SINGLE GEAR RESULT",singleGearResult)
                return singleGearResult.some(m=>m.size>0)
            },
            defaultValue:true,
            inputType:"checkbox"
        }
    }
    for (const key in singleGearResultFilters) {
        singleGearResultFilters[key].inputValue = singleGearResultFilters[key].defaultValue
        console.log("SINGLE GEAR FILTERS DEFAULT VALUE")
    }

    $:console.log(singleGearResultFilters)


    


</script>

{#each Object.entries(gearFilters) as [filterName, {filterFunction,inputType}]}
    {#if inputType==="checkbox"}
        {filterName}<input type="checkbox" bind:checked={gearFilters[filterName].inputValue}  /><br/>
    {/if}
{/each}

{#each Object.entries(singleGearResultFilters) as [filterName, {filterFunction,inputType}]}
    {#if inputType==="checkbox"}
        {filterName}<input type="checkbox" bind:checked={singleGearResultFilters[filterName].inputValue}  /><br/>
    {/if}
{/each}


