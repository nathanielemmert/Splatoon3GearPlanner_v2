import { createContext } from "svelte";
import type { GearSeedDatabase } from "../types/typesLeanny";

type ReactiveState<T> = {state:T};




let [getContext_userGearDatabase,setContext_userGearDatabase] = createContext<{state:GearSeedDatabase}>();

export {getContext_userGearDatabase, setContext_userGearDatabase};



