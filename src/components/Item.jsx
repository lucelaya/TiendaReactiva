import { Card } from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({item}) {
//Estructura item: {id, title, price, pictureUrl}

return(
    <Col>
        <Card className="text-center py-4" style={{ width: '18rem' }}>
            <Card.Img style={{width: '12rem'}} variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <h6>
                        Precio Unitario: $ {Number.parseFloat(item.price).toFixed(2)}
                    </h6>
                    {item.quantity > 0 && (
                    <>
                        <h6>
                            Cantidad: {parseFloat(item.quantity)}
                        </h6>
                        <h6>
                            Precio: $ {Number.parseFloat(item.price*item.quantity).toFixed(2)}
                        </h6>
                    </>
                    )}
                </Card.Text>
                <Link to={`/item/${item.id}`} key={item.id}>
                    <Button variant="outline-dark" className="mt-2">Ver detalle de producto</Button>
                </Link>
            </Card.Body>
        </Card>
    </Col>
)}

export default Item;