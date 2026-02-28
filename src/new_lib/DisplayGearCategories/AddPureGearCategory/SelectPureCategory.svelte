<script lang="ts">
    import {GearType} from "../../types/gearTypes";
    import {ALL_SUB_ABILITIES} from "../../types/helperFunctions";
    import {ListGroup, ListGroupItem} from "@sveltestrap/sveltestrap";
    import type {LeannySubAbility} from "wasm-splatoon-gear-checker";
    import {SubAbility,MainAbility} from "wasm-splatoon-gear-checker";
    import SmallSubAbilityImages from "../../ImageTypes/SmallSubAbilityImages.svelte";
    import SmallMainAbilityImage from "../../ImageTypes/SmallMainAbilityImage.svelte";
    import {createGearPurifyCategoryMap} from "../../types/gearCategoryTypes";
    import SmallMainAndSubAbilityImages from "../../ImageTypes/SmallMainAndSubAbilityImages.svelte"
    import {subAbilitiesArePure} from "../../types/helperFunctions"

    interface Props {
        gearType: GearType;
        mainAbility:MainAbility;
        subAbilities:[LeannySubAbility,LeannySubAbility,LeannySubAbility]
        alreadyCreated?: boolean;
        allGearCategoriesMap: ReturnType<typeof createGearPurifyCategoryMap>;
    }

    let {
        gearType = $bindable(),
        mainAbility = $bindable(),
        subAbilities = $bindable(),
        alreadyCreated = false,
        allGearCategoriesMap
    }: Props = $props();

    let subAbility = $derived.by(()=>{
        console.log("SUB ABILITIES ARE PURE??",subAbilities,mainAbility)
        if( subAbilitiesArePure(subAbilities) && mainAbility == subAbilities[0]){
            return subAbilities[0];
        }
        return null;
    })




</script>



<ListGroup flush>
    {#each ALL_SUB_ABILITIES as a}
        {@const subAbilityActive = a==subAbility}
        {@const gearTypesAlreadyCreated = GearType.map(gearType=>allGearCategoriesMap?.pure?.get(gearType)?.get(a)==null?0:1).reduce((a, b) => a + b, 0)}
        {@const subAbilityAlreadyCreated = gearTypesAlreadyCreated > 0}
        {@const subAbilityAllCreated = gearTypesAlreadyCreated >= 3}
        {#if (alreadyCreated && subAbilityAlreadyCreated) || (!alreadyCreated &&!subAbilityAllCreated)}
            <ListGroupItem tag="li" action  style="padding-top: 5px; padding-bottom: 5px;" color={subAbilityActive?"secondary":""}>
                <SmallMainAndSubAbilityImages mainAbilityId={a} subAbilityIds={[a,a,a]}/>
                <ListGroup horizontal style="display: inline-flex">
                    {#each GearType as g}
                        {@const gearTypeActive = subAbilityActive && g==gearType}
                        {@const gearTypeAlreadyCreated = allGearCategoriesMap?.pure?.get(g)?.get(a)!=null}
                        {#if (alreadyCreated && gearTypeAlreadyCreated) || (!alreadyCreated &&!gearTypeAlreadyCreated)}
                            <ListGroupItem tag="button"
                                           active={gearTypeActive}
                                           style="padding: 2px;  font-size: 15px"
                                           on:click={()=>{gearType=g;mainAbility=a;subAbilities=[a,a,a]}}
                            >
                                {g}
                            </ListGroupItem>
                        {/if}
                    {/each}
                </ListGroup>
            </ListGroupItem>
        {/if}
    {/each}
</ListGroup>
