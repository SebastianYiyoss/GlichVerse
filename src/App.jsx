import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PaginaComic } from './components/PaginaComic.jsx'
import { Comic } from './components/Comic.jsx'
import { Tienda } from './components/Tienda.jsx'  
import { HistoriaComic } from './components/HistoriaComic.jsx'
import { Capitulos } from './components/Capitulos.jsx' // 🚀 1. IMPORTAMOS EL NUEVO COMPONENTE DE REPRODUCCIÓN

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaComic/>} />
        <Route path="./components/Comic.jsx" element={<Comic/>} />
        <Route path="./components/Tienda.jsx" element={<Tienda/>} />  

        {/* 🚀 2. ESTA ES LA RUTA DE LA HISTORIA */}
        <Route path="/HistoriaComic" element={<HistoriaComic />} />

        {/* 🚀 3. NUEVA RUTA PARA VER LOS VIDEOS DE CADA CAPÍTULO */}
        {/* Cambiamos el path a "/ver-comic" para que coincida exactamente con el navigate() */}
        <Route path="/ver-comic" element={<Capitulos />} />
      </Routes>
    </BrowserRouter>
  )
}