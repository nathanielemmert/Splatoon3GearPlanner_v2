<script lang="ts">
    import type { LeannySubAbility } from "wasm-splatoon-gear-checker";
    import { ability_filenames } from "../../assets/abilityParams";

    interface Props {
        abilityId: LeannySubAbility;
    }

    let { abilityId }: Props = $props();
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<img src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[abilityId]}.png`}/>

<style>
    img{
        height: 36px;
        width: 36px;
        background-color: black;
        border-radius: 50%;
    }
</style>
