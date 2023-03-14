import './Navbar.scss'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = ({black}) => {

    return (
        <header className="header" style={{backgroundColor: black ? '#000000' : '#600027c5'}}>
            <div className="header__container">
                {/* <h1 className="header__logo">LOGO</h1> */}
                {/* <img src='./imgs/logo.png' alt="logo" className='header__logo'/> */}
                <Link to="/">
                    <img src={logo} alt="logo" className='header__logo'/>
                </Link>

                <nav className="navbar">
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/productos/perfumeria" className="navbar__link">Perfumeria</Link>
                    <Link to="/productos/panaderia" className="navbar__link">Panaderia</Link>
                    <Link to="/productos/verduleria" className="navbar__link">Verduleria</Link>
                    <Link to="/productos/carniceria" className="navbar__link">Carniceria</Link>
                    <Link to="/productos/limpieza" className="navbar__link">Limpieza</Link>
                    <Link to="/nosotros" className="navbar__link">Nosotros</Link>
                    <Link to="/contacto" className="navbar__link">Contacto</Link>
                </nav>
    
                <CartWidget />
            </div>
        </header>
    )
}

