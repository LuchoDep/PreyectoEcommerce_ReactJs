import stockProductos from "../data/stock_productos";

export const llamarStock = () => {
    return new Promise ((resolve, reject) =>  {
        setTimeout(() => {
            resolve(stockProductos)

        }, 1000)
    })
}