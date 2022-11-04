export interface ServerCaller {
    loadShop: (id: number) => void
    Fart: () => void;
    RequestVB: () => void;
    goToUser: (id: number) => void;   
    bet: (data: {credits: number, probability: number}[], multiBet: boolean) => void;
    walk: (x: number, y: number) => void;
    giveItem: (toid: number) => void;
    warp: (roomid: number) => void;
}