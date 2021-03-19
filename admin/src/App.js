import { Route, Switch } from "react-router-dom";
import { CreationPage } from "./CreationPage";
import { EditPage } from "./EditPage/EditPage";
import { ListPage } from "./ListPage";
import { LoginPage } from "./LoginPage/LoginPage";



function App() {
  return (
    <Switch>
      <Route exact path="/">
        <>
          <p>Добавить ингридиент:</p>
          <CreationPage />
          <hr />
          <ListPage />
        </>
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/edit">
        <EditPage />
      </Route>
    </Switch>
  );
}

export default App;
