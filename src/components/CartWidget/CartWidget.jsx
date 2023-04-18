import './CartWidget.scss'
import carrito from '../../assets/img_carrito.png'


export const CartWidget = () => {

    return (
        <div className='container'>
            <img src={carrito} className='carritoIcono'/>
            <span className='carritoTexto'>8</span>
        </div>

    )
}

