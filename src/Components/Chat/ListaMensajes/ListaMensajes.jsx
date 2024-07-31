import React from 'react';
import { Link } from 'react-router-dom';
import ListaChatMensajes from '../ListaChatMensajes/ListaChatMensajes';

// Componente MensajeItem que recibe las props correctamente
const MensajeItem = ({ message, ultimatum }) => {
  const isImage = /\.(jpeg|jpg|gif|png|mp4)$/.test(ultimatum)     

  const { id, chatAuthor, imagenContacto } = message; // Desestructurar el objeto message
 
  
  
  return (
    <>
      <Link to={'/' + id} className='chat-item'>
        <span className='imagen-contactos'>
          <img src={imagenContacto} alt={chatAuthor} />
        </span>
        <div className='mensaje-content'>
          <span className='mensaje-author'>{chatAuthor}</span>
          <p className='ultimo-mensaje'>{isImage ? 'Foto' : ultimatum}</p>
        </div>
      </Link>
      <div className='ult-hr-chat'>
      </div>
    </>

);
};

// Componente ListaMensajes que pasa el prop correctamente y asigna la key

export const ListaChats = ({ arrayMook }) => {
  return (
    <div className='chat-container'>
          {arrayMook.map((chat) => {
            // const ultimoMensaje = chat.mensajes[chat.mensajes.length - 1]
            const ultimoMensaje = chat.mensajes[chat.mensajes.length - 1]
            return(
              <div  key={chat.id} className='contacto-item'>
                <MensajeItem  message={chat} ultimatum={ultimoMensaje.text} />
              </div>
            )
          })}
        </div>
  );
}



