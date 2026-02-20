<script lang="ts">
    // import { ValueToAbilityCombo } from "../../../build/release";
    import TicketComboImages from "../ImageTypes/TicketComboImages.svelte";
    import type { GearType } from "../types/types";
    import type { GearSeedDatabase } from "../types/typesLeanny";
    import TicketComboPlan from "./TicketComboPlan.svelte";
    import {type MultipleGearResult, SixteenAbilityCombo} from "wasm-splatoon-gear-checker"

    let BigIntToTicketCombo = SixteenAbilityCombo.to_js_ability_combo

    interface Props {
        multipleGearResult: MultipleGearResult;
        resultIndexToGearId: {[key:number]:[gearType:GearType,gearId:string]};
        userGearDatabase: GearSeedDatabase;
    }

    let { multipleGearResult, resultIndexToGearId, userGearDatabase }: Props = $props();


    //$: console.log(multipleGearResult.keys.map((i) => "0x" + i.toString(16)));
</script>

{#if multipleGearResult.size===0}
No Results Found
{:else}

<div>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Tickets</th>
            <th>Show Details</th>
        </tr>
    </thead>
    {#each multipleGearResult as [ticketCombo, ticketComboResult],ticketComboIndex}
        <TicketComboPlan {resultIndexToGearId} {ticketComboIndex} {ticketComboResult} ticketCombo={BigIntToTicketCombo(ticketCombo)} {userGearDatabase}/>
    {/each}
</table>
</div>

{/if}
