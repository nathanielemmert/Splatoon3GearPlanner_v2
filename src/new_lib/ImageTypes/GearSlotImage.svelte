<script lang="ts">
    import {type GearSlot} from "wasm-splatoon-gear-checker";
    import TicketImage from "./TicketImage.svelte";
    import ChunksImage from "./ChunksImage.svelte";

    export let gearSlot:GearSlot;
    if(gearSlot.variant=="Ticket"){
        let x = gearSlot.contents
    }
</script>

{#if gearSlot.variant==="Ticket"}
    <TicketImage abilityId={gearSlot.contents}/>
{:else if gearSlot.variant==="Chunks"}
    <ChunksImage abilityId={gearSlot.contents.ability} quantity={gearSlot.contents.quantity}/>
{:else if gearSlot.variant==="TicketAndChunks"}
    <div style="display: inline-flex; position: relative">
        <div><TicketImage abilityId={gearSlot.contents.ticket}/></div>
        <div style="position: absolute; top:25%;left:25%"><ChunksImage abilityId={gearSlot.contents.ability} quantity={gearSlot.contents.quantity}/></div>

    </div>

{/if}

