<script lang="ts">
    import {Input} from "@sveltestrap/sveltestrap";
    interface Props {
        how_far_to_check: number;
    }

    let { how_far_to_check = $bindable() }: Props = $props();
</script>



<div>
    <Input type="number" bind:value={how_far_to_check} min="0" max="100" style="width: min-content" />
</div>
