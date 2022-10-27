// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {State as StateType} from "./types/State"

export function getScope()
{
    const s = State as any;
    const scope: {state: StateType} = {state: s}

    return scope;
}