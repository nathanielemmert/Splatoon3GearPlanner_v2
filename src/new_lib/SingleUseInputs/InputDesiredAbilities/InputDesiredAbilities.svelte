<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
    import { run } from 'svelte/legacy';

    import {LeannySubAbility, SubAbility} from "wasm-splatoon-gear-checker";
    import InputDesiredAbilityCombo from "./InputDesiredAbilityCombo.svelte";
    import SubAbilityImage from "../../ImageTypes/SubAbilityImage.svelte";
    import {Button} from "@sveltestrap/sveltestrap";



    

    interface Props {
        //TODO: make selected ability have outline/ highlighted.
        desired_abilities: SubAbility[][];
    }

    let { desired_abilities = $bindable() }: Props = $props();
    const blank_ability_combo = [LeannySubAbility.None, LeannySubAbility.None, LeannySubAbility.None] as const;

    let next_ability_combo = $state([...blank_ability_combo]);
    run(() => {
        console.log(desired_abilities)
    });

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


<table><tbody>
    {#each desired_abilities as ability_combo,index}
        <tr>
            <td>
                <Button on:click={onRemove.bind(null,index)}>Remove</Button>
            </td>
            <InputDesiredAbilityCombo {ability_combo} onSubmit={onSubmit.bind(null,index)}/>
        </tr>
    {/each}
	<tr>
        <td></td>
        <InputDesiredAbilityCombo ability_combo={next_ability_combo} onSubmit={onAddNew}/>
    </tr>

</tbody></table>
