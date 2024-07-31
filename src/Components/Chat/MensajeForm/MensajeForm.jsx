import React from 'react'
import { IoArrowForwardCircleOutline, IoSend  } from "react-icons/io5";
import './mensajeForm.css'

export const MensajeForm = ({ handleSubmitNewMessage }) => {
  return (
    <div className='form-send-message container'>

      <form className='form-new-message' onSubmit={handleSubmitNewMessage}>

        <input type="text" name='newMessage' id="newMessage" placeholder='Escribe un mensaje...' />
        <button className='btn-send-message' type='submit'><IoSend /></button>

      </form>
    </div>
  );
};