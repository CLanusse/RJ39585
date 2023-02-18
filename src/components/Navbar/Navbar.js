import './Navbar.scss'
import logo from './logo.png'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <h1 className="header__logo">LOGO</h1> */}
                {/* <img src='./imgs/logo.png' alt="logo" className='header__logo'/> */}
                <img src={logo} alt="logo" className='header__logo'/>

                <nav className="navbar">
                    <a href="#" className="navbar__link">Enlace 1</a>
                    <a href="#" className="navbar__link">Enlace 2</a>
                    <a href="#" className="navbar__link">Enlace 3</a>
                </nav>

                {/* <CartWidget /> */}
            </div>
        </header>
    )
}

