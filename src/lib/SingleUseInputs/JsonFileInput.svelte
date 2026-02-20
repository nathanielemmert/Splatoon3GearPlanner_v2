<script lang="ts">
    import { GearDbSchema, GearSeedDatabaseSchema, type GearSeedDatabase } from "../types/typesLeanny";
/*    import Ajv from "ajv/dist/jtd"
    import typesLeannySchema from "../types/typesLeannySchema.json"
    import draft6MetaSchema  from "ajv/dist/refs/json-schema-draft-06.json"*/

    // const _typesLeannySchema: JTDSchemaType<GearSeedDatabase> = _typesLeannySchema;



    

    interface Props {
        gearSeedDatabase: GearSeedDatabase;
    }

    let { gearSeedDatabase = $bindable() }: Props = $props();

    let files:FileList = $state();

    let validJsonFile:boolean = $state();

    const onChange = async (event:Event) => {
        const event_target= event.target as HTMLInputElement;
        
        if (event_target.files) {
            try{
                const gearSeedDatabaseText = JSON.parse(await event_target.files[0].text())
                gearSeedDatabase = GearSeedDatabaseSchema.parse(gearSeedDatabaseText)
                validJsonFile=true;
            }
            catch(e){
                validJsonFile=false;
            }     
        }
    }

    








</script>

<label for="avatar">Upload your gear database file:</label>
<input
    accept=".json,application/json"
    bind:files
    onchange={onChange}
    id="avatar"
    name="avatar"
    type="file"
/>
{#if validJsonFile===true}
<br/>VALID JSON FILE
{:else if validJsonFile===false}
<br/>INVALID JSON FILE
{/if}
