import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <ProductCreationPage />
      </Route>
      <Route path="login"></Route>
    </Switch>
  );
}

export default App;
