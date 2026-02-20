<script lang="ts">
    import {FormGroup, Input, Label} from "@sveltestrap/sveltestrap";
    import {GearType} from "../../types/gearTypes";
    import {LeannySubAbility, SubAbility} from "wasm-splatoon-gear-checker";
    import {ALL_SUB_ABILITIES} from "../../types/helperFunctions";
    import {abilityNameParams} from "../../../assets/translationParams";
    import SmallSubAbilityImage from "../../ImageTypes/SmallSubAbilityImage.svelte";
    import InputSingleAbility from "../../SingleUseInputs/InputDesiredAbilities/InputSingleAbility.svelte";


    interface Props {
        subAbility: LeannySubAbility;
    }

    let { subAbility = $bindable() }: Props = $props();
</script>

<FormGroup>
    <Label for="exampleSelect">Select Ability Type: </Label>
    <InputSingleAbility bind:abilityId={subAbility} allowBlankAbility={false}/>
</FormGroup>