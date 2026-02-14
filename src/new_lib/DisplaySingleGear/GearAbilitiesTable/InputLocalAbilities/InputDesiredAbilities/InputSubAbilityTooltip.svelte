<script lang="ts">

    import {ability_filenames} from "../../../../../assets/abilityParams";
    import type {LeannySubAbility} from "wasm-splatoon-gear-checker";
    import {ALL_LEANNY_SUB_ABILITIES, ALL_SUB_ABILITIES} from "../../../../types/helperFunctions";

    export let abilityId:LeannySubAbility;
    export let allowBlankAbility:boolean;

    export let showPopup:boolean;


    $: abilities =
        (allowBlankAbility)
            ? ALL_LEANNY_SUB_ABILITIES
            :ALL_SUB_ABILITIES;
</script>


    {#each abilities as ability}
        <img
                src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[ability]}.png`} alt=""
                on:click|stopPropagation={()=>{abilityId=ability;showPopup=false;console.log("NEW ABILITY",ability,abilityId)}}
        />
    {/each}



<style>
    img{
        height: 36px;
        width: 36px;
        background-color: black;
        border-radius: 50%;
    }
</style>


