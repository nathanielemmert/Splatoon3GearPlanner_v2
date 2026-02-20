<script lang="ts">
    import { ability_filenames } from "../../../../../assets/abilityParams";
    import InputSubAbilityTooltip from "./InputSubAbilityTooltip.svelte";
    import type {LeannySubAbility} from "wasm-splatoon-gear-checker";

    interface Props {
        abilityId: LeannySubAbility;
        allowBlankAbility: boolean;
    }

    let { abilityId = $bindable(), allowBlankAbility }: Props = $props();

    let showPopup:boolean=$state(false);

    let ability_filename = $derived(ability_filenames[abilityId])




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
        <InputSubAbilityTooltip bind:abilityId bind:showPopup {allowBlankAbility}/>
    </span>
</div>

<style>
    span{
        width: min-content;
    }
    img{
        height: 18px;
        width: 18px;
        background-color: black;
        border-radius: 50%;
    }

    .my_tooltip {
        position: relative;
        display: inline-block;
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
        margin-left: -100%;
    }

    .my_tooltip .my_tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }

</style>