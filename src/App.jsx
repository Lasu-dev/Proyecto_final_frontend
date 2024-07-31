import React from "react"
import { ChatScreen } from "./Screens"
import { Route, Routes } from "react-router-dom"
import Comunidades from "./ComponentesNavbar/Comunidades/Comunidades"
import Llamadas from "./ComponentesNavbar/Llamadas/Llamadas"
import ListaChatMensajes from "./Components/Chat/ListaChatMensajes/ListaChatMensajes"
import "./Components/Chat/Mensaje/mensaje.css"
import NovedadesScreen from "./Screens/NovedadesScreen"




function App() {

  return (
    <Routes>
      <Route path="/" element={<ChatScreen/>}/>
      <Route path="/:autorId" element={<ListaChatMensajes/>}/>
      <Route path="/Novedades" element={<NovedadesScreen/>}/>
      <Route path="/Llamadas" element={<Llamadas/>}/>
      <Route path="/Comunidades" element={<Comunidades/>}/>
    </Routes>
    
  )
}

export default App
