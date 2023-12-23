<script lang="ts">
    import type { LeannySubAbility } from "wasm-splatoon-gear-checker";
    import { ability_filenames } from "../../assets/abilityParams";

    export let abilityId:LeannySubAbility;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[abilityId]}.webp`}/>

<style>
    img{
        height: 18px;
        width: 18px;
        background-color: black;
        border-radius: 50%;
    }
</style>
