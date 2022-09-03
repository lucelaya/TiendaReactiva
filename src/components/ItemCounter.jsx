import React from 'react'
import { useState } from "react";

const ItemCounter = ({ stock }) => {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        if (stock > counter) {
            setCounter( counter + 1 )
        }
    }
    const handleClick2 = () => {
    counter ? setCounter( counter - 1 )
            : setCounter( counter ) 
    }
    return (
        <>
        <div className='my-5'>
            <strong>Unidades: {counter}</strong>
        </div>
        <button onClick={handleClick2} className='btn my-5'>-</button>
        <button onClick={handleClick} className='btn my-5'>+</button>
        </>
    )
}

export default ItemCounter