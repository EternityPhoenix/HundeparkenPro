import { pixiContainer } from "./State";

export class Window implements pixiContainer {
    children: any[];

    constructor(width: number, height: number, color: number, hasCorner: boolean, centralize: boolean){}

    addChild: (child: any) => void;
}

export class Button {
    x: number;
    y: number;
    
    constructor(text: string, color: number, background: number, height: number, width: number){}

    on(event: 'mousedown', callback: () => void){}

    destroy(){}
}