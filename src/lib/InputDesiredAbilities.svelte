<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
    import { run } from 'svelte/legacy';

    import SubAbilityImages from "./ImageTypes/SubAbilityImages.svelte";
    import InputSubAbilities from "./SingleUseInputs/InputSubAbilities.svelte";

    interface Props {
        desiredAbilities: number[][];
    }

    let { desiredAbilities = $bindable() }: Props = $props();

    let hidden: boolean = $state(false);

    function onClick(e: Event) {
        const target = e.target as HTMLButtonElement;
        hidden = !hidden;
    }

    let newDesiredAbility:(number|"Unknown")[] = $state(Array(3).fill("Unknown"));

    function addDesiredAbility(abilities:number[]){
        if(!newDesiredAbility.includes("Unknown")){
            desiredAbilities.push(newDesiredAbility as number[])
            desiredAbilities=desiredAbilities;
            newDesiredAbility = Array(3).fill("Unknown")
        }

    }


    run(() => {
        console.log(desiredAbilities)
    });

</script>

<div class="container">
    <div>
        <label for="toggle">Desired Abilities:</label>
        <button id="toggle" onclick={onClick}>
            {hidden  ? "Show" : "Hide"}
        </button>
    </div>
    <table style={hidden ? "display:none" : ""}><tbody>
        {#each desiredAbilities as abilityCombo, listIndex}
            <tr>
                <td style="text-align: right">
                    <button onclick={()=>{desiredAbilities.splice(listIndex,1);desiredAbilities=desiredAbilities;}}>Remove</button>
                </td>
                <td style="text-align: left"><div>
                    <InputSubAbilities bind:abilityIds={abilityCombo} />
                </div></td>
            </tr>
        {/each}
        <tr >
            <td class="newAbility" style="text-align: left"><div>
                <InputSubAbilities bind:abilityIds={newDesiredAbility} allowBlankAbility/>
            </div></td>
            <td class="newAbility" style="text-align: right">
                <button onclick={addDesiredAbility}>Add</button>
            </td>

        </tr>
    </tbody></table>
</div>

<style>
    .container {
        border: 3px solid black;
        margin-bottom: 4px;
        width: max-content;
        padding: 2px 90px;
    }
    table{
        display:table;
        width: 100%;
    }
    .newAbility{
        padding-top: 20px;
    }
</style>
