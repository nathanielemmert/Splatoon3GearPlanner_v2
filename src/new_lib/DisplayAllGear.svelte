<script lang="ts">
    import {SubAbility, Ticket} from "wasm-splatoon-gear-checker";
    import {type GearSeedDatabase} from "./types/typesLeanny";
    import {createGearPurifyCategoryMap, type GearInfo, type GearPurifyCategory, GearType} from "./types/gearTypes";
    import VirtualTable from 'svelte-virtual-table'
    import DisplayGearCategories from "./DisplayGearCategories/DisplayGearCategories.svelte";
    import PurifyAllGear from "./PurifyAllGear/PurifyAllGear.svelte";
    import {Progress} from "sveltestrap";
    import type {GearInputState} from "./stores/createGear";
    import {createGear} from "./stores/createGear";
    import DisplaySingleGearRow from "./DisplayAllGearRows/DisplaySingleGearRow.svelte";
    import InputDesiredAbilities from "./SingleUseInputs/InputDesiredAbilities/InputDesiredAbilities.svelte";
    import {onMount} from "svelte";
    import MyVirtualTable from "../svelte_virtual_table/MyVirtualTable.svelte";


    export let userGearDatabase: GearSeedDatabase;
    export let global_desired_abilities: SubAbility[][];
    let gearDb= userGearDatabase.GearDB;


    export let allowed_drinks:Ticket[];



    let allDisplayedGear:GearInputState[] = [];

    //TODO: this should only run once when the DisplayAllGear is first instantiated.
    // However, if a new userGearDatabase file is uploaded, this whole component should be destroyed and recreated.
    let allGearCategories:GearPurifyCategory[] = [];
    let allGearCategoriesMap=createGearPurifyCategoryMap();

    let loadingCount = 0;
    //@ts-ignore
    let loading_total:number = "?";
    let showLoading=true;

    function repaint() {
        return new Promise(resolve =>
            requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
        );
    }

    let tableItems:{rowType:"first"|"second",gearInputState:GearInputState}[]=[];

    async function initialize_app(){
        //https://stackoverflow.com/questions/76933374/svelte-loading-indicator-for-a-synchronous-method
        showLoading = true;
        loading_total = GearType.reduce((acc,gearType)=>{
            const haveGearTypeMap = userGearDatabase.GearDB[`HaveGear${gearType}Map`]
            return acc + Object.keys(haveGearTypeMap).length;
        },0);
        await repaint();



        for (const gearType of GearType) {
            const haveGearTypeMap = userGearDatabase.GearDB[`HaveGear${gearType}Map`]
            for (const gearId of Object.keys(haveGearTypeMap)) {
                const gearInfo:GearInfo={gearType,gearId,gear:haveGearTypeMap[gearId]};
                let createdGear = createGear(gearInfo);
                allDisplayedGear.push(createdGear)
                loadingCount+=1;
                if(loadingCount%10==0)await repaint();
                //TODO: await repaint if 0.5 seconds have gone by since the last repaint OR if 10 elements have been processed since the last repaint.
            }
        }



        allDisplayedGear.sort((a,b)=>(a.gearInfo.gear.MainSkill-b.gearInfo.gear.MainSkill))
        allDisplayedGear.sort((a,b)=>(GearType.indexOf(a.gearInfo.gearType)-GearType.indexOf(b.gearInfo.gearType)))

        allDisplayedGear.forEach((createdGear)=>{
            tableItems.push({rowType:"first",gearInputState:createdGear})
            tableItems.push({rowType:"second",gearInputState:createdGear})
        })

        showLoading=false;
        return true;

    }








    onMount(async ()=>{
        await initialize_app();
    })







    
</script>

{#if showLoading}
    <div class="text-center">Loading... {loadingCount}/{loading_total}</div>
    <Progress value={100*loadingCount/loading_total} />
{:else}
    <InputDesiredAbilities bind:desired_abilities={global_desired_abilities}/>
    <DisplayGearCategories bind:allGearCategories bind:allGearCategoriesMap bind:allDisplayedGear {global_desired_abilities}/>
    <PurifyAllGear {allGearCategories} />
    <br/><br/><br/><br/><br/>


    <MyVirtualTable
            requireBorderCollapse={false}
            items={tableItems}
            start={0}
            end={20}
            class="svelte-virtual-gear-table"
            fixedColWidth
    >
        <tr slot="thead" role="row">
            <!--
             <th data-sort="time" data-sort-initial="descending">Time ago</th>
             <th data-sort="comments_count">Comments</th>
             -->
            <th>Select</th>
            <th>Gear</th>
            <th>Abilities</th>
            <th>Max Chunks?</th>
            <th>How far to check?</th>
            <th>Show Gear Abilities</th>
        </tr>
        <svelte:fragment slot="tbody"  let:item={item} let:index >
            {@const {gearInputState,rowType} = item}
            <DisplaySingleGearRow {gearInputState} {rowType} bind:allGearCategoriesMap bind:allGearCategories bind:global_desired_abilities hidden={index==-1} />
        </svelte:fragment>

    </MyVirtualTable>
{/if}





<style>
    :global(.svelte-virtual-gear-table){
        border-collapse: separate!important; /*required due to limitation of svelte-virtual-table*/
        border-spacing: 0;
    }
</style>



