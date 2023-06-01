import './CartWidget.scss'
import carrito from '../../assets/img_carrito.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/carrito">
            <div className='container'>
                <img src={carrito} className='carritoIcono' />
                <span className='carritoTexto'>{totalCantidad()}</span>
            </div>
        </Link>
    )
}

