import React from 'react'
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
// import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { useItems } from "./CartContext";
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

function Cart() {
    const { items, clear } = useItems();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const order = {
    //     buyer: { name: 'Maria', phone: 123, email: 'juan@gmail.com' },
    //     items: {...items},
    //     total: 999
    // }

    const orderHandler = (evt) => {
        console.log('Terminando orden..');

        const form = document.getElementById("formCompra")
        if (form.checkValidity() === false) {
            console.log("error en validacion de formulario")
        }else{
            const db = getFirestore()
            const orderCollection = collection(db, 'orders')

            const cantidadItems = document.getElementById("cantidadItems");
            const totalCompra = document.getElementById("totalCompra");
            const fullName = document.getElementById("fullName").value;
            const eMail = document.getElementById("eMail").value;
            const phoneNum = document.getElementById("phoneNum").value;
            console.log(cantidadItems.innerText)
            console.log(totalCompra.innerText)
            console.log(phoneNum,eMail, fullName)
            const order = {
                buyer: { name: fullName, 
                        phone: phoneNum,
                        email: eMail },
                items: {...items},
                cantidadItems: parseInt(cantidadItems.innerText),
                total: parseInt(totalCompra.innerText)
            }

            addDoc(orderCollection, order).then(({ id }) => {
                console.log({ id })
                // debugger
                items.map(d => {

                    // const itemsCollection = collection(db, 'items')
                    // db.collection('items').doc(d.id).update({sold: d.quantity})
                    // itemsCollection.doc(d.id).update({
                    //     "sold": d.quantity})
                    //ACTUALIZAR sold: ITEM
                    console.log(d.id, d.quantity)
                    // debugger
                    return 1
                })
                clear();
            })
            evt.preventDefault();
            evt.stopPropagation();
        }
    }

    const getOrdersHandler = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        getDocs(orderCollection).then(res => {
            let orders=res.docs.map(d => ({ id: d.id, ...d.data() }))
            console.log(orders)

            const ordersContainer = document.getElementById("ordersContainer");

            let elementos="";
            let itemS
            orders.map(item=>{
                if (item.cantidadItems>1) {
                    itemS="Items"
                } else {
                    itemS="Item"
                }
                elementos = elementos + `<h5 class="font-monospace mx-5" style="color:green"><strong><i>${item.id}: <i></strong>$${item.total} (${item.cantidadItems} ${itemS})</h5>`;
                return true
            });
            ordersContainer.innerHTML = elementos;
        })
    }

    const updateHanlder = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        const order = document.getElementById("orderId");
        console.log(order.value)
        // debugger    
        if (order.value) {
            const orderDoc = doc(orderCollection, order.value)//"eupZrzLWAOOiUqmoRFQ7")
            updateDoc(orderDoc, {
                price: 222,
                buyer: { name: 'Carlos', phone: 55555, email: 'carlos@gmail.com' },
            }).then(res => { 
                console.log('res: ' + res) 
            })
        } else {
            console.log('Ingrese identificador de la Orden')
        }
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
                        {/* <Button variant="outline-dark" className='m-5' onClick={orderHandler}>
                            Terminar compra
                        </Button> */}
                        <Button variant="primary" onClick={handleShow}>
                        Terminar Compra
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Finalizar compra</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Formulario cliente
                            <Form id='formCompra'>
                                <Form.Group className="mb-3" controlId="eMail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group md="4" controlId="fullName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" required/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group md="4" controlId="phoneNum">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="text" placeholder="Phone number" required/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check label="Agree to terms and conditions"
                                    feedback="You must agree before submitting." feedbackType="invalid" required/>
                                </Form.Group>
                                <Button type="submit" variant="outline-dark" className='m-5' onClick={orderHandler}>
                                    Comprar
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                        </Modal>

                        <h6 style={{ margin: "1rem" }}>Cantidad Total de Items: <span id="cantidadItems">{items.reduce((acc, c) => acc + c.quantity, 0)}</span></h6>
                        <h6 style={{ margin: "1rem" }}>Total de la Compra: <span id="totalCompra">{items.reduce((acc, c) => acc + c.price * c.quantity, 0)}</span></h6>
                    </>
                )}
            </Container>
            <Container>
                <Button variant="outline-dark" className='m-5' onClick={getOrdersHandler}>
                    ver Ordenes
                </Button>
                <div id="ordersContainer"></div>
                <Button variant="outline-dark" className='m-5' onClick={updateHanlder}>
                    actualizar orden
                </Button>
                <input id="orderId" type="text" placeholder='Orden'/>
            </Container>
        </div>
    )
}

export default Cart