<script lang="ts">
    import type {GearPurifyCategory} from "../../types/gearCategoryTypes";
    import MainAbilityImage from "../MainAbilityImage.svelte";
    import SubAbilityImage from "../SubAbilityImage.svelte";
    import SmallSubAbilityImages from "../SmallSubAbilityImages.svelte";

    interface Props {
        gearPurifyCategory: GearPurifyCategory;
    }

    let { gearPurifyCategory }: Props = $props();
</script>

{#if gearPurifyCategory.type==="pure"}
    {@const a = gearPurifyCategory.subAbility}
    <SubAbilityImage abilityId={a}/>
    <SmallSubAbilityImages abilityIds={[a,a,a]}/>
    {gearPurifyCategory.gearType}
{:else if gearPurifyCategory.type==="named"}
    {gearPurifyCategory.name}
{/if}

