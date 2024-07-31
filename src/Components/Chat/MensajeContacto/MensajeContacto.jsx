import React from 'react'

const MensajeContacto = ({ author, day, estado, text, id, hour, isState }) => {
    const isImage = /\.(jpeg|jpg|gif|png)$/.test(text)
    const isVideo = /\.(mp4)$/.test(text)



    return (
        <>
            {isState ? (
                <div key={id} className='respuesta-estado'>
                    <h6>Ha respondido tu estado</h6>
                    <img className='img-miestado' src="/public/LisaChicle1.png" alt="" />
                    <div className='mensaje-info'>
                        {isImage ? (
                            <div className='gifs-e-imagenes'>
                                <img className='gifs-e-imagenes' src={text} alt={author} />
                            </div>
                        ) : isVideo ? (
                            <video src={text} className="object-fit-contain" loop autoPlay></video>
                        ) : (

                            <div className='msj-respuesta-estado'><h6 style={{ color: "black" }}>{text}</h6></div>
                        )}

                        <span className='mensaje-hour'> {hour}</span>
                    </div>
                </div>
            )
                : (
                    <div key={id} className={`mensaje ${author === 'yo' ? 'mensaje-yo' : 'mensaje-otro'}`}>
                        {isImage ? (
                            <div className='gifs-e-imagenes'>
                                <img className='gifs-e-imagenes' src={text} alt={author} />
                            </div>
                        ) : isVideo ? (
                            <video src={text} className="object-fit-contain" loop autoPlay></video>
                        ) : (
                            <div className='mensaje-text'>{text}</div>
                        )}
                        <div className='mensaje-info'>
                            <span className='mensaje-day'> {day} </span>
                            <span className='mensaje-hour'> {hour}</span>
                            {estado ? <img src={estado} className='mensaje-estado' /> : ' '}
                        </div>
                    </div>
                )}
        </>
    )

}

export default MensajeContacto