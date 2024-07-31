import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MensajeForm } from '../MensajeForm/MensajeForm'
import MensajeContacto from '../MensajeContacto/MensajeContacto'
import dataMook from '../../../../public/dataMook.json'
import Headermensajes from '../HeaderMensajes/Headermensajes'



const ListaChatMensajes = () => {
    const { autorId } = useParams()
    const conversacion = dataMook.find(conversacion => conversacion.id === Number(autorId))
    const now = new Date();
    const hours = String(now.getHours()) + ":" + String(now.getMinutes())


    if (!conversacion) {
        return <div>No se encontraron mensajes para este autor.</div>
    }

    const ChatMensajes = conversacion.mensajes
    const [mensajesArrayInfo, setMensajesArrayInfo] = useState(ChatMensajes)
    const [longitudMensajes, setLongitudMensajes] = useState(mensajesArrayInfo.length)


    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        const newMessage = {
            author: 'yo',
            text: e.target.newMessage.value,
            estado: '/public/enviado.png' + '',
            day: ' Hoy',
            hour: hours,
            id: longitudMensajes + 1
        }
        setLongitudMensajes(longitudMensajes + 1);
        setMensajesArrayInfo([...mensajesArrayInfo, newMessage])

    }


    if (!conversacion) {
        return <div>No se encontraron mensajes para este autor.</div>
    }


    return (
        <div className='chat-container container'>
            <Headermensajes/>
            {mensajesArrayInfo.map(({ author, day, text, estado, id, hour, isState }) => (
                <MensajeContacto key={id} author={author} day={day} estado={estado} text={text} hour={hour} isState={isState}  />
            ))}
            <MensajeForm handleSubmitNewMessage={handleSubmitNewMessage} />
        </div>
    )
}

export default ListaChatMensajes
