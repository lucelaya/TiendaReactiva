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
            {items.length > 0 && (
                <>
                <Button variant="outline-dark" onClick={clear}>
                Vaciar lista de compras
                </Button>
                </>
            )}
        </div>
  )
}

export default Cart