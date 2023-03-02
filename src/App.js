import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from "./ejemplos/PokeApi/PokeApi";

function App() {

  return (
    <div>
      <Navbar />

      <PokeApi />

      {/* <ItemListContainer /> */}

    </div>
  );
}

export default App;
