import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../../firebase/config';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categId } = useParams()

    useEffect(() => {

        const productosRef = collection(database, "productos")
        const q = categId
            ? query(productosRef, where("categoria", "==", categId))
            : productosRef


        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })

                setProductos(docs)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [categId])



    return (

        <div className='contenedor my-5 mx-5'>

            <ItemList items={productos} />

        </div>

    );
}
