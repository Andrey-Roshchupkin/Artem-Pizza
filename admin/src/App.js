import { Route, Switch } from "react-router-dom";
import { CreationPage } from "./CreationPage";
import { ListPage } from "./ListPage";
import { LoginPage } from "./LoginPage/LoginPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <>
          <ListPage />
          <hr />
          <p>Добавить ингридиент:</p>
          <CreationPage />
        </>
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
