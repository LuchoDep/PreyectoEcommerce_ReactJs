import { llamarStock } from "../../utils/llamarStock"
import { useEffect, useState, useParams } from "react"




export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {prodId} = useParams

    useEffect(() => {
        setLoading(true)

        llamarStock()
            .then((stock) => setItem(stock.find((prod) => prod.id === Number(prodId))))
            .catch(err => console.log(err))
    }, [])

    return (

        <div>
            
        </div>

    )

}