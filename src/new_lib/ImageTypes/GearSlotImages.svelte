<script lang="ts">

    import {type GearSlot} from "wasm-splatoon-gear-checker";
    import GearSlotImage from "./GearSlotImage.svelte";

    interface Props {
        gearSlots: GearSlot[];
    }

    let { gearSlots }: Props = $props();
</script>

{#each gearSlots as gearSlot}
    <GearSlotImage {gearSlot}/>
{/each}