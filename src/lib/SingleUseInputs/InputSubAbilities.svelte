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

{#each abilityIds as ability_filename}
    <InputSubAbility bind:abilityId={ability_filename} />
{/each}
