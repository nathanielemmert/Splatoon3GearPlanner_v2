<script lang="ts">

    interface Props {
        ticketDepthLimit: number;
    }

    let { ticketDepthLimit = $bindable() }: Props = $props();

    function onChange(e:Event){
        const target = e.target as HTMLInputElement;

        ticketDepthLimit=parseInt(target.value)

    }

</script>

<label for="ticketDepthLimit">Max # of tickets checked at the same time:</label>
<input id="ticketDepthLimit" onchange={onChange} type="number" value={ticketDepthLimit} max=20 step=1 width="4em">