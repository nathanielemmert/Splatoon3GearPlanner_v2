<script lang="ts">
    import type { LeannySubAbility,MainAbility } from "wasm-splatoon-gear-checker";
    import { ability_filenames } from "../../assets/abilityParams";
    import SubAbilityImage from "./SubAbilityImage.svelte";
    import SmallSubAbilityImages from "./SmallSubAbilityImages.svelte";
    import SmallMainAbilityImage from "./SmallMainAbilityImage.svelte";

    interface Props {
        subAbilityIds: LeannySubAbility[];
        mainAbilityId: MainAbility;
    }

    let { 
        subAbilityIds,
        mainAbilityId,
    }: Props = $props();
</script>



    <div style="display: inline-flex; align-items:end">
        <SmallMainAbilityImage abilityId={mainAbilityId}/>
        <SmallSubAbilityImages abilityIds={subAbilityIds}/>
    </div>


