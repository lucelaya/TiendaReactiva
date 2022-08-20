import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#"><CartWidget/></a></li>
            </ul>
        </nav>
    )
}

export default NavBar