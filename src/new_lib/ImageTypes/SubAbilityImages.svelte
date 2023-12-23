<script lang="ts">
    import { LeannySubAbility } from "wasm-splatoon-gear-checker";
    import { ability_filenames } from "../../assets/abilityParams";
    import SubAbilityImage from "./SubAbilityImage.svelte";

    export let abilityIds: LeannySubAbility[];
    let ability_filename_array: LeannySubAbility[];
    $: {
        ability_filename_array = abilityIds.slice(-3);
        for (let i = 3-ability_filename_array.length; i > 0; i--) {ability_filename_array.push(LeannySubAbility.None)}
    }
</script>

{#each ability_filename_array as ability_filename}
    <SubAbilityImage abilityId={ability_filename} />
{/each}
