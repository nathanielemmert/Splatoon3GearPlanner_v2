<script lang="ts">
    import {Input} from "sveltestrap";
    export let alwaysCheckFullTicketDepth:boolean;
</script>



<div>
    <Input type="checkbox" bind:checked={alwaysCheckFullTicketDepth} />
</div>