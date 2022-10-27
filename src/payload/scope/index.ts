// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {State as StateType} from "./types/State"
import { ServerCaller } from "./types/ServerCaller";
import { mappings } from "./mappings";

export function getScope () {
    const s = State as any;
    const scope: {state: StateType, control: ServerCaller} = {state: s}

    if (mappings.serverFunctions) {
        const serverFunction = eval(mappings.serverFunctions);
        scope.serverCaller = serverFunction;
    }

    return scope;
}