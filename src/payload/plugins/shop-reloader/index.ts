import { onParkLoaded } from "../../scope/utilities";
import { type getScope } from "../../scope";

let doReload = false;
let showCount;
function reloadShop(scope: ReturnType<typeof getScope>)
{
    if(!doReload)
    {
        return;
    }
    if(!scope.state.shop)
    {
        setTimeout(() => reloadShop(scope), 50);
        return;
    }
    const shopid = scope.state.shop?.id;
    const items = scope.state.shop?.itemContainer.children.length;
    if(showCount === undefined)
    {
        showCount = items;
    }
    
    if(showCount === items)
    {
        setTimeout(() => {
            if(scope.state.con)
            {
                scope.state.con.sendToServer({"cmd":"shop-load", shopid}, true);
            }
            setTimeout(() => reloadShop(scope), 50);
        }, 100);
    }else{
        doReload = false;
    }
}


onParkLoaded(scope => {
    if(!scope.classes.window || !scope.classes.button)
    {
        throw new Error("Missing classes")
    }
    debugger;

    const window = new scope.classes.window(200, 100, 0xefefef, false, true);
    scope.state.sharedUI?.windowContainer.addChild(window);

    const btn = new scope.classes.button("Start", 0xf1f1f1, 0x00d8ff, 50, 150);
    btn.on("mousedown", () => {
        doReload = !doReload;
        showCount = undefined;
        if(doReload)
        {
            reloadShop(scope);
        }
    });
    btn.x = 25;
    btn.y = 30;
    window.addChild(btn);
});