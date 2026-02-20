<script lang="ts">
    import { run } from 'svelte/legacy';

    import { ability_filenames } from "../../assets/abilityParams";
    import SubAbilityImage from "./SubAbilityImage.svelte";

    interface Props {
        abilityIds: (string|number)[];
    }

    let { abilityIds }: Props = $props();
    let ability_filename_array: (string|number)[] = $state();
    run(() => {
        ability_filename_array = abilityIds.slice(-3);
        for (let i = 3-ability_filename_array.length; i > 0; i--) {ability_filename_array.push("Unknown")}
    });
</script>

{#each ability_filename_array as ability_filename}
    <SubAbilityImage abilityId={ability_filename.toString()} />
{/each}
