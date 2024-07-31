import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import './estado.css'


const ListaEstados = ({ estados }) => {
  const [verEstado, setVerEstado] = useState(false)

  const handleOnClick = (estado) => {
    setVerEstado(
      <div className="estado">
        <span onClick={() => setVerEstado(false)} className='cerrar'>
          <FaChevronLeft />
        </span>
        <div className="state-content">
          
            <img className='image-estado' src={estado.estado} alt={estado.description} />
          
            <h3>{estado.autor}</h3>
            <p>{estado.description}</p>
        </div>
      </div>
    )

    setTimeout(() => {
      setVerEstado(false)
    }, 5000)
  }

  return (
    <div>
      {verEstado}
      {estados.map((estado, index) => {
        const IsThatMe = estado.autor === 'yo'
        return !IsThatMe ? (
          <div className="data-contacto-estado" key={index}>
            <span className='imagen-contactos'>
            <form onClick={() => handleOnClick(estado)}>
              <img className='img-estado' src={estado.estado} alt={estado.description} />
            </form>
            </span>
            <div className="msj-autor-info">
            <h6>{estado.autor}</h6>
            <p className='msj-hora'>{estado.hora}</p>
            </div>
          </div>
        ) : null
      })}
    </div>
  )
}

export default ListaEstados
