import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiGroupOutline } from "react-icons/ti";
import { BsTelephone, BsChatSquareDots } from "react-icons/bs";
const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
          <div className='nav-item'>
            <BsChatSquareDots /> 
            <NavLink  to={'/'}>Chats</NavLink>
          </div>  
          <div className='nav-item'>
          <img className='active' style={{color:'black', width:'15px'}} src='/whatsapp-status.png' alt="Status" /> 
            <NavLink to={'/Novedades'}>Novedades</NavLink>
          </div>
          <div className='nav-item'>
            <TiGroupOutline />
            <NavLink to={'/Comunidades'} > Comunidades</NavLink>
          </div>
          <div className='nav-item'>
            <BsTelephone /> 
            <NavLink to={'/Llamadas'}> Llamadas</NavLink>
          </div>
        </nav>
        
    </header>
  )
}

export default Navbar