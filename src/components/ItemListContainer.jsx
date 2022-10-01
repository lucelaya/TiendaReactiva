import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Container from "react-bootstrap/esm/Container";
// import products from "./products";
import { useParams } from "react-router-dom";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const getProducts = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    getDocs( itemCollection ).then( snapshot => {
      setItems( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
    })
  }

  const getProductsByCategory = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    const q = query(itemCollection, where('category', '==', category) )
    getDocs( q ).then( snapshot => {
      setItems( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
    })
  }

  useEffect(() => {
    category ? getProductsByCategory() : getProducts();
  },[category]);
  return (
    <Container>
      <ItemList items={items} />
    </Container>
  );
};
export default ItemListContainer;


