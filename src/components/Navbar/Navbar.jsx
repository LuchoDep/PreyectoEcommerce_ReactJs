import './Navbar.scss'
import { CartWidget } from '../CartWidget/CartWidget'



export const Navbar = () => {
    return (

        <header className='header'>
            <div className='container'>
                <img src="../public/logo.jpg" alt="logo" className='logo'/>

                <nav className="navbar">
                    <ul className="navbar_menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Categorías</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    );
}

