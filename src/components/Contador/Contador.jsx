

export const Contador = ({ cantidad, setCantidad, stock, agregar }) => {

    const handleMenos = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleMas = () => {
        setCantidad(cantidad + 1)
    }


    return (
        <div>

            <button onClick={handleMenos} className={"btn btn-danger mx-1"} disabled={cantidad === 1}> - </button>

            <span className="mx-2">{cantidad}</span>

            <button
                onClick={handleMas} className={"btn btn-danger mx-1"} disabled={cantidad === stock}> + </button>

            <br />

            <button onClick={agregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}

