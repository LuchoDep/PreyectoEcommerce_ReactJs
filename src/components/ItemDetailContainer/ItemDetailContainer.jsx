import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/config";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { prodId } = useParams()

    useEffect(() => {

        const docRef = doc(database, "productos", prodId)

        getDoc(docRef)
            .then((doc) => {
                const _prod = {
                    id: doc.id,
                    ...doc.data()
                }

                setProducto(_prod)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [prodId]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container my-4">

            <ItemDetail prod={producto}/>

        </div>
    )
}
