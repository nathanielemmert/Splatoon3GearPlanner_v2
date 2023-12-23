<script lang="ts">
    import {LeannySubAbility, SubAbility} from "wasm-splatoon-gear-checker";
    import InputSingleAbility from "./InputSingleAbility.svelte";

    export let ability_combo:SubAbility[];
    export let onSubmit:(new_ability_combo: SubAbility[]) => void
    export let allowBlankAbility:boolean=false;
    // let abilityIds = [...ability_combo] as unknown as LeannySubAbility[]
    let abilityIds:LeannySubAbility[];
    function setAbilityIds(x){abilityIds=x}

    $:setAbilityIds([...ability_combo])

    $:containsEmpty = abilityIds.includes(LeannySubAbility.None)

    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }


    let currentlyEditing = false;

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


<td on:focusin={onClick}
    on:focusout={onClickAway}

>
    {#each abilityIds as abilityId}
        <InputSingleAbility bind:abilityId={abilityId} {allowBlankAbility}/>
    {/each}
</td>
<td class="left-align">
    <div style="width: 3ch; text-align: right">
        <slot name="soonest_index"/>
    </div>
</td>
<td class:hidden={!currentlyEditing}>
    <button disabled={containsEmpty} on:click={onSaveChanges} >Save</button>
</td>
<td class:hidden={!currentlyEditing}>
    <button  on:click={onCancel}>Cancel</button>
</td>

<td class:hidden={!currentlyEditing}>
    <slot name="remove"/>
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