import React from 'react'


export const MensajeItem = ({mensaje}) => {
  const { author, text, estado, day, hour, id } = mensaje; // Desestructurar el objeto message
    
  return (
    <div className={`mensaje ${author === 'yo' ? 'mensaje-yo' : 'mensaje-otro'}`}>
      <div className='mensaje-author'>{author}</div>
      {isImage ? <img src={text} alt={author} /> : <div className='mensaje-text'>{text}</div>}
      <div className='mensaje-info'>
      <span className='mensaje-estado'> {estado} </span>
        <span className='mensaje-day'> {} {day}  </span>
        <span className='mensaje-hour'> {hour}</span>
      </div>
    </div>
  )
}
