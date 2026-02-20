<script lang="ts">
    import { ability_filenames } from "../../assets/abilityParams";

    interface Props {
        abilityId: string;
    }

    let { abilityId }: Props = $props();
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<img src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[abilityId]}.webp`}/>

<style>
    img{
        height: 64px;
        width: 64px;
        background-color: black;
        border-radius: 50%;
    }
</style>
