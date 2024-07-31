import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './novedades.css'
import Header from '../Header/Header'
import { obtenerEstadoMook } from '../../Fetching/estadoMookFetching'
import { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import ListaEstados from './ListaEstados'

const Novedades = () => {
  const [EstadosList, setEstadosList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [buscarEstados, setBuscarEstados] = useState('')
  const [verEstado, setVerEstado] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const estados = await obtenerEstadoMook()
        if (buscarEstados) {
          const nuevoEstado = estados.filter(
            estado => estado.autor.toLowerCase().includes(buscarEstados.toLowerCase())
          )
          setEstadosList(nuevoEstado)
        } else {
          setEstadosList(estados)
        }
        setIsLoading(false)
      }, 500)
    }
    
    fetchData()
  }, [buscarEstados])

  const handleOnClick = (estado, description) => {
    setVerEstado(
      <div className="estado">
        <span onClick={() => setVerEstado(null)} className='cerrar'>
          <FaChevronLeft />
        </span>
        <div className="state-content">
          <img className='image-estado' src={estado} alt={description} />
          <p>{description}</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='container'>
          <Header whatsapp={buscarEstados} setWhatsapp={setBuscarEstados} />
          <div className='container row mi-estado'>
            <span className='imagen-contactos'>
              <img src='?' />
            </span>
            <div className='mensaje-content'>
              <span className='placeholder col-4'> </span>
              <p className='placeholder col-7'></p>
            </div>
          </div>
    </div>
    )
  }


  const estadoMarge = EstadosList[0] 

  return (
    <div className='container'>
      {/* {estadoMarge ? ( */}
        <>
          <Header whatsapp={buscarEstados} setWhatsapp={setBuscarEstados}  />
          {console.log(buscarEstados)}
          <div className='container row mi-estado'>
            <span className='imagen-contactos'>
              <img src={estadoMarge.estado} onClick={() => handleOnClick(estadoMarge.estado, estadoMarge.description, estadoMarge.hora)} />
            </span>
            <div className='mensaje-content'>
              <span className='mensaje-author'> {estadoMarge.description} </span>
              <p className='ultimo-mensaje'>{estadoMarge.hora}</p>
            </div>
            </div>
        
        </>
      {/* ) : ( */}
        {/* <div>
          <Header whatsapp={buscarEstados} setWhatsapp={setBuscarEstados} />
          <div className='container row mi-estado'>
            <span className='imagen-contactos'>
              <img src={estadoMarge.estado} onClick={() => handleOnClick(estadoMarge.estado, estadoMarge.description, estadoMarge.hora)} />
            </span>
            <div className='mensaje-content'></div>
            <span className='mensaje-author'> {estadoMarge.description} </span>
            <p className='ultimo-mensaje'>{estadoMarge.hora}</p>
          </div>
          </div> */}
      {/* )} */}
      <br />
      <hr />
      <h6>Recientes</h6>
      <ListaEstados estados={EstadosList} />
      <Navbar />
      {verEstado}
    </div>
  )
}

export default Novedades
