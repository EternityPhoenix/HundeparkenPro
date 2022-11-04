import { onParkLoaded } from "../../scope/utilities";

onParkLoaded(scope => {
    if(!scope.classes.window || !scope.classes.button)
    {
        throw new Error("Missing classes")
    }

    const window = new scope.classes.window(200, 100, 0xefefef, false, true);
    scope.state.sharedUI?.windowContainer.addChild(window);

    const btn = new scope.classes.button("Hide me", 0xf1f1f1, 0x00d8ff, 50, 150);
    btn.on("mousedown", () => {
        btn.destroy();
    });
    btn.x = 25;
    btn.y = 30;
    window.addChild(btn);
});