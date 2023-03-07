import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import PokeApi from "./ejemplos/PokeApi/PokeApi";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
   
        <Navbar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/nosotros" element={ <Nosotros /> } />
          <Route path="/contacto" element={ <Contacto /> } />
          <Route path="/pokemon" element={ <PokeApi />} />
          <Route path="*" element={ <Navigate to="/" /> }/>
          {/* <Route path="*" element={ <Error404 /> }/> */}
        </Routes>

        {/* <Footer />  */}
        
        
    </BrowserRouter>
  );
}

export default App;
