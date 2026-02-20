<script lang="ts">
    import { ability_filenames } from "../../assets/abilityParams";
    import TicketImage from "./TicketImage.svelte";
    import SubAbilityImage from "./SubAbilityImage.svelte";
    import {Ticket} from "wasm-splatoon-gear-checker";

    interface Props {
        ticketIds: Ticket[];
    }

    let { ticketIds }: Props = $props();
</script>


{#if ticketIds.length===0}
    <b>No tickets needed!</b>

{:else}
    {#each ticketIds as abilityId}
        <TicketImage {abilityId} />
    {/each}

{/if}

<!--export let abilityIds: LeannySubAbility[];-->
<!--let ability_filename_array: LeannySubAbility[];-->
<!--$: {-->
<!--    ability_filename_array = abilityIds.slice(-3);-->
<!--    for (let i = 3-ability_filename_array.length; i > 0; i&#45;&#45;) {ability_filename_array.push(LeannySubAbility.None)}-->
<!--}-->
<!--</script>-->

<!--{#each ability_filename_array as ability_filename}-->
<!--    <SubAbilityImage abilityId={ability_filename} />-->
<!--{/each}-->