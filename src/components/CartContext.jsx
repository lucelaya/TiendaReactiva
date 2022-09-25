import React from "react";
import { useContext } from "react";
import { useState } from "react";

const CartContext = React.createContext([]);

const useItems = () => {
  return useContext(CartContext);
};

const CartItemsProvider = ({ defaultValue = [], children }) => {
  const [items, setItems] = useState(defaultValue);

  //VALIDA QUE EXISTA UN PRODUCTO EN EL CARRITO
  const isInCart = (item) => {
    // return items.some((b) => b.title === item.title);
    // cuantos existen?
    return items.reduce( (acc, c) => (item.id === c.id) ? acc + c.quantity: acc, 0)
  };

  //AGREGA UN ELEMENTO AL CARRITO
  const addItem = (item,quantity) => {
    console.log(isInCart(item))
    if (isInCart(item)) {
      console.log("El item ya se encontraba cargado");
      // debugger
      if (quantity === 0) {
        removeItem(item)
        console.log("Item eliminado del carrito");
      } else {
        // debugger
        const removeItem = items.filter((s) => s.id !== item.id)
        const newItem = { ...item,quantity};
        setItems([...removeItem, newItem]);
        // debugger
        console.log(JSON.stringify(removeItem))
        console.log(JSON.stringify(items))
        console.log("Item agregado al carrito");
      }
    }else{
      if (quantity !== 0) {
        const newItem = { ...item,quantity};
        setItems([...items, newItem]);
        console.log("Item agregado al carrito");
      }
    }
  };

  //REMUEVE UN PRODUCTO DEL CARRITO
  const removeItem = (item) => {
    const removeItem = items.filter((s) => s.id !== item.id)
    console.log(JSON.stringify(removeItem))
    console.log(JSON.stringify(items))
    return setItems(removeItem)
  };

  //ELIMINA TODOS LOS PRODUCTOS DEL CARRITO
  const clear = () => {
    setItems([]);
  };

  const context = {
    isInCart,
    addItem,
    removeItem,
    clear,
    items,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export { useItems, CartItemsProvider };
