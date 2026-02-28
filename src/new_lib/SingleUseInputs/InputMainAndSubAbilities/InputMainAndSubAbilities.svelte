<script lang="ts">
    import type { LeannySubAbility,MainAbility } from "wasm-splatoon-gear-checker";
    import { ability_filenames } from "../../../assets/abilityParams";
    import InputMainAbility from "./InputMainAbility.svelte";
    import InputDesiredAbilities from "../InputDesiredAbilities/InputDesiredAbilities.svelte";
    import InputDesiredAbilityCombo from "../InputDesiredAbilities/InputDesiredAbilityCombo.svelte";
    import InputSingleAbility from "../InputDesiredAbilities/InputSingleAbility.svelte";
    import InputGearType from "../InputGearType.svelte"


    interface Props {
        subAbilityIds: LeannySubAbility[];
        mainAbilityId: MainAbility;
    }

    let { 
        subAbilityIds = $bindable(),
        mainAbilityId= $bindable(),
    }: Props = $props();
</script>



    <div style="display: inline-flex; align-items:end">
        <InputMainAbility bind:abilityId={mainAbilityId}/>
        {#each subAbilityIds as abilityId,i}
            <!-- TODO: Replace this usage of InputSingleAbility with a new file named InputSubAbilities -->
            <InputSingleAbility bind:abilityId={subAbilityIds[i]} allowBlankAbility={false}/>
        {/each}
    </div>

