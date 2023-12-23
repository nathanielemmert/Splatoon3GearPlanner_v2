<script lang="ts">

    import {type GearSlot} from "wasm-splatoon-gear-checker";
    import GearSlotImage from "./GearSlotImage.svelte";

    export let gearSlots:GearSlot[];
</script>

{#each gearSlots as gearSlot}
    <GearSlotImage {gearSlot}/>
{/each}