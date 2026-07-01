import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PaginaComic } from './components/PaginaComic'
import { Comic } from './components/Comic'
import { Tienda } from './components/Tienda'  
import { HistoriaComic } from './components/HistoriaComic'
import { Capitulos } from './components/Capitulos' // 🚀 1. IMPORTAMOS EL NUEVO COMPONENTE DE REPRODUCCIÓN

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaComic/>} />
        <Route path="/comic" element={<Comic/>} />
        <Route path="/tienda" element={<Tienda/>} />  

        {/* 🚀 2. ESTA ES LA RUTA DE LA HISTORIA */}
        <Route path="/HistoriaComic" element={<HistoriaComic />} />

        {/* 🚀 3. NUEVA RUTA PARA VER LOS VIDEOS DE CADA CAPÍTULO */}
        {/* Cambiamos el path a "/ver-comic" para que coincida exactamente con el navigate() */}
        <Route path="/ver-comic" element={<Capitulos />} />
      </Routes>
    </BrowserRouter>
  )
}