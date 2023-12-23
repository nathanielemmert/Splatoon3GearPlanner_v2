<script lang="ts">
    import {LeannySubAbility, type SingleGearResult, SubAbility} from "wasm-splatoon-gear-checker";
    import InputDesiredAbilityCombo from "./InputDesiredAbilityCombo.svelte";
    import SubAbilityImage from "../../../../ImageTypes/SubAbilityImage.svelte";
    import {type OrderedMap} from "immutable";
    import InputDesiredAbilities from "../../../../../lib/InputDesiredAbilities.svelte";

    //TODO: make selected ability have outline/ highlighted.

    export let desired_abilities:SubAbility[][];
    export let desired_abilities_map:OrderedMap<SubAbility[], boolean>;
    export let single_gear_result:SingleGearResult;
    export let hidden:boolean;


    const blank_ability_combo = [LeannySubAbility.None, LeannySubAbility.None, LeannySubAbility.None] as const;

    let next_ability_combo = [...blank_ability_combo];


    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    function onSubmit(i:number, new_ability_combo:SubAbility[]) {
        console.log(new_ability_combo, desired_abilities[i])
        if (new_ability_combo === desired_abilities[i] ){
            return
        }

        desired_abilities[i] = new_ability_combo //TODO: this technically violates immutability. if it causes problems, switch order.

        desired_abilities = desired_abilities.filter((combo)=>
            // This line removes duplicate abilityCombos that match the new_ability_combo
            combo===new_ability_combo || !arraysEqual(combo,new_ability_combo)
        )
    }

    function onAddNew(new_ability_combo:SubAbility[]){
        desired_abilities.push(new_ability_combo) //TODO: this technically violates immutability. if it causes problems, switch order.
        desired_abilities = desired_abilities.filter((combo)=>
            // This line removes duplicate abilityCombos that match the new_ability_combo
            combo===new_ability_combo || !arraysEqual(combo,new_ability_combo)
        )
        next_ability_combo = [...blank_ability_combo]
    }

    function onRemove(i:number){
        desired_abilities = desired_abilities.toSpliced(i,1)
    }





</script>



    {#each desired_abilities as ability_combo,index}
        <tr class:hidden>
            <td>

                <input type="checkbox" checked={desired_abilities_map.get(ability_combo)??true}
                       on:change={(e)=>{
                               console.log("CHANGE");
                               desired_abilities_map = desired_abilities_map.set(ability_combo,e.currentTarget.checked)
                           }}
                />
            </td>
            <InputDesiredAbilityCombo {ability_combo} onSubmit={onSubmit.bind(null,index)}>
                <svelte:fragment slot="soonest_index">
                    {single_gear_result?.summary[ability_combo]}
                </svelte:fragment>
                <button slot="remove" on:click={onRemove.bind(null,index)}>Remove</button>
            </InputDesiredAbilityCombo>
        </tr>

    {/each}

    <tr class:hidden>
        <td></td>
        <InputDesiredAbilityCombo ability_combo={next_ability_combo} onSubmit={onAddNew}/>
    </tr>

<style>
    .hidden{
        visibility: collapse;
    }
</style>

