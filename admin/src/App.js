import { CreationPage } from "./CreationPage";
import { ListPage } from "./ListPage";

function App() {
  return (
    <>
      <ListPage />
      <hr />
      <p>Добавить ингридиент:</p>
      <CreationPage />
    </>
  );
}

export default App;
