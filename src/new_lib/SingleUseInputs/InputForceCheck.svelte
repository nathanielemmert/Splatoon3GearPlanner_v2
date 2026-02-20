<script lang="ts">
    import {Input} from "@sveltestrap/sveltestrap";
    interface Props {
        alwaysCheckFullTicketDepth: boolean;
    }

    let { alwaysCheckFullTicketDepth = $bindable() }: Props = $props();
</script>



<div>
    <Input type="checkbox" bind:checked={alwaysCheckFullTicketDepth} />
</div>