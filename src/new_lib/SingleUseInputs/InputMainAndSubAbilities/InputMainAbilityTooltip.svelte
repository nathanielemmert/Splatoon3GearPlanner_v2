<script lang="ts">
    import { stopPropagation } from 'svelte/legacy';


    import {ability_filenames} from "../../../assets/abilityParams";
    import type {LeannySubAbility, MainAbility} from "wasm-splatoon-gear-checker";
    import {ALL_LEANNY_SUB_ABILITIES, ALL_MAIN_ABILITIES, ALL_SUB_ABILITIES} from "../../types/helperFunctions";


    interface Props {
        abilityId: MainAbility;
        allowBlankAbility: boolean;
        showPopup: boolean;
    }

    let { abilityId = $bindable(), allowBlankAbility, showPopup = $bindable() }: Props = $props();


    let abilities = ALL_MAIN_ABILITIES;
</script>


    {#each abilities as ability,index}
        <img
                src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[ability]}.png`} alt=""
                onclick={stopPropagation(()=>{abilityId=ability;showPopup=false;console.log("NEW ABILITY",ability,abilityId)})}
        />
        {#if index==6 || index==13}
            <br/>
        {/if}
    {/each}



<style>
    img{
        height: 36px;
        width: 36px;
        background-color: black;
        border-radius: 50%;
    }
</style>


