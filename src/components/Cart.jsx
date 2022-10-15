import React from 'react'
import Container from "react-bootstrap/esm/Container";
import { Button } from "react-bootstrap";
import ItemList from "./ItemList";
import { useItems } from "./CartContext";
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

function Cart() {
    const { items, clear } = useItems();

    const order = {
        buyer: { name: 'Maria', phone: 123, email: 'juan@gmail.com' },
        items: {...items},
        total: 700
    }

    const orderHandler = () => {
        console.log('Terminando orden..');

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order).then(({ id }) => {
            console.log({ id });
            clear();
        })
    }

    const getOrdersHandler = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        getDocs(orderCollection).then(res => {
            console.log(
                res.docs.map(d => ({ id: d.id, ...d.data() }))
            );
        })
    }

    const updateHanlder = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        const orderDoc = doc(orderCollection, "eupZrzLWAOOiUqmoRFQ7")
        updateDoc(orderDoc, {
            price: 222,
            buyer: { name: 'Carlos', phone: 55555, email: 'carlos@gmail.com' },
        }).then(res => { console.log('res: ' + res) })
    }

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
                        <Button variant="outline-dark" className='m-5' onClick={orderHandler}>
                            Terminar compra
                        </Button>
                        <h6 style={{ margin: "1rem" }}>Cantidad Total de Items: {items.reduce((acc, c) => acc + c.quantity, 0)}</h6>
                        <h6 style={{ margin: "1rem" }}>Total de la Compra: {items.reduce((acc, c) => acc + c.price * c.quantity, 0)}</h6>
                    </>
                )}
            </Container>
            <Button variant="outline-dark" className='m-5' onClick={getOrdersHandler}>
                ver Ordenes
            </Button>
            <Button variant="outline-dark" className='m-5' onClick={updateHanlder}>
                actualizar orden 'eupZrzLWAOOiUqmoRFQ7'
            </Button>
        </div>
    )
}

export default Cart