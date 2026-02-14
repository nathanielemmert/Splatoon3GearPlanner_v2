<script lang="ts">
    import { ability_filenames } from "../../assets/abilityParams";
    import {Ticket} from "../../../wasm-splatoon-gear-checker/pkg/wasm_splatoon_gear_checker";

    export let abilityId:Ticket;
    //TODO: https://github.com/Leanny/splat3/blob/main/images/food/GearPowerTicketBase.png
</script>

{#if abilityId === Ticket.None}
    <div class="ticket-container">
        <img class="ticket-icon empty-ticket"src="https://cdn.wikimg.net/en/splatoonwiki/images/c/c3/S2_Icon_Drink_Ticket.png" alt="No Ticket"/>
    </div>

{:else}<!-- Normal Ticket -->
    <div class="ticket-container">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="ticket-icon"src="https://cdn.wikimg.net/en/splatoonwiki/images/c/c3/S2_Icon_Drink_Ticket.png"/>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="ability"src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[abilityId]}.png`}/>
    </div>
{/if}

<style>

    .ticket-container {
        position: relative;
        display: inline-flex;

        vertical-align: bottom;
    }
    .ability{
        height: 36px;
        width: 36px;
        /* background-color: black; */
        /* border-radius: 50%; */
    }

    .ticket-icon {
        height: 30px;
    }

    .ability {
        position:absolute;
        top: 50%;

        transform: translate(2px,-50%);
    }
    .empty-ticket{
        opacity: 0.1;
    }


</style>
