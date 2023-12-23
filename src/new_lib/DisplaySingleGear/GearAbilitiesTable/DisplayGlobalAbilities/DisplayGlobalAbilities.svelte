<svelte:options immutable={true}/>
<script lang="ts">
    import type {SingleGearResult, SubAbility} from "wasm-splatoon-gear-checker";
    import {OrderedMap} from "immutable";
    import SmallSubAbilityImages from "../../../ImageTypes/SmallSubAbilityImages.svelte";

    import {Button, Styles} from "sveltestrap"



    export let global_desired_abilities:SubAbility[][];
    export let global_desired_abilities_map:OrderedMap<SubAbility[],boolean>;
    export let hidden:boolean;
    export let type:"enabledAbilities"|"disabledAbilities";
    export let single_gear_result:SingleGearResult;

    function shouldDisplayAbilityCombo(
        ability_combo:SubAbility[],
        global_desired_abilities_map:OrderedMap<SubAbility[],boolean>,
        type:"enabledAbilities"|"disabledAbilities"
    ){
        if(type=="enabledAbilities"){
            return global_desired_abilities_map.get(ability_combo)??true
        }
        else if(type=="disabledAbilities"){
            return !(global_desired_abilities_map.get(ability_combo)??true)
        }
    }


</script>

{#each global_desired_abilities as ability_combo}
    {#if shouldDisplayAbilityCombo(ability_combo, global_desired_abilities_map, type)}
        <tr class:hidden>
            <td>
                <input type="checkbox" checked={global_desired_abilities_map.get(ability_combo)??true}
                       on:change={(e)=>{
                               console.log("CHANGE")
                               global_desired_abilities_map = global_desired_abilities_map.set(ability_combo,e.currentTarget.checked)
                           }}
                />
            </td>
            <td>
                <SmallSubAbilityImages abilityIds={ability_combo}/>
            </td>
            <td class="left-align">
                <div style="width: 3ch; text-align: right">
                    {single_gear_result?.summary[ability_combo]??""}
                </div>
            </td>
        </tr>
    {/if}
{/each}

<style>
    .hidden{
        visibility: collapse;
    }
    .left-align{
        text-align: left;
    }
</style>