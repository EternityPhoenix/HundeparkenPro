export interface State {
    store: unknown;
    disableShortcuts: boolean
    disableChat: boolean
    users: User[]
    abilities: {[key: string]: unknown}
    bitmapFonts: unknown
    app: unknown
    keymanager: unknown
    notifier: unknown
    abilityData: unknown
    communication: Communication
    sounds: unknown
    shortcuts: unknown

    // after load
    con?: Connection;
    currentRoom?: CurrentRoom;
    sharedUI?: SharedUI;

}

interface Connection {
    hasConnected: boolean;
    sendToServer: (a: unknown, b: boolean) => void
}

type CommunicationFunc = () => void;
interface Communication {
    _events: {[k: string]: CommunicationFunc};
    _eventCount: number;
    on: (a: unknown, b: CommunicationFunc, c: boolean) => unknown;
}

export interface pixiContainer {
    children: any[];
    addChild: (child: any) => void;
}

interface SharedUI {
    background: unknown;
    peeDisplay: unknown;
    poopDisplay: unknown;
    infoDisplay: unknown;
    soundSettings: unknown;
    optionsWindow: unknown;
    secondaryInventoryWindow: unknown;
    userDisplay: unknown;
    ownUserDisplay: unknown;
    warpMap: unknown;
    mainContainer: pixiContainer;
    backgroundContainer: pixiContainer;
    uiContainer: pixiContainer;
    sleepContainer: pixiContainer;
    windowContainer: pixiContainer;
    eventContainer: pixiContainer;
    loadscreenContainer: pixiContainer;
    infoBar: unknown;
    controlButtons: unknown;
    inventory: unknown;
    exitButton: unknown;
}

interface CurrentRoom {
    _events: unknown;
    _eventsCount: unknown;
    visible: unknown;
    parent: unknown;
    filters: unknown;
    _destroyed: unknown;
    children: unknown[];
    _groundArrow: unknown;
    _tiles: unknown;
    _backgroundItemsContainer: unknown;
    _itemsContainer: unknown;
    _tilesContainer: unknown;
    _chatContainer: unknown;
    _title: unknown;
    hand: unknown;
    disableNinja: unknown;
    id: unknown;
    onExit: unknown;
    onEnter: unknown;
    _rawData: unknown;
    _arrows: unknown;
}


interface User {
    _events: unknown;
    alpha: unknown;
    visible: unknown;
    parent: unknown;
    filters: unknown;
    _bounds: unknown;
    children: unknown[];
    jumpHeight: unknown;
    activeEffects: unknown;
    userSprite: unknown;
    friends: unknown;
    emojislot: unknown;
    effects: unknown;
    mateContainer: unknown;
    _color: unknown;
    _shadowcolor: unknown;
    _chatcolor: unknown;
    walkSpeed: unknown;
    sleepStyle: unknown;
    mobile: unknown;
    jointype: unknown;
    birthday: unknown;
    shouldDigWag: unknown;
    active: unknown;
    heightOffset: unknown;
    playSounds: unknown;
    isNPC: unknown;
    cc: unknown;
    backgroundEffects: unknown;
    frontEffects: unknown;
    skills: unknown;
    emojiReplacementOrder: unknown;
    replacedEmojis: unknown;
    id: unknown;
    hidden: unknown;
    username: unknown;
    dogname: unknown;
    credits: unknown;
    abilityExecuting: unknown;
    level: unknown;
    karma: unknown;
    inventory: unknown;
    secondaryInventory: unknown;
    inventorysize: unknown;
    moderated: unknown;
    moderator: unknown;
    admin: unknown;
    sleeping: unknown;
    bombed: unknown;
    muted: unknown;
    age: unknown;
    joined: unknown;
    kobbel: unknown;
    badge: unknown;
    ownedAbilities: unknown;
    enabledAbilities: unknown;
    sprites: unknown;
    customSprites: unknown;
    ignoreNextSniff: unknown;
    roomID: unknown;
    inX: unknown;
    inY: unknown;
    language: unknown;
    _chatBubble: unknown;
    wear: unknown;
    move: unknown;
    Direction: unknown;
    activeSprite: unknown;
    $zIndex: unknown;
}