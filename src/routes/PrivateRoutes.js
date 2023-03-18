import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar";
import Nosotros from "../components/Nosotros/Nosotros";
import Contacto from "../components/Contacto/Contacto";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import { Routes, Route, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
            {/* RUTAS PRIVADAS */}
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/nosotros" element={ <Nosotros /> } />
                <Route path="/contacto" element={ <Contacto /> } />
                <Route path="*" element={ <Navigate to="/" /> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes