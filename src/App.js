import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import Contador from "./ejemplos/Contador/Contador";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />

      <button onClick={handleShow} className="btn btn-danger">Mostrar contador</button>

      {
        show ? <Contador /> : null
      }

      <ItemListContainer greeting="Hola mundo" />

    </div>
  );
}

export default App;
