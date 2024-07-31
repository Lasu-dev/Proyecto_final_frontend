import React from 'react'
import { Link, useParams } from 'react-router-dom'
import dataMook from '/public/dataMook.json'
import { BiVideo } from "react-icons/bi"
import { BsTelephone, } from "react-icons/bs"
import { IoEllipsisVerticalSharp } from 'react-icons/io5'
import { FaArrowLeft } from "react-icons/fa";

const Headermensajes = () => {
    const { autorId } = useParams()
    const conversacion = dataMook.find(conversacion => conversacion.id === Number(autorId))



    return (

        <header className='header-conversacion'>
            <div className='img-ultimaconexion'>
            <Link  to='/'><FaArrowLeft style={{color:"white"}} className='icon' /></Link>
                <span className='imagen-contactos' >
                
                    <img src={conversacion.imagenContacto} alt={conversacion.chatAuthor} />
                </span>
                <div>
                    <h5> {conversacion.chatAuthor}</h5>
                    <h6>{conversacion.ultimaConexion}</h6>
                </div>
            </div>
            <span className='iconos'>
                <BiVideo className='icon' />
                <BsTelephone className='icon'/>
                <IoEllipsisVerticalSharp className='icon' />
            </span>
        </header>

    )
}

export default Headermensajes