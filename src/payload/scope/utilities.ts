import { getScope } from ".";

export function onParkLoaded(callback: (scope: ReturnType<typeof getScope>) => void) {
    const scope = getScope();
    const loadedCheck = () => {
        if (scope.state.currentRoom)
        {
            callback(scope);
        } else {
            setTimeout(() => loadedCheck(), 150);
        }
    };
    loadedCheck();
}