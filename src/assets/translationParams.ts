import _translationParams from "./leanny-data/language/USen.json"


let translationParams = _translationParams;

export const abilityNameParams = _translationParams["CommonMsg/Gear/GearPowerName"]

// brand names:  "CommonMsg/Gear/GearBrandName"

export const gearNameParams:{[key:string]:string} =
    Object.fromEntries([
        ...Object.entries(_translationParams["CommonMsg/Gear/GearName_Head"]).map(([k,v])=>(["Hed_"+k,v])),
        ...Object.entries(_translationParams["CommonMsg/Gear/GearName_Clothes"]).map(([k,v])=>(["Clt_"+k,v])),
        ...Object.entries(_translationParams["CommonMsg/Gear/GearName_Shoes"]).map(([k,v])=>(["Shs_"+k,v]))

    ])




