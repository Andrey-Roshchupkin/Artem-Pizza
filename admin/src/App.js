import { Route, Switch } from "react-router-dom";
import { CreationPage } from "./CreationPage";
import { EditPage } from "./EditPage/EditPage";
import { ListPage } from "./ListPage";
import { LoginPage } from "./LoginPage/LoginPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <ListPage />
      </Route>
      <Route exact path="/create">
        <CreationPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/edit/:id">
        <EditPage />
      </Route>
    </Switch>
  );
}

export default App;
