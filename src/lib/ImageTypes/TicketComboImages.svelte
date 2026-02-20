<script lang="ts">
    import { ability_filenames } from "../../assets/abilityParams";
    import TicketImage from "./TicketImage.svelte";

    interface Props {
        abilityIds: (string|number)[];
    }

    let { abilityIds }: Props = $props();
    let ability_filename_array: (string|number)[] = $derived(abilityIds);
    
</script>


{#if abilityIds.length===0}
    <b>No tickets needed!</b>

{:else}
    {#each ability_filename_array as ability_filename}
        <TicketImage abilityId={ability_filename.toString()} />
    {/each}
    
{/if}

