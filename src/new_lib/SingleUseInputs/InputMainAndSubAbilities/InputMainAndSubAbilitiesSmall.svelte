<script lang="ts">
    import type { LeannySubAbility,MainAbility } from "wasm-splatoon-gear-checker";
    import { ability_filenames } from "../../../assets/abilityParams";
    import InputMainAbilitySmall from "./InputMainAbilitySmall.svelte";
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
        <InputMainAbilitySmall bind:abilityId={mainAbilityId}/>
        {#each subAbilityIds as abilityId,i}
            <!-- TODO: Replace this usage of InputSingleAbility with a new file named InputSubAbilitiesSmall -->
            <InputSingleAbility bind:abilityId={subAbilityIds[i]} allowBlankAbility={false}/>
        {/each}
    </div>

