export interface State {
    store: any;
    con?: Connection;
    disableShortcuts: boolean
    disableChat: boolean
    users: any[]
    abilities: {[key: string]: any}
    bitmapFonts: any
    app: any
    keymanager: any
    notifier: any
    abilityData: any
    communication: any
    sounds: any
    shortcuts: any
}

interface Connection {
    hasConnected: boolean;
    sendToServer: (a: any, b: boolean) => void
}