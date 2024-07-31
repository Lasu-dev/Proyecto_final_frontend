import React from 'react'
import { IoCameraOutline, IoEllipsisVerticalSharp } from "react-icons/io5";
import './header.css'
import { Link } from 'react-router-dom';



export const ChatHeaderInfo = () => {
  return (
    <div className='header'>
      <h2 className='header-title'>WhatsUpp</h2>
      <div className='header-icons'>
        <IoCameraOutline className='icon' />
            <IoEllipsisVerticalSharp className='icon' type="button" data-bs-toggle="dropdown" aria-expanded="false"/>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/configuración/perfil">Zarasa</Link></li>
            <li><a className="dropdown-item" href="#">Zarasasa sasa </a></li>
            <li><a className="dropdown-item" href="#">Más Za rasa</a></li>
          </ul>
      </div>
    </div>
  )
}
