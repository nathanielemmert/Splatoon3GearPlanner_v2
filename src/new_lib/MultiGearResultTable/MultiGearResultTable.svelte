<script lang="ts">
    import type {MultiGearResult} from "wasm-splatoon-gear-checker";
    import type {GearInputState, GearPurifyCategory} from "../types/gearTypes";
    import {Button, Card, CardBody, CardHeader, Table} from "sveltestrap";
    import DisplayTicketComboPurifyResult from "./DisplayTicketComboPurifyResult.svelte";
    import TicketComboImages from "../ImageTypes/TicketComboImages.svelte";

    export let multi_gear_result:MultiGearResult;
    export let allGearCategories:GearPurifyCategory[];

    $:result_table = multi_gear_result.result_table;

    let showTable = false;


</script>
<Button on:click={()=>showTable=!showTable}>
    Show Table
</Button>
{multi_gear_result.result_table.size} Results
{#if showTable}
    <Table class="border border-3" bordered striped>
        <thead>
        <tr >
            <th>
                Result #
            </th>
            <th>
                Ticket Combinations
            </th>
            <th>
                Ticket Combination #
            </th>
            <th>
                title
            </th>
        </tr>
        </thead>
        <tbody>
        {#each result_table as [summarized_ticketComboPurifyResult, ticket_combos_map],resultIndex}
            <DisplayTicketComboPurifyResult {resultIndex} {ticket_combos_map} {allGearCategories}   />
        {/each}
        </tbody>

    </Table>
{/if}

