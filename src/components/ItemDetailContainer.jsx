import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
// import products from './products';

import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState({})

    const getItem = (time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // let product = products.find( p => p.id === id)
        const db = getFirestore()
        const itemRef = doc( db, 'items', id )
        getDoc( itemRef ).then( res => {
          const data = res.data()
          resolve( {id: id,...data} )
        })
        // if (product) {resolve( product );}
        // else { reject("Error");} 
      }, time);
    },[]);

    useEffect(() => {
        getItem(500)
          .then((res) => {setProducto(res);})
          .catch((err) => {console.log(err, ": No existe el componente");});
        },[]);
        // });

  return (
    <>
    <ItemDetail className="justify-content-center" item={producto} />
    
    </>
  )
}

export default ItemDetailContainer