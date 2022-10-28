import { getScope } from ".";

export function onParkLoaded(callback: (scope: ReturnType<typeof getScope>) => void) {
    const loadedCheck = () => {
        const scope = getScope();
        if (scope.state.currentRoom)
        {
            callback(scope);
        } else {
            setTimeout(() => loadedCheck(), 150);
        }
    };
    loadedCheck();
}