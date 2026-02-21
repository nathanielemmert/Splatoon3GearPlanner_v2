
<script lang="ts">
    interface Props {
        gearPurifyCategory_snippet?: import('svelte').Snippet;
        gearImageAndAbilities_snippet?: import('svelte').Snippet;
        max_allowed_chunks_snippet?: import('svelte').Snippet;
        how_far_to_check_snippet?: import('svelte').Snippet;
        hideResultTable_snippet?: import('svelte').Snippet;
    }

    let {
        gearPurifyCategory_snippet,
        gearImageAndAbilities_snippet,
        max_allowed_chunks_snippet,
        how_far_to_check_snippet,
        hideResultTable_snippet
    }: Props = $props();

</script>


<td class="gear-checkbox">
    {@render gearPurifyCategory_snippet?.()}
</td>

{@render gearImageAndAbilities_snippet?.()}

<td>
    {@render max_allowed_chunks_snippet?.()}
</td>
<td>
    {@render how_far_to_check_snippet?.()}
</td>
<td>
    {@render hideResultTable_snippet?.()}
</td>



