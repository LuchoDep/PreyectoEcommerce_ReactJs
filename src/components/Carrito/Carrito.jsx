import "../ItemList/ItemList.scss"
import { useContext } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"



export const Carrito = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5 justify-content-between">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-outline-danger">Ir al catálogo</Link>
            </div>
        )
    }

    return (
        <div>
            <h3 className="carrito">¡Este es tu carrito!</h3>
            {cart.map((items) => {

                return <div key={items.id} className="itemCompra">
                    <div>
                        <div className="datosItem1">
                            <img src={items.img} alt={items.id} width="20%" />
                            <Button className="button" id={items.id} onClick={removeItem}>X</Button>
                        </div>
                        <div className="datosItem2">
                            <p>{items.nombre}</p>
                            <p>Cantidad: {items.cantidad}</p>
                        </div>
                        <div className="datosItem3">
                            <p>Precio Unitario ${items.precio}</p>
                            <p>Total = ${items.precio * items.cantidad}</p>
                        </div>

                    </div>
                </div>
            }
            )
            }

            {cart.length !== 0 ? <div>
                <div className="datosCompra">
                    <p>Total de la compra ${totalCompra()}</p>
                </div>
                <div className="d-flex buttons">
                    <button className="btn btn-danger ms-4" onClick={emptyCart} >Vaciar Carrito</button>
                    <Link to={"/"} className="btn btn-primary ms-4">Volver a productos</Link>
                    <Link to={"/checkout"} className="btn btn-success ms-4">Finalizar Compra</Link>
                </div>
            </div> : <div />}


        </div>

    )


}