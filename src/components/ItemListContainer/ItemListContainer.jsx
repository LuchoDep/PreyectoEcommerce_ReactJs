import './ItemListContainer.scss';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { llamarStock } from '../../utils/llamarStock';
import { Link, useParams } from 'react-router-dom';


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categId } = useParams()
    // console.log(categId)

    useEffect(() => {

        llamarStock()
            .then((res) => {
                if(!categId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((el) => el.categoria === categId))
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categId])

    return (

        <div className='contenedor col m-3'>

            {productos.map((prod) => (
                <div className='row contenedorCards' key={prod.id}>
                    <Card className="row prodCards" >
                        <Card.Img variant="left" src={prod.img} className='image-fluid prodCardImg flex-fill' />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title >{prod.nombre}</Card.Title>
                            <Card.Text className='flex-fill'>{prod.precio}</Card.Text>
                            <Link to={`/producto/${prod.id}`}  className="btn btn-danger">Detalle</Link>
                        </Card.Body>
                    </Card>
                </div >
            ))}
        </div>

    );
}
