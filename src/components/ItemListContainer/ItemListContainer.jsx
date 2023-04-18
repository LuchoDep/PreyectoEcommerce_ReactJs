import './ItemListContainer.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ItemListConainer = ({ nombre, precio, imagen }) => {

    return (
        <div className='contenedorCards'>
            <Card className="row prodCards" >
                <Card.Img variant="left" src={imagen} className='prodCardImg' />
                <Card.Body className="align-items-center flex-grow-1">
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text className='flex-fill'>{precio}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div >
    );
}
