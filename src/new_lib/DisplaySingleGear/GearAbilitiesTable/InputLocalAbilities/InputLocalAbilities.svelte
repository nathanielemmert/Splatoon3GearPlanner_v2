<script lang="ts">

    import {Map, type OrderedMap} from "immutable";
    import type {SingleGearResult, SubAbility} from "wasm-splatoon-gear-checker";
    import InputDesiredAbilities from "./InputDesiredAbilities/InputDesiredAbilities.svelte";

    export let local_desired_abilities_map: OrderedMap<SubAbility[], boolean>;
    export let local_desired_abilities:SubAbility[][];
    export let single_gear_result:SingleGearResult;
    export let hidden:boolean;


</script>

<InputDesiredAbilities bind:desired_abilities={local_desired_abilities} bind:desired_abilities_map={local_desired_abilities_map} {single_gear_result} {hidden}/>



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
</style>