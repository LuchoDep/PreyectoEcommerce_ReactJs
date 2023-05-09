import { useState } from "react"



export const Contador = () => {
    const [cantidad, setCantidad] = useState(1)

    const handleMenos = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleMas = () => {
        setCantidad (cantidad + 1)
    }


    return (
        <div>
            <button className="btn btn-outline-danger  my-2" onClick={handleMenos}>-</button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-outline-danger  my-2" onClick={handleMas}>+</button>
        </div>
    )
}