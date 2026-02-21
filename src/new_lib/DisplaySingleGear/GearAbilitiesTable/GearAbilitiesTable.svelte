<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (show_all_global to show_all_global_1) making the component unusable -->
<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (show_all_global to show_all_global_1) making the component unusable -->
<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (show_all_global to show_all_global_1) making the component unusable -->
<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (show_all_global to show_all_global_1) making the component unusable -->
<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot (show_all_global to show_all_global_1) making the component unusable -->
<!-- @migration-task Error while migrating Svelte code: `<thead>` cannot be a child of `<tbody>`. `<tbody>` only allows these children: `<tr>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<thead>` cannot be a child of `<tbody>`. `<tbody>` only allows these children: `<tr>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<tr>` cannot be a child of `<table>`. `<table>` only allows these children: `<caption>`, `<colgroup>`, `<tbody>`, `<thead>`, `<tfoot>`, `<style>`, `<script>`, `<template>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<svelte:options immutable={true}/>
<script lang="ts">
    import  {type SingleGearResult, type SubAbility} from "wasm-splatoon-gear-checker";
import {OrderedMap} from "immutable";
import DisplayGlobalAbilities from "./DisplayGlobalAbilities/DisplayGlobalAbilities.svelte";
import InputLocalAbilities from "./InputLocalAbilities/InputLocalAbilities.svelte";



    interface Props {
        show_all_global: boolean;
        hideResultTable: boolean;
        enable_all_global_snippet?: import('svelte').Snippet;
        show_all_global_snippet?: import('svelte').Snippet;
        show_disabled_global_snippet?: import('svelte').Snippet;
        disabledGlobalAbilities_snippet?: import('svelte').Snippet;
        show_enabled_global_snippet?: import('svelte').Snippet;
        enabledGlobalAbilities_snippet?: import('svelte').Snippet;
        enable_all_local_snippet?: import('svelte').Snippet;
        show_all_local_snippet?: import('svelte').Snippet;
        InputLocalAbilities_snippet?: import('svelte').Snippet;
    }

    let {
        show_all_global,
        hideResultTable,
        enable_all_global_snippet,
        show_all_global_snippet,
        show_disabled_global_snippet,
        disabledGlobalAbilities_snippet,
        show_enabled_global_snippet,
        enabledGlobalAbilities_snippet,
        enable_all_local_snippet,
        show_all_local_snippet,
        InputLocalAbilities_snippet
    }: Props = $props();



</script>

{#if !hideResultTable}
    <table><tbody>
        <!-- <thead> -->
        <tr>
            <th>
                {@render enable_all_global_snippet?.()}
            </th>
            <th class="title" colspan="2">
                Global Desired Abilities
            </th>
            <th>
                {@render show_all_global_snippet?.()}
            </th>
        </tr>
        <!-- </thead> -->

        <tr class:hidden={!show_all_global}>
            <td></td>
            <td colspan="2">Disabled Global Abilities:</td>
            <td>{@render show_disabled_global_snippet?.()}</td>
        </tr>
        {@render disabledGlobalAbilities_snippet?.()}



        <tr class:hidden={!show_all_global}>
            <td></td>
            <td colspan="2">Enabled Global Abilities:</td>
            <td>{@render show_enabled_global_snippet?.()}</td>
        </tr>
        {@render enabledGlobalAbilities_snippet?.()}


        <!-- <thead> -->
        <tr>
            <th>
                {@render enable_all_local_snippet?.()}
            </th>
            <th class="title" colspan="2">
                Local Desired Abilities
            </th>
            <th>
                {@render show_all_local_snippet?.()}
            </th>
        </tr>
        <!-- </thead> -->
        {@render InputLocalAbilities_snippet?.()}

    </tbody></table>
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


