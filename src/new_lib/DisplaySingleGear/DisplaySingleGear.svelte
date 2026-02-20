
<script lang="ts">
    interface Props {
        gearPurifyCategory?: import('svelte').Snippet;
        gearImageAndAbilities?: import('svelte').Snippet;
        max_allowed_chunks?: import('svelte').Snippet;
        how_far_to_check?: import('svelte').Snippet;
        hideResultTable?: import('svelte').Snippet;
    }

    let {
        gearPurifyCategory,
        gearImageAndAbilities,
        max_allowed_chunks,
        how_far_to_check,
        hideResultTable
    }: Props = $props();

</script>


<td class="gear-checkbox">
    {@render gearPurifyCategory?.()}
</td>

{@render gearImageAndAbilities?.()}

<td>
    {@render max_allowed_chunks?.()}
</td>
<td>
    {@render how_far_to_check?.()}
</td>
<td>
    {@render hideResultTable?.()}
</td>



