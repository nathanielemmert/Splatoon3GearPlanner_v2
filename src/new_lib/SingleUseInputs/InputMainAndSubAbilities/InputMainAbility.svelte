<script lang="ts">
    import { ability_filenames } from "../../../assets/abilityParams";
    import InputMainAbilityTooltip from "./InputMainAbilityTooltip.svelte";
    import type {LeannySubAbility, MainAbility} from "wasm-splatoon-gear-checker";
    import {Button, Image, Tooltip} from "@sveltestrap/sveltestrap";
    import {v4} from "uuid"

    interface Props {
        abilityId: MainAbility;
    }

    let { abilityId = $bindable(),}: Props = $props();

    let showPopup:boolean=$state(false);

    let ability_filename = $derived(ability_filenames[abilityId])

    const id = "controlledBtn"+v4()





</script>

<div class="my_tooltip"
     onclick={()=>showPopup=true}
     onfocusout={()=>showPopup=false}
     tabindex="0"
>
    <img
            src={`https://leanny.github.io/splat3/images/skill/${ability_filename}.png`} alt=""
    />
    <span class="my_tooltiptext" style={(showPopup)?"visibility: visible;":""}>
        <InputMainAbilityTooltip bind:abilityId bind:showPopup allowBlankAbility={false}/>
    </span>
</div>

<style>
    span{
        width: min-content;
    }

    img{
        height: 64px;
        width: 64px;
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
        margin-left: calc(-36px*6.1);
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