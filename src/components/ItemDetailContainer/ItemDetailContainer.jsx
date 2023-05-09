import { llamarStock } from "../../utils/llamarStock"
import { Contador } from "../Contador/Contador";
import './ItemDetailContainer.scss';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { prodId } = useParams()
    // console.log(prodId)

    useEffect(() => {
        llamarStock()
            .then((stock) => {
                if (prodId) {
                    setProducto(stock.filter((prod) => prod.id === Number(prodId)));
                } else {
                    setProducto(stock);
                }
            })
            .catch((err) => console.log(err));
    }, [prodId]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            {producto.map((prod) => (

                <div className="contenedor_Detail m-5" key={prod.id}>
                    <div>
                        <h2 className="titulo_Detail">{prod.nombre}</h2>
                        <img src={prod.img} alt={prod.name} className="imagen_Detail" />
                    </div>
                    <div className="desc_Detail">
                        <p>{prod.descripcion}</p>
                        <strong>${prod.precio}</strong>
                    </div>
                    <div className="botones_Detail">
                        <Contador />
                        <br />
                        <button className="btn btn-danger">Añadir al carrito</button>
                    </div>
                </div>
            ))}

        </div>

    )
}
