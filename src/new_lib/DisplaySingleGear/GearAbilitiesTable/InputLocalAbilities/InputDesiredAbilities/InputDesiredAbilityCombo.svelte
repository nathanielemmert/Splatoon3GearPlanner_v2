<!-- @migration-task Error while migrating Svelte code: Cannot reassign or bind to each block argument in runes mode. Use the array and index variables instead (e.g. `array[i] = value` instead of `entry = value`, or `bind:value={array[i]}` instead of `bind:value={entry}`)
https://svelte.dev/e/each_item_invalid_assignment -->
<!-- @migration-task Error while migrating Svelte code: Cannot reassign or bind to each block argument in runes mode. Use the array and index variables instead (e.g. `array[i] = value` instead of `entry = value`, or `bind:value={array[i]}` instead of `bind:value={entry}`)
https://svelte.dev/e/each_item_invalid_assignment -->
<!-- @migration-task Error while migrating Svelte code: Cannot reassign or bind to each block argument in runes mode. Use the array and index variables instead (e.g. `array[i] = value` instead of `entry = value`, or `bind:value={array[i]}` instead of `bind:value={entry}`)
https://svelte.dev/e/each_item_invalid_assignment -->
<script lang="ts">
    import { run } from 'svelte/legacy';

    import {LeannySubAbility, SubAbility} from "wasm-splatoon-gear-checker";
    import InputSingleAbility from "./InputSingleAbility.svelte";

    interface Props {
        ability_combo: SubAbility[];
        onSubmit: (new_ability_combo: SubAbility[]) => void;
        allowBlankAbility?: boolean;
        soonest_index?: import('svelte').Snippet;
        remove?: import('svelte').Snippet;
    }

    let {
        ability_combo,
        onSubmit,
        allowBlankAbility = false,
        soonest_index,
        remove
    }: Props = $props();
    // let abilityIds = [...ability_combo] as unknown as LeannySubAbility[]
    let abilityIds:LeannySubAbility[] = $state();
    function setAbilityIds(x){abilityIds=x}

    run(() => {
        setAbilityIds([...ability_combo])
    });

    let containsEmpty = $derived(abilityIds.includes(LeannySubAbility.None))

    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }


    let currentlyEditing = $state(false);

    function onClick(){
        //set editing to true
        currentlyEditing=true;
    }

    function onClickAway(e:FocusEvent|null){
        console.log("ON CLICK AWAY")
        let other = e?.relatedTarget as Element|null;
        let self = e?.target as Element|null;
        if (document.hasFocus() && self?.parentElement?.parentElement!==other?.parentElement?.parentElement) {
            onCancel()
        }
    }
    function onCancel(){
        console.log("ON CANCEL")
        currentlyEditing = false;
        abilityIds = [...ability_combo] as unknown as LeannySubAbility[]
    }
    function onSaveChanges(){
        currentlyEditing = false;
        if(arraysEqual(ability_combo,abilityIds)){
            return
        }
        console.log("ON SAVE CHANGES")
        onSubmit(abilityIds as unknown as SubAbility[])
    }

</script>


<td onfocusin={onClick}
    onfocusout={onClickAway}

>
    {#each abilityIds as abilityId}
        <InputSingleAbility bind:abilityId={abilityId} {allowBlankAbility}/>
    {/each}
</td>
<td class="left-align">
    <div style="width: 3ch; text-align: right">
        {@render soonest_index?.()}
    </div>
</td>
<td class:hidden={!currentlyEditing}>
    <button disabled={containsEmpty} onclick={onSaveChanges} >Save</button>
</td>
<td class:hidden={!currentlyEditing}>
    <button  onclick={onCancel}>Cancel</button>
</td>

<td class:hidden={!currentlyEditing}>
    {@render remove?.()}
</td>


<style>
    .hidden{
        visibility: hidden;
    }
    .disabled{

    }
    .left-align{
        text-align: left;
    }
</style>