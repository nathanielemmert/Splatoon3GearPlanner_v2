<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<svelte:options immutable={true}/>
<script lang="ts">
    import  {type SingleGearResult, type SubAbility} from "wasm-splatoon-gear-checker";
import {OrderedMap} from "immutable";
import DisplayGlobalAbilities from "./DisplayGlobalAbilities/DisplayGlobalAbilities.svelte";
import InputLocalAbilities from "./InputLocalAbilities/InputLocalAbilities.svelte";

export let show_all_global:boolean;


export let hideResultTable:boolean;



</script>

{#if !hideResultTable}
    <table>
        <thead>
        <tr>
            <th>
                <slot name="enable_all_global"/>
            </th>
            <th class="title" colspan="2">
                Global Desired Abilities
            </th>
            <th>
                <slot name="show_all_global"/>
            </th>
        </tr>
        </thead>

        <tr class:hidden={!show_all_global}>
            <td></td>
            <td colspan="2">Disabled Global Abilities:</td>
            <td><slot name="show_disabled_global"/></td>
        </tr>
        <slot name="disabledGlobalAbilities"/>



        <tr class:hidden={!show_all_global}>
            <td></td>
            <td colspan="2">Enabled Global Abilities:</td>
            <td><slot name="show_enabled_global"/></td>
        </tr>
        <slot name="enabledGlobalAbilities"/>


        <thead>
        <tr>
            <th>
                <slot name="enable_all_local"/>
            </th>
            <th class="title" colspan="2">
                Local Desired Abilities
            </th>
            <th>
                <slot name="show_all_local"/>
            </th>
        </tr>
        </thead>
        <slot name="InputLocalAbilities"/>

    </table>
{/if}


<style>
    .hidden{
        visibility: collapse;
    }
    table, thead {
        border: 3px solid;
        border-collapse: collapse;
    }
    tr {
        border: 1px solid;
        border-collapse: collapse;
    }
    .title{
        font-size: 1.5rem;
    }
</style>


