<script lang="ts">
    interface Props {
        gear_filename: string;
    }

    let { gear_filename }: Props = $props();
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<img src={`https://leanny.github.io/splat3/images/gear/${gear_filename}.webp`}/>

<style>
    img{
        height: 96px;
        width: 96px;
    }
</style>