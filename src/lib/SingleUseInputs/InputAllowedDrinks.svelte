<script lang="ts">


    export let allowed_drinks:number[];

    let areDrinksAllowed:boolean = true;

    $:{
        if(areDrinksAllowed){
            allowed_drinks=[0xFFFFFFFF,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        }
        else{
            allowed_drinks =[0xFFFFFFFF]
        }
    }


</script>

<label for="drinksAllowed">Allow tickets to be used</label>
<input id="drinksAllowed" type="checkbox" bind:checked={areDrinksAllowed}/>
