<script lang="ts">
    import { ability_filenames } from "../../assets/abilityParams";
    import InputSubAbility from "./InputSubAbility.svelte";
    import {setContext} from "svelte";

    export let abilityIds: (number|"Unknown")[];
    export let allowBlankAbility:boolean=false;

    setContext('allowBlankAbility', allowBlankAbility);


</script>

{#each abilityIds as ability_filename}
    <InputSubAbility bind:abilityId={ability_filename} />
{/each}
