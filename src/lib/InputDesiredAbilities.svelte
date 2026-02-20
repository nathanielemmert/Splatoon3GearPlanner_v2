<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
    import SubAbilityImages from "./ImageTypes/SubAbilityImages.svelte";
    import InputSubAbilities from "./SingleUseInputs/InputSubAbilities.svelte";

    export let desiredAbilities: number[][];

    let hidden: boolean = false;

    function onClick(e: Event) {
        const target = e.target as HTMLButtonElement;
        hidden = !hidden;
    }

    let newDesiredAbility:(number|"Unknown")[] = Array(3).fill("Unknown");

    function addDesiredAbility(abilities:number[]){
        if(!newDesiredAbility.includes("Unknown")){
            desiredAbilities.push(newDesiredAbility as number[])
            desiredAbilities=desiredAbilities;
            newDesiredAbility = Array(3).fill("Unknown")
        }

    }


    $:console.log(desiredAbilities)

</script>

<div class="container">
    <div>
        <label for="toggle">Desired Abilities:</label>
        <button id="toggle" on:click={onClick}>
            {hidden  ? "Show" : "Hide"}
        </button>
    </div>
    <table style={hidden ? "display:none" : ""}>
        {#each desiredAbilities as abilityCombo, listIndex}
            <tr>
                <td style="text-align: right">
                    <button on:click={()=>{desiredAbilities.splice(listIndex,1);desiredAbilities=desiredAbilities;}}>Remove</button>
                </td>
                <td style="text-align: left"><div>
                    <InputSubAbilities bind:abilityIds={abilityCombo} />
                </div></td>
            </tr>
        {/each}
        <tr >
            <td class="newAbility" style="text-align: left"><div>
                <InputSubAbilities bind:abilityIds={newDesiredAbility} allowBlankAbility/>
            </div></td>
            <td class="newAbility" style="text-align: right">
                <button on:click={addDesiredAbility}>Add</button>
            </td>

        </tr>
    </table>
</div>

<style>
    .container {
        border: 3px solid black;
        margin-bottom: 4px;
        width: max-content;
        padding: 2px 90px;
    }
    table{
        display:table;
        width: 100%;
    }
    .newAbility{
        padding-top: 20px;
    }
</style>
