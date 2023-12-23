<script lang="ts">
    import { ability_filenames } from "../../assets/abilityParams";
    import InputSubAbilityTooltip from "./InputSubAbilityTooltip.svelte";

    export let abilityId:number|"Unknown";

    let showPopup:boolean=false;




</script>



<div class="tooltip"
     on:focusin={()=>showPopup=true}
     on:focusout={()=>showPopup=false}
     tabindex="0"
>
    <img
         src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[abilityId]}.webp`} alt=""
    />
    <span class="tooltiptext" style={(showPopup)?"visibility: visible;":""}>
        <InputSubAbilityTooltip bind:abilityId/>
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

    .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }

    .tooltip .tooltiptext {
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

    .tooltip .tooltiptext::after {
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
