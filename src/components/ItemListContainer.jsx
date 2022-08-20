import React from 'react'

const ItemListContainer = ({ greetings }) => {
    return (
        <div className='itemListContainer'>
            {greetings}
            <li>Producto1</li>
            <li>Producto2</li>
            <li>Producto3</li>
            <li>Producto4</li>
            <li>Producto5</li>
        </div>
    )
}

export default ItemListContainer