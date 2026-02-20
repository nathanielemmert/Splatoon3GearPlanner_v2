<script lang="ts">
    import {FormGroup, Input, Label} from "@sveltestrap/sveltestrap";
    import {GearType} from "../../types/gearTypes";

    interface Props {
        gearType: GearType;
    }

    let { gearType = $bindable() }: Props = $props();
</script>

<FormGroup>
    <Label for="exampleSelect">Select Gear Type</Label>
    <Input type="select" id="exampleSelect" bind:value={gearType} >
        {#each GearType as gearType}
            <option value={gearType}>{gearType}</option>
        {/each}
    </Input>
</FormGroup>