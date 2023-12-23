<script lang="ts">
    import {Input} from "sveltestrap";
    export let how_far_to_check:number;
</script>



<div>
    <Input type="number" bind:value={how_far_to_check} min="0" max="100" style="width: min-content" />
</div>
