<!-- @migration-task Error while migrating Svelte code: Cannot reassign or bind to each block argument in runes mode. Use the array and index variables instead (e.g. `array[i] = value` instead of `entry = value`, or `bind:value={array[i]}` instead of `bind:value={entry}`)
https://svelte.dev/e/each_item_invalid_assignment -->
<script lang="ts">
    import { ability_filenames } from "../../assets/abilityParams";
    import InputSubAbility from "./InputSubAbility.svelte";
    import {setContext} from "svelte";

    interface Props {
        abilityIds: (number|"Unknown")[];
        allowBlankAbility?: boolean;
    }

    let { abilityIds, allowBlankAbility = false }: Props = $props();

    setContext('allowBlankAbility', allowBlankAbility);


</script>

{#each abilityIds as ability_filename,i}
    <InputSubAbility bind:abilityId={abilityIds[i]} />
{/each}
