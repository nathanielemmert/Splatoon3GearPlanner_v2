<script lang="ts">

    interface Props {
        alwaysCheckFullTicketDepth: boolean;
    }

    let { alwaysCheckFullTicketDepth = $bindable() }: Props = $props();

    function onChange(e:Event){
        const target = e.target as HTMLInputElement;

        alwaysCheckFullTicketDepth=target.checked

    }
    
    

</script>

<label for="alwaysCheckFullTicketDepth">Always check the full # of tickets:</label>
<input id="alwaysCheckFullTicketDepth" onchange={onChange} type="checkbox" value={alwaysCheckFullTicketDepth} width="4em">