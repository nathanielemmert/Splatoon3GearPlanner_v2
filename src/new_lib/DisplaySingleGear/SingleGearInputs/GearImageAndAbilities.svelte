<script lang="ts">
    import SubAbilityImages from "../../ImageTypes/SubAbilityImages.svelte";
    import GearImage from "../../ImageTypes/GearImage.svelte";
    import MainAbilityImage from "../../ImageTypes/MainAbilityImage.svelte";
    import {getContext} from "svelte";
    import {type Writable} from "svelte/store";
    import {type GearSeedDatabase} from "../../types/typesLeanny";
    import {type GearType} from "../../types/gearTypes";

    export let gearType:GearType;
    export let gearId:string;

    const gearSeedDatabase=getContext<Writable<GearSeedDatabase>>("userGearDatabaseStore");
    $:gear = $gearSeedDatabase.GearDB[`HaveGear${gearType}Map`][gearId]
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

