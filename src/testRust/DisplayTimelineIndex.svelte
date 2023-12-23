<!--
<script lang="ts">
    import {
        purify_all_gear_js,
        old_purify_all_gear_js,
        purify_single_gear_js,
        old_purify_single_gear_js,
        enum_test,
        test_ability,
        SubAbility,
        new_purify_single_gear_js
    } from "wasm-splatoon-gear-checker";

    console.log(enum_test())
    console.log(typeof test_ability(0xffffffff))

    function is_bit_set(index,num){
        return !!( num & (0b1<<index) );
    }
    function replacer(key, value) {
        let json_string = (value)=>JSON.stringify(value,replacer,4);
        if(value instanceof Map) {
            return Array.from(value.entries()) // or with spread: value: [...value]
        }
        if( typeof value === 'number'){
            return "0x"+value.toString(16);
        }
        if(typeof value==='bigint'){
            let abilities = []
            for(const i of [...Array(16)].keys()){
                let mask = BigInt((0b1111)<<(i*4))
                let ticket = (value&mask)>>(BigInt(i*4));
                if(ticket==0xfn)break;
                abilities.push(ticket)
            }
            return "["+abilities.join(",")+"]"
        }
        if(typeof value == "object" && value.hasOwnProperty("value") && typeof value["value"]=="number"){
            // return "0b"+value["value"].toString(2);
            return "TicketSet{"+[...(Array(16).keys())].filter((i)=>is_bit_set(i,value["value"])).join(",")+"}"
        }
        else {
            return value;
        }
    }

    function print_values(value:any){
        if( typeof value === 'number'){
            return "0x"+value.toString(16);
        }
        if(typeof value==='bigint'){
            let abilities = []
            for(const i of [...Array(16)].keys()){
                let mask = BigInt((0b1111)<<(i*4))
                let ticket = (value&mask)>>(BigInt(i*4));
                if(ticket==0xfn)break;
                abilities.push(ticket)
            }
            return "["+abilities.join(",")+"]"
        }
        if(typeof value == "object" && value.hasOwnProperty("value") && typeof value["value"]=="number"){
            // return "0b"+value["value"].toString(2);
            return "TicketSet{"+[...(Array(16).keys())].filter((i)=>is_bit_set(i,value["value"])).join(",")+"}"
        }
        else {
            return value;
        }
    }

    function bigintToAbilityArray(value:bigint){
        let abilities = []
        for(const i of [...Array(16)].keys()){
            let mask = BigInt((0b1111)<<(i*4))
            let ticket = (value&mask)>>(BigInt(i*4));
            if(ticket==0xfn)break;
            abilities.push(Number(ticket))
        }
        return abilities
    }

    let internal_brand_names = Object.fromEntries(
        [
            ["SquidForce", "B00"],
            ["Zink", "B01"],
            ["Krak-On", "B02"],
            ["Rockenberg", "B03"],
            ["Zekko", "B04"],
            ["Forge", "B05"],
            ["Firefin", "B06"],
            ["Skalop", "B07"],
            ["Splash Mob", "B08"],
            ["Inkline", "B09"],
            ["Tentatek", "B10"],
            ["Takoroka", "B11"],
            ["Annaki", "B15"],
            ["Enperry", "B16"],
            ["Toni Kensa", "B17"],
            ["Barazushi", "B19"],
            ["Emberz", "B20"],
            ["Grizzco", "B97"],
            ["Cuttlegear", "B98"],
            ["amiibo", "B99"],
        ]
    )


    let gear = {
        seed:0x799474c6,
        brand:internal_brand_names["Inkline"],
        desired_abilities:[...Array(13).keys()].map(i=>[i,i,i])
    }
    console.log(gear)



    /*let result = purify_all_gear_js([gear], 20, 2, true, [0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    let result2 = old_purify_all_gear_js([gear], 20, 2, true, [0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);


    console.log([...result.keys()].sort())
    console.log([...result.keys()].length)

    console.log([...result2.keys()].sort())
    console.log([...result2.keys()].length)

    console.log([...result2.keys()].sort().toString() == [...result.keys()].sort().toString() )
    console.log(deepEquals(result,result2));*/

    let result = new_purify_single_gear_js(gear, 20, [0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    /*let result2 = old_purify_single_gear_js(gear, 20, [0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);*/

    console.log(result)
    /*console.log(result2)


    console.log([...result.keys()].sort())
    console.log([...result.keys()].length)

    console.log([...result2.keys()].sort())
    console.log([...result2.keys()].length)

    console.log([...result2.keys()].sort().toString() == [...result.keys()].sort().toString() )
    console.log(deepEquals(result,result2));*/








    function deepEquals(map1:any,map2:any,indent:string):boolean{
        let new_indent=indent+"    "
        console.log(indent,print_values(map1), print_values(map2))
        if(map1 instanceof Map && map2 instanceof Map){
            let testVal;
            if (map1.size !== map2.size) {
                console.log("NOT EQUAL");
                console.log(map1,map2);
                return false;
            }
            for (let [key, val] of map1) {
                testVal = map2.get(key);
                // in cases of an undefined value, make sure the key
                // actually exists on the object so there are no false positives
                console.log(new_indent,"KEYS:",print_values(key), print_values(key))
                if ((testVal === undefined && !map2.has(key)) || !deepEquals(testVal,val,new_indent)) {
                    return false;
                }
            }
            return true;
        }
        if(Array.isArray(map1) && Array.isArray(map2)){
            let [a,b] = [map1,map2];
            if (a === b) return true;
            if (a == null || b == null) return false;
            if (a.length !== b.length) return false;

            // If you don't care about the order of the elements inside
            // the array, you should sort both arrays here.
            // Please note that calling sort on an array will modify that array.
            // you might want to clone your array first.

            for (var i = 0; i < a.length; ++i) {
                if (!deepEquals(a[i],b[i],new_indent)) {
                    return false;
                }
            }
            return true;

        }
        if(typeof map1 == "object" && typeof map2 == "object"){
            let testVal;
            if (Object.keys(map1).length !==Object.keys(map2).length) {
                console.log("NOT EQUAL KEYS LENGTH");
                console.log(map1,map2);
                return false;
            }
            for (let [key, val] of Object.entries(map1)) {
                testVal = map2[key];
                // in cases of an undefined value, make sure the key
                // actually exists on the object so there are no false positives
                if ((testVal === undefined && !map2.hasOwnProperty(key)) || !deepEquals(testVal,val,new_indent)) {
                    return false;
                }
            }
            return true;
        }
        if(map1!==map2){
            console.log("OTHER NOT EQUAL",typeof map1);
            console.log(map1,map2);
        }
        return map1===map2;
    }

/*    let result2=purify_single_gear_js(gear,20,[0xFFFFFFFF, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])

    console.log(JSON.stringify(result2,replacer,4))*/










    /*function is_bit_set(index,num){
        return !!( num & (0b1<<index) );
    }
    function replacer(key, value) {
        let json_string = (value)=>JSON.stringify(value,replacer,4);
        if(value instanceof Map) {
            return Array.from(value.entries()) // or with spread: value: [...value]
        }
        if( typeof value === 'number'){
            return "0x"+value.toString(16);
        }
        if(typeof value==='bigint'){
            let abilities = []
            for(const i of [...Array(16)].keys()){
                let mask = BigInt((0b1111)<<(i*4))
                let ticket = (value&mask)>>(BigInt(i*4));
                if(ticket==0xfn)break;
                abilities.push(ticket)
            }
            return "["+abilities.join(",")+"]"
        }
        if(typeof value == "object" && value.hasOwnProperty("value") && typeof value["value"]=="number"){
            // return "0b"+value["value"].toString(2);
            return "TicketSet{"+[...(Array(16).keys())].filter((i)=>is_bit_set(i,value["value"])).join(",")+"}"
        }
        else {
            return value;
        }
    }

    function bigintToAbilityArray(value:bigint){
        let abilities = []
        for(const i of [...Array(16)].keys()){
            let mask = BigInt((0b1111)<<(i*4))
            let ticket = (value&mask)>>(BigInt(i*4));
            if(ticket==0xfn)break;
            abilities.push(Number(ticket))
        }
        return abilities
    }

/!*    console.log(send_example_to_js())

    let i=0;
    for(const index of send_example_to_js()){
        console.log(`INDEX:${i++}`)
        console.log(JSON.stringify(index,replacer,4));
    }*!/

    let result = purify_multiple_gear_to_js();

    /!*console.log([...result.entries()].map(([value,v])=>{
        let abilities = []
        for(const i of [...Array(16)].keys()){
            let mask = BigInt((0b1111)<<(i*4))
            let ticket = (value&mask)>>(BigInt(i*4));
            if(ticket==0xfn)break;
            abilities.push(Number(ticket))
        }
        return [abilities,v]
    }).sort(([[a1,b1],_1],[[a2,b2],_2])=>{
        if(a1==a2)return b1-b2
        return a1-a2;
    }))*!/

    result= new Map(
        [...result.entries()].sort(([_a1,_1],[_a2,_2])=>{
            let a1 = bigintToAbilityArray(_a1);
            let a2 = bigintToAbilityArray(_a2);

            if(a1.length!=a2.length)return a1.length!=a2.length

            for(let i in a1){
                if(a1[i]!=a2[i])return a1[i]-a2[i]
            }
            return 0;
        })
    );
    console.log(result.size)



    console.log(JSON.stringify(result,replacer,4));*/


</script>



-->
