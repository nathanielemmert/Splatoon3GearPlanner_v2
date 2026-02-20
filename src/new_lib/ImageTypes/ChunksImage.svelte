<script lang="ts">

import {ability_filenames} from "../../assets/abilityParams";
import  {SubAbility} from "wasm-splatoon-gear-checker";

    interface Props {
        abilityId: SubAbility;
        quantity: number;
    }

    let { abilityId, quantity }: Props = $props();
</script>

<img src=""/>

<div class="parent">
    <!-- svelte-ignore a11y_missing_attribute -->
    <img class="chunk-icon" src="https://raw.githubusercontent.com/Leanny/splat3/main/images/misc/SkillIconPiece_00%5Es.png"/>
    <!-- svelte-ignore a11y_missing_attribute -->
    <img class="ability"src={`https://leanny.github.io/splat3/images/skill/${SubAbility[abilityId]}.png`}/>
    <div class="quantity-text">{quantity}</div>
</div>





<style>
    .parent {
        position: relative;
        display: inline;
    }

    .chunk-icon {
        height: 36px;
        width:36px;
        filter: invert(1) drop-shadow(0px 0px 0.5px white)  /*drop-shadow(-1px -1px 0 black)*/;
    }

    .ability {
        height: 26px;
        width: 26px;

        position:absolute;
        top:0;
        left: 5px;
    }
    .quantity-text{
        color: black;
        font-size: 15px;
/*        -webkit-text-fill-color: black; !* Will override color (regardless of order) *!
        -webkit-text-stroke: thin white;*/

        /*text-shadow: 0 0 1px white;*/
        position:absolute;
        top:18px;
        left: 60%;
    }



</style>