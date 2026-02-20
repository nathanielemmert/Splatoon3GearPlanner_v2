<script lang="ts">

import {gearInfoParams} from "../../assets/gearInfoParams";
import SmallGearImage from "../ImageTypes/SmallGearImage.svelte";
import MainAbilityImage from "../ImageTypes/MainAbilityImage.svelte";
import SubAbilityImages from "../ImageTypes/SubAbilityImages.svelte";
import GearImage from "../ImageTypes/GearImage.svelte";
import type {GearInputState, GearPurifyCategory} from "../types/gearTypes";
import type {TicketComboPurifyResult} from "wasm-splatoon-gear-checker";
import TicketComboImages from "../ImageTypes/TicketComboImages.svelte";
import GearSlotImage from "../ImageTypes/GearSlotImage.svelte";
import GearSlotImages from "../ImageTypes/GearSlotImages.svelte";
import ChunksImage from "../ImageTypes/ChunksImage.svelte";


    interface Props {
        allDisplayedGearMap: Map<string,GearInputState>;
        gearCategory: GearPurifyCategory;
        resultGearCategory: TicketComboPurifyResult[number];
    }

    let { allDisplayedGearMap, gearCategory, resultGearCategory }: Props = $props();

</script>


<tr>
    <td colspan="10">
        <div>
            <table>
               <!-- <thead>
                <tr>
                    <th colspan="10"><h3>HOW TO PURIFY EACH PIECE OF GEAR</h3></th>
                </tr>
                <tr>
                    <th colspan="2" >Using the above tickets, these are your choices of abilties for each gear.</th>
                    <th style="max-width: 9rem;">Step 1: Roll this many abilities on your gear and scrub.</th>
                    <th>Step 2: Roll the next three slots on your gear, using these tickets for each slot.</th>
                </tr>
                </thead>-->
                {#each resultGearCategory as gearResult, gearIndex}
                    {@const RowId = gearCategory.containedGear[gearIndex]}
                    {@const gearMainAbility = allDisplayedGearMap.get(RowId)?.gearInfo.gear.MainSkill}
                    {#each gearResult as [ability_combo,{chunks_used, soonest_index, actual_ticket_combo}],gearPlanIndex}
                        <tr>
                            {#if gearPlanIndex===0}
                                <td rowspan={gearResult.size} style="text-align: right">
                                    <div class="gear-image" >
                                        <SmallGearImage {RowId} />
                                        <MainAbilityImage abilityId={gearMainAbility}/>
                                    </div>
                                </td>
                            {/if}
                            <td align="left"><SubAbilityImages abilityIds={ability_combo}/></td>
                            <td>{soonest_index}</td>
                            <td>
                                <GearSlotImages gearSlots={actual_ticket_combo}/>
                            </td>
                        </tr>
                    {/each}
                {/each}
            </table>
        </div>
    </td>
</tr>