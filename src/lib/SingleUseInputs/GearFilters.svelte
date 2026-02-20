<script lang="ts">
    import type { GearFilters, GearType } from "../types/types";

    interface Props {
        gearFilters: GearFilters;
    }

    let { gearFilters = $bindable() }: Props = $props();

    function onChange(gearType:GearType,e:Event){
        const target = e.target as HTMLInputElement;
        gearFilters[`show${gearType}Gear`]=target.checked
    }
    

</script>

<label for="showHeadGear">Show Head Gear?</label>
<input id="showHeadGear" onchange={onChange.bind(this,"Head")} type="checkbox" checked={gearFilters.showHeadGear} width="4em">

<label for="showClothesGear">Show Clothes Gear?</label>
<input id="showClothesGear" onchange={onChange.bind(this,"Clothes")} type="checkbox" checked={gearFilters.showClothesGear} width="4em">

<label for="showShoesGear">Show Shoes Gear?</label>
<input id="showShoesGear" onchange={onChange.bind(this,"Shoes")} type="checkbox" checked={gearFilters.showShoesGear} width="4em">