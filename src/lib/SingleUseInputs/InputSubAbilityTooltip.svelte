<script lang="ts">

    import {ability_filenames} from "../../assets/abilityParams";
    import {getContext} from "svelte";

    export let abilityId:number|"Unknown";

    let allowBlankAbility:boolean = getContext("allowBlankAbility");


    let abilities = (allowBlankAbility)?["Unknown",...Array(14).keys()]:[...Array(14).keys()];
</script>


    {#each abilities as ability}
        <img
                src={`https://leanny.github.io/splat3/images/skill/${ability_filenames[ability]}.webp`} alt=""
                on:click={()=>{abilityId=ability;console.log("NEW ABILITY",ability)}}
        />
    {/each}



<style>
    img{
        height: 36px;
        width: 36px;
        background-color: black;
        border-radius: 50%;
    }
</style>


