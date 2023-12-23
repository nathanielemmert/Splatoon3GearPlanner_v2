import { writable } from "svelte/store";
import type { GearSeedDatabase } from "../types/typesLeanny";

let userGearDatabase:GearSeedDatabase;
// @ts-ignore
let gearDbStore = writable(userGearDatabase);


export {gearDbStore}