<script lang="ts">
    import {Input} from "@sveltestrap/sveltestrap";
    import type { ReadableSignal, } from "@amadeus-it-group/tansu";
    import {readable} from "@amadeus-it-group/tansu";

    interface Props {
        ticketDepthLimit: number;
        enabled?: ReadableSignal<boolean>;
    }

    let { ticketDepthLimit = $bindable(), enabled = readable(true) }: Props = $props();
</script>



<div>
    <Input type="number" bind:value={ticketDepthLimit} min="0" max="4" disabled={!$enabled} style="width: min-content" />
</div>
