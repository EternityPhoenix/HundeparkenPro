// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {State as StateType} from "./types/State"
import { ServerCaller } from "./types/ServerCaller";
import { mappings } from "./mappings";
import { Window, Button } from "./types/Interface";

function getButton(sharedUI?: StateType['sharedUI']): typeof Button | undefined
{
    return sharedUI?.optionsWindow.children.find(d => d.__proto__.constructor.name === 'Button')?.__proto__.constructor
}

function getWindow(sharedUI?: StateType['sharedUI']): typeof Window | undefined
{
    return sharedUI?.secondaryInventoryWindow ? Object.getPrototypeOf(sharedUI.secondaryInventoryWindow).__proto__.constructor : undefined;
}

export function getScope () {
    const s = State as any;

    const classes = {
        window: getWindow(s.sharedUI),
        button: getButton(s.sharedUI),
    };
    const scope: {state: StateType, control: ServerCaller, classes: typeof classes} = {state: s, classes}

    if (mappings.serverFunctions) {
        const serverFunction = eval(mappings.serverFunctions);
        scope.serverCaller = serverFunction;
    }

    return scope;
}