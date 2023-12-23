<script lang="ts">
    import {GearType} from "../types/gearTypes";
    import {getContext} from "svelte";
    import {gearInfoParams as gearInfoParams} from "../../assets/gearInfoParams";
    export let RowId:string=null;
    export let gearType:GearType=null;
    export let gearId:string=null;
    // $: params_gearInfo = gearInfoParams[gearType][gearId];
    $: gear_filename = (RowId==null)? gearInfoParams[gearType][gearId].__RowId:RowId;
</script>

{#if gear_filename}
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={`https://leanny.github.io/splat3/images/gear/${gear_filename}.webp`}/>
{/if}

<style>
    img{
        height: 96px;
        width: 96px;
    }
</style>