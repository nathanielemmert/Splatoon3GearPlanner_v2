<script lang="ts">
    import type {GearInputState, GearPurifyCategory} from "../types/gearTypes";
    import type {TicketCombo, TicketComboPurifyResult} from "wasm-splatoon-gear-checker";
    import GearImage from "../ImageTypes/GearImage.svelte";
    import {Button, Card, CardBody, CardHeader, Input, Table} from "sveltestrap";
    import {abilityNameParams} from "../../assets/translationParams";
    import {SubAbility} from "wasm-splatoon-gear-checker";
    import SubAbilityImage from "../ImageTypes/SubAbilityImage.svelte";
    import DisplayCategoryPurifyResult from "./DisplayCategoryPurifyResult.svelte";
    import TicketComboImages from "../ImageTypes/TicketComboImages.svelte";
    import SmallGearImage from "../ImageTypes/SmallGearImage.svelte";
    import MainAbilityImage from "../ImageTypes/MainAbilityImage.svelte";
    import SubAbilityImages from "../ImageTypes/SubAbilityImages.svelte";
    import GearSlotImages from "../ImageTypes/GearSlotImages.svelte";
    import GearCategoryName from "../ImageTypes/GearCategoryName/GearCategoryName.svelte";

    export let resultIndex:number;

    export let ticket_combos_map: Map<TicketCombo, TicketComboPurifyResult>;
    export let allGearCategories:GearPurifyCategory[];

    let ticketComboIndex = 1
    let result_entries:[TicketCombo, TicketComboPurifyResult][];
    const updateResultEntries = (x:any)=>{
        result_entries = [...ticket_combos_map.entries()];
        ticketComboIndex=1;
    }
    $:updateResultEntries(ticket_combos_map)
    $:current_ticket_combo = result_entries[ticketComboIndex-1][0]
    $:ticketComboPurifyResult = result_entries[ticketComboIndex-1][1]

    let showTable = true;

</script>

<tr class="border border-bottom-0 border-3 " >
    <th scope="row">
        Result #{resultIndex}
    </th>
    <td><!--style="padding-top: 100px"-->
        <TicketComboImages ticketIds={current_ticket_combo}/>
    </td>
    <td>
        <Input type="number" min="1" max={ticket_combos_map.size} bind:value={ticketComboIndex} style="width: min-content; display:inline-flex"/>
        {"/"} {ticket_combos_map.size}
    </td>
    <td> <Button on:click={()=>showTable=!showTable}>{showTable?"Hide":"Show"}</Button> </td>
</tr >
<tr></tr>
<tr style={showTable?"":"visibility:collapse;"} >
<td colspan="99">
{#if showTable}
    <Table bordered>
        <thead>
        <tr>
            <th style="background-color: transparent;">
                Category
            </th>
            <th style="background-color: transparent;">
                Gear
            </th>
            <th style="background-color: transparent;">
                Sub Abilities
            </th>
            <th style="background-color: transparent;">
                Soonest Roll #
            </th>
            <th style="background-color: transparent;">
                Tickets Used on each Gear
            </th>
        </tr>
        </thead>
        <tbody>
        {#each ticketComboPurifyResult as resultGearCategory, categoryIndex}
            {@const gearCategory = allGearCategories[categoryIndex]}
            {@const gearCategoryRowSpan = 1 + resultGearCategory.reduce((acc,x)=>(acc+x.size),0)}
            <tr>
            <td rowspan={gearCategoryRowSpan} style="background-color: transparent;">
                <!--PURE <br/>
                {(gearCategory.gearType+" ")}<SubAbilityImage abilityId={gearCategory.subAbility}/>-->
                <GearCategoryName gearPurifyCategory={gearCategory}/>
            </td>
            </tr>
            {#each resultGearCategory as gearResult, gearIndex}
                {@const gearInputState = gearCategory.containedGear[gearIndex]}
                {@const gearMainAbility = gearInputState.gearInfo.gear.MainSkill}
                {#each gearResult as [ability_combo,{chunks_used, soonest_index, actual_ticket_combo}],gearPlanIndex}
                    <tr style="background-color: transparent;border:none;">
                    {#if gearPlanIndex==0}
                        <td rowspan={gearResult.size} style="text-align: right;background-color: transparent;border: none;">
                            <div class="gear-image" >
                                <SmallGearImage RowId={gearInputState.RowId} />
                                <MainAbilityImage abilityId={gearMainAbility}/>
                            </div>
                        </td>
                    {/if}
                        <td align="left" style="background-color: transparent; vertical-align: middle;border: none;"><SubAbilityImages abilityIds={ability_combo}/></td>
                        <td style="background-color: transparent; vertical-align: middle;border: none;">{soonest_index}</td>
                        <td style="background-color: transparent; vertical-align: middle;border: none;    ">
                            <GearSlotImages gearSlots={actual_ticket_combo}/>
                        </td>
                    </tr>
                {/each}
            {/each}

        {/each}
        </tbody>

    </Table>
{/if}
</td>
</tr>

<style>

</style>






