<script lang="ts">

    export let how_far_to_check:number;
    export let wasmValue:number|undefined;


    function onChange(e:Event){
        const target = e.target as HTMLInputElement;

        how_far_to_check=parseInt(target.value)+1

    }

</script>

<label for="howFarToCheck">How far to check:</label>
<input id="howFarToCheck" on:change={onChange} type="number" value={how_far_to_check-1} max=50 step=1 width="4em">