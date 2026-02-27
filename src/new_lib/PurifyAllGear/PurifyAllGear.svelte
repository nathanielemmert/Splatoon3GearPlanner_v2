<script lang="ts">
import {Button} from "@sveltestrap/sveltestrap";
import {createGearPurifyCategoryMap,  type GearPurifyCategory} from "../types/gearCategoryTypes";
import {Gear, GearCategory, GearPurifier, type MultiGearResult} from "wasm-splatoon-gear-checker";
import {DEFAULT_ALLOWED_DRINKS} from "../types/helperFunctions";
import MultiGearResultTable from "../MultiGearResultTable/MultiGearResultTable.svelte";
import {
    alwaysCheckFullTicketDepth,
    forcedTicketDepthLimit,
    globalHowFarToCheck,
    ticketDepthLimit
} from "../stores/globalSettings.svelte";
import InputForceCheck from "../SingleUseInputs/InputForceCheck.svelte";
import InputTicketDepthLimit from "../SingleUseInputs/InputTicketDepthLimit.svelte";

    interface Props {
        allGearCategories?: GearPurifyCategory[];
    }

    let { allGearCategories = [] }: Props = $props();

let multi_gear_result:MultiGearResult = $state();


function updateResultTable(){
    console.log("purify settings",$ticketDepthLimit,$alwaysCheckFullTicketDepth)
    let gearPurifier:GearPurifier = new GearPurifier().with_setting($ticketDepthLimit,$alwaysCheckFullTicketDepth, $forcedTicketDepthLimit);
    for(const gearPurifyCategory of allGearCategories){
        let wasmGearCategory = new GearCategory();
        for(const gearInputState of gearPurifyCategory.containedGear){
            const wasmGear:Gear = gearInputState.wasmGear;
            wasmGearCategory.add_gear_to_category(wasmGear, $globalHowFarToCheck, DEFAULT_ALLOWED_DRINKS)
        }
        gearPurifier.add_gear_category(wasmGearCategory)
    }
    multi_gear_result = gearPurifier.purify_all_gear();
    //purify all gear, update svelte variable with result.
}

</script>

<h3>Gear Purify Settings:</h3>

1. Check up to <span style="display: inline-flex"><InputTicketDepthLimit bind:ticketDepthLimit={$ticketDepthLimit}/></span> tickets at once, if needed<br/>
2.(optional)<span style="display: inline-flex">
    <InputForceCheck bind:alwaysCheckFullTicketDepth={$alwaysCheckFullTicketDepth}/>
</span>
Always check combinations up to
<span style="display: inline-flex">
    <InputTicketDepthLimit bind:ticketDepthLimit={$forcedTicketDepthLimit} enabled={alwaysCheckFullTicketDepth}/>
</span>
tickets long<br/>

<Button color="primary" on:click={updateResultTable}>Purify All Gear</Button><br/>

{#if multi_gear_result!=null}
    <MultiGearResultTable {multi_gear_result}  {allGearCategories} />
{/if}






