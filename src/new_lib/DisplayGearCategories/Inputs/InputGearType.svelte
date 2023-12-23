<script lang="ts">
    import {FormGroup, Input, Label} from "sveltestrap";
    import {GearType} from "../../types/gearTypes";

    export let gearType:GearType;
</script>

<FormGroup>
    <Label for="exampleSelect">Select Gear Type</Label>
    <Input type="select" id="exampleSelect" bind:value={gearType} >
        {#each GearType as gearType}
            <option value={gearType}>{gearType}</option>
        {/each}
    </Input>
</FormGroup>