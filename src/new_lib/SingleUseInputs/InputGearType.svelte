<script lang="ts">
    import {FormGroup, Input, Label} from "@sveltestrap/sveltestrap";
    import {GearType} from "../types/gearTypes";
    import {ListGroup,ListGroupItem} from "@sveltestrap/sveltestrap"

    interface Props {
        gearType: GearType;
    }

    let { 
        gearType = $bindable(),
    }: Props = $props();
</script>

<ListGroup horizontal style="display: inline-flex">
    {#each GearType as g}
        {@const gearTypeActive = g==gearType}
            <ListGroupItem tag="button"
                            active={gearTypeActive}
                            style="padding: 2px;  font-size: 15px"
                            on:click={()=>{gearType=g;}}
            >
                {g}
            </ListGroupItem>
    {/each}
</ListGroup>