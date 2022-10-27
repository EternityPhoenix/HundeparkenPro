import { getScope } from "./scope";

const scope = getScope();
setTimeout(() => alert(scope.state.users.length), 5000);
debugger;