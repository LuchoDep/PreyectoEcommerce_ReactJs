import './ItemDetail.scss';
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Contador } from "../Contador/Contador"
import { stockUtil } from '../../utils/stockUtil';

export const ItemDetail = ({ prod }) => {
    const { agregarAlCarrito, EnCarrito } = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...prod,
            cantidad
        }

        agregarAlCarrito(newItem)
    }



    return (

        <div className="contenedor_Detail m-5" key={prod.id}>
            <div>
                <h2 className="titulo_Detail">{prod.nombre}</h2>
                <img src={prod.img} alt={prod.name} className="imagen_Detail" />
            </div>
            <div className="desc_Detail">
                <p>{prod.descripcion}</p>
                <strong>${prod.precio}</strong>


                <div className="botones_Detail">
                    {
                        EnCarrito(prod.id)
                            ? <Link className="btn" to="/carrito">Finalizar</Link>
                            : <Contador
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                stock={prod.cantidad}
                                agregar={handleAgregar}
                            />
                    }
                </div>
            </div>
        </div>
    )
}


