<script lang="ts">
    import type {GearPurifyCategory} from "../../types/gearCategoryTypes";
    import MainAbilityImage from "../MainAbilityImage.svelte";
    import SubAbilityImage from "../SubAbilityImage.svelte";
    import SmallSubAbilityImages from "../SmallSubAbilityImages.svelte";
    import SmallMainAbilityImage from "../SmallMainAbilityImage.svelte";
    import SubAbilityImages from "../SubAbilityImages.svelte";

    interface Props {
        gearPurifyCategory: GearPurifyCategory;
    }

    let { gearPurifyCategory }: Props = $props();
</script>

{#if gearPurifyCategory.type==="pure"}
{@const {mainAbility, subAbilities}=gearPurifyCategory}
    <MainAbilityImage abilityId={mainAbility}/>
    <SubAbilityImages abilityIds={subAbilities}/>
    {gearPurifyCategory.gearType}
{:else if gearPurifyCategory.type==="named"}
    {gearPurifyCategory.name}
{/if}

