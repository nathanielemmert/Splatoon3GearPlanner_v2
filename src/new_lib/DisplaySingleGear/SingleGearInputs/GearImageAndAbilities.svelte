<script lang="ts">
    import SubAbilityImages from "../../ImageTypes/SubAbilityImages.svelte";
    import GearImage from "../../ImageTypes/GearImage.svelte";
    import MainAbilityImage from "../../ImageTypes/MainAbilityImage.svelte";
    import {type Writable} from "svelte/store";
    import {type GearSeedDatabase} from "../../types/typesLeanny";
    import {type GearType} from "../../types/gearTypes";
    import { getContext_userGearDatabase } from "@/new_lib/stores/contexts.svelte";

    interface Props {
        gearType: GearType;
        gearId: string;
    }

    let { gearType, gearId }: Props = $props();

    const gearSeedDatabase=getContext_userGearDatabase();
    let gear = $derived(gearSeedDatabase.state.GearDB[`HaveGear${gearType}Map`][gearId])
</script>


<td class="gear-image">
    <GearImage {gearType} {gearId} />
</td>
<td class="ability-images" style="white-space: nowrap;width: 250px">
    <div class="container" style="white-space: nowrap;width: 250px" >
        <MainAbilityImage abilityId={gear.MainSkill} />
        <SubAbilityImages abilityIds={gear.ExSkillArray} />
    </div>
</td>

