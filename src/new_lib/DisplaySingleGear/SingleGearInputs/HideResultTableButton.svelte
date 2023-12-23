<script lang="ts">
    import {Button} from "sveltestrap";
    import {getContext, setContext} from "svelte";
    import type {ReadableSignal, WritableSignal} from "@amadeus-it-group/tansu";
    import {readable} from "@amadeus-it-group/tansu";

    function repaint() {
        return new Promise(resolve =>
            requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
        );
    }

    export let hideResultTable: boolean = false;

    let handleScroll:ReadableSignal<any> = getContext("handleScroll")??readable(()=>{});



</script>
<div>
    <Button color="primary"  on:click={async ()=>{
        hideResultTable=!hideResultTable;
        await repaint()
        console.log(hideResultTable);
        handleScroll()
    }} class="btn btn-primary">
        {hideResultTable ? "Show" : "Hide"}
    </Button>
</div>
