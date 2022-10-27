import { onParkLoaded } from "./scope/utilities";

onParkLoaded(scope => {
    alert("Users in room " + scope.state.users.length)
});