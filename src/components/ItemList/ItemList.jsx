import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './ItemList.scss';
import { stockUtil } from "../../utils/stockUtil";


export const ItemList = ({ items }) => {


    return (
        <div className="contenedor m-2">
            {items.map((prod) => (
                <div className='contenedorCards' key={prod.id}>
                    <Card className="row prodCards" >
                        <Card.Img variant="left" src={prod.img} className='image-fluid prodCardImg flex-fill' />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title >{prod.nombre}</Card.Title>
                            <Card.Text className='flex-fill'>${prod.precio} /n {prod.cantidad}</Card.Text>
                            <Link to={`/producto/${prod.id}`} className="btn btn-danger">Detalle</Link>

                        </Card.Body>
                    </Card>
                </div >
            ))}
        </div>
    )
}