import React from 'react'
// import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"

const NavBar = () => {

    const navLinkClass = (navData) =>
        navData.isActive ? 'btn btn-ghost normal-case text-xl bg-green-300' : 'btn btn-ghost normal-case text-xl'

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink className={navLinkClass} to={'/'}>Mi app</NavLink>
                <NavLink className={navLinkClass} to={'/shop'}>Mi tienda</NavLink>
                <NavLink className={navLinkClass} to={'/serie'}>Serie</NavLink>
            </div>
        </div>
        // <nav className='nav'>
        //     <ul>
        //         <li><a href="#">Inicio</a></li>
        //         <li><a href="#">Productos</a></li>
        //         <li><a href="#">Contacto</a></li>
        //         <li><a href="#"><CartWidget/></a></li>
        //     </ul>
        // </nav>
    )
}

export default NavBar