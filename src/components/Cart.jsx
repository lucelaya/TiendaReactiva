import React from 'react'
import Container from "react-bootstrap/esm/Container";
import { Button } from "react-bootstrap";
import ItemList from "./ItemList";
import { useItems } from "./CartContext";

function Cart() {
    const {items,clear} = useItems();
    return (
    <div>
            <h1>Carrito</h1>
            {items.length ? (
                <Container>
                <ItemList items={items} />
                </Container>
            ) : (
                <h3 style={{ margin: "5rem" }}>No hay compras...</h3>
            )}
            <Container>
            {items.length > 0 && (
                <>
                <Button variant="outline-dark" className='m-5' onClick={clear}>
                VACIAR CARRITO
                </Button>
                </>
            )}
            {items.reduce( (acc, c) => acc + c.quantity, 0)> 0 && (
                <><h6 style={{ margin: "1rem" }}>Cantidad Total de Items: {items.reduce( (acc, c) => acc + c.quantity, 0)}</h6></>
            )}
            {items.reduce( (acc, c) => acc + c.price * c.quantity, 0)> 0 && (
                <><h6 style={{ margin: "1rem" }}>Total de la Compra: {items.reduce( (acc, c) => acc + c.price * c.quantity, 0)}</h6></>
            )}
            </Container>
        </div>
    )
}

export default Cart