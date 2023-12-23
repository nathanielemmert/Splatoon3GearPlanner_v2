<script lang="ts">
    import {Input} from "sveltestrap";
    import type { ReadableSignal, } from "@amadeus-it-group/tansu";
    import {readable} from "@amadeus-it-group/tansu";

    export let ticketDepthLimit:number;
    export let enabled:ReadableSignal<boolean> = readable(true);
</script>



<div>
    <Input type="number" bind:value={ticketDepthLimit} min="0" max="4" disabled={!$enabled} style="width: min-content" />
</div>
