import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Navbar />

      <ItemListContainer greeting="Hola mundo" />

      <div className="container">
        {/* <button className="btn btn-primary">Click me</button> */}
        <Button variant="success" size="lg">Click me! =) </Button>
      </div>

    </div>
  );
}

export default App;
