<script lang="ts">
    import { ability_filenames } from "../../../assets/abilityParams";
    import InputSubAbilityTooltip from "./InputSubAbilityTooltip.svelte";
    import type {LeannySubAbility} from "wasm-splatoon-gear-checker";
    import {Button, Image, Tooltip} from "sveltestrap";
    import {v4} from "uuid"

    export let abilityId:LeannySubAbility;
    export let allowBlankAbility:boolean;

    let showPopup:boolean=false;

    $:ability_filename = ability_filenames[abilityId]

    const id = "controlledBtn"+v4()





</script>

<div class="my_tooltip"
     on:click={()=>showPopup=true}
     on:focusout={()=>showPopup=false}
     tabindex="0"
>
    <img
            src={`https://leanny.github.io/splat3/images/skill/${ability_filename}.webp`} alt=""
    />
    <span class="my_tooltiptext" style={(showPopup)?"visibility: visible;":""}>
        <InputSubAbilityTooltip bind:abilityId bind:showPopup {allowBlankAbility}/>
    </span>
</div>

<style>
    span{
        width: min-content;
    }

    img{
        height: 36px;
        width: 36px;
        background-color: black;
        border-radius: 50%;
    }

    .my_tooltip {
        position: relative;
        display: inline-block;
        /*border-bottom: 1px dotted black;*/
    }

    .my_tooltip .my_tooltiptext {
        visibility: hidden;
        width: max-content;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: 130%;
        left: 50%;
        margin-left: calc(-36px*3.85);
    }

    .my_tooltip .my_tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #555 transparent;
    }

</style>