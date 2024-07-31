import React, { useState } from 'react'
import { IoCameraOutline, IoEllipsisVerticalSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass } from "react-icons/fa6";


const Header = (
  {  whatsapp, setWhatsapp, nuevoEstadoFiltro }
) => {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);



  const handleClick = () => {
    setMostrarBusqueda(prevState => !prevState);
  }

  const handleChangeValue = (e) => {
    setWhatsapp(e.target.value);
  }

  return (
    <div className='header'>
    <h3 className='header-title'>Novedades</h3>
    <div className='header-icons'>
      <IoCameraOutline className='icon  camara-icon' />
    <FaMagnifyingGlass className='magnifyGlass' onClick={handleClick} />
          <IoEllipsisVerticalSharp className='icon' type="button" data-bs-toggle="dropdown" aria-expanded="false"/>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/configuración/perfil">Bueno!! Esto  </Link></li>
          <li><a className="dropdown-item" href="#">Te lleva a... </a></li>
          <li><a className="dropdown-item" href="#">LA NADA!!</a></li>
        </ul>

    <span>
    {/* NO SE COMO SOLUCIONAR ESTO QUE SI EL RESULTADO DE LA BUSQUEDA NO EXISTE, EXPLOTA TODO */}
    {mostrarBusqueda && ( 
      <input
            className='input-search'
            placeholder='buscar contactos...'
            onChange={handleChangeValue}
            value={whatsapp}
      />
    )}
      
      </span>    
    </div>
  </div>
  )
}

export default Header
