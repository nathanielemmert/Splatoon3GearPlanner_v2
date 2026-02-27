<script lang="ts">
    import {GearType} from "../types/gearTypes";
    import {gearInfoParams as gearInfoParams} from "../../assets/gearInfoParams";
    interface Props {
        RowId?: string;
        gearType?: GearType;
        gearId?: string;
    }

    let { RowId = null, gearType = null, gearId = null }: Props = $props();
    // $: params_gearInfo = gearInfoParams[gearType][gearId];
    let gear_filename = $derived((RowId==null)? gearInfoParams[gearType][gearId].__RowId:RowId);
</script>

{#if gear_filename}
    <!-- svelte-ignore a11y_missing_attribute -->
    <img src={`https://leanny.github.io/splat3/images/gear/${gear_filename}.png`}/>
{/if}

<style>
    img{
        height: 96px;
        width: 96px;
    }
</style>