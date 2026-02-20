<script lang="ts">
    import {Input} from "@sveltestrap/sveltestrap";

    interface Props {
        max_allowed_chunks: number;
    }

    let { max_allowed_chunks = $bindable() }: Props = $props();
    let options = [0,10,20,30] as const;

</script>



<div>
    <label>Max Chunks:</label>
    <Input type="select" bind:value={max_allowed_chunks} style="width: min-content">
        {#each options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </Input>
</div>

