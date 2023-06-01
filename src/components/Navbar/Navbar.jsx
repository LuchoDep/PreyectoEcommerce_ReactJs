import './Navbar.scss'
import { CartWidget } from '../CartWidget/CartWidget'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header'>
            <div className='container justify-content-between'>
                <img src="/logo.jpg" alt="logo" className='logo' />
                <nav className="navbar">
                    <ul className="navbar_menu">
                        <li className="navbar_item">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="navbar_item navbar_item--dropdown">
                            <a href="#" onClick={toggleMenu}>
                                Categorías
                            </a>
                            {isOpen && (
                                <ul className="navbar_dropdown">
                                    <li>
                                        <Link to="/categorias/gpu">Placas de video</Link>
                                    </li>
                                    <li>
                                        <Link to="/categorias/motherboard">Motherboards</Link>
                                    </li>
                                    <li>
                                        <Link to="/categorias/procesador">Procesadores</Link>
                                    </li>
                                    <li>
                                        <Link to="/categorias/mram">RAM</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    );
};
