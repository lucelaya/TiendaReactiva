import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import products from './products';

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState({})

    const getItem = (time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let product = products.find( p => p.id === id)
        if (product) {resolve( product );}
        else { reject("Error");} 
      }, time);
    },[]);

    useEffect(() => {
        getItem(500)
          .then((res) => {setProducto(res);})
          .catch((err) => {console.log(err, ": No existe el componente");});
      });

  return (
    <>
    <ItemDetail className="justify-content-center" item={producto} />
    
    </>
  )
}

export default ItemDetailContainer