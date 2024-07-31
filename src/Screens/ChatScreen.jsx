import React, { useEffect, useState } from 'react'
import { ChatHeaderInfo, ListaChats, MensajeForm } from '../Components/Chat'
import Navbar from '../Components/Navbar/Navbar'
import '../Components/Chat/Mensaje/mensaje.css'
import { obtenerDataMook } from '../Components/Fetching/dataMookFetching'


export const ChatScreen = () => {

    /*CONSIGNA:
    Pasar los mensajes a la lista de mensajes, dicha lista por cada mensaje deberá crear un componente mensaje y ese componente 
    recibirá cada objeto de mensaje
     */
    // const now = new Date();
    // const hours = String(now.getHours()) + ":" + String(now.getMinutes())
    // const longitudMensajes = mensajesArrayInfo.length;
    // console.log(longitudMensajes)

    const [listaChats, setListaChats] = useState([])
    const [buscarContactos, setBuscarContactos] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    useEffect(
        () => {
            setTimeout(
                () => {
                    obtenerDataMook()
                        .then(
                            (chats) => {
                                if (buscarContactos) {
                                    const nuevoChat = chats.filter(
                                        chat =>
                                            chat.chatAuthor.toLowerCase().includes(buscarContactos.toLowerCase())
                                    )
                                    setListaChats(nuevoChat)
                                }
                                else {
                                    setListaChats(chats)
                                }
                                setIsLoading(false)
                            }
                        )
                },
                500
            )

        },
        [buscarContactos]
    )



    const handleChangeValue = (e) => {
        setBuscarContactos(e.target.value)
    }



    return (
        <div className="conversaciones-container container">
            <ChatHeaderInfo />
            <input className='buscar-contactos-input'
                placeholder='buscar contactos...'
                onChange={handleChangeValue}
                value={buscarContactos}
            />
            {isLoading
                ?
                (() => {
                    let loadingElements = [];
                    for (let i = 0; i < 9; i++) {
                        loadingElements.push(
                            
                                <div key={i} className='contacto-item'>
                                    <span className='imagen-contactos'>
                                        <img src='' className='card-img-top' />
                                    </span>
                                    <div className='mensaje-content'>
                                        <h5 className='placeholder-glow' ><span className='mensaje-author card-text placeholder col-4'></span></h5>
                                        <p className='ultimo-mensaje placeholder col-7 placeholder-glow'></p>
                                    </div>
                                </div>                           
                            
                        );
                    }
                    return loadingElements;
                })()
                : <ListaChats arrayMook={listaChats} />
            }
            <Navbar />
        </div>
    )
}
