import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Index from "./routes/Index"
import Contactos from './routes/Contactos'
import About from './routes/About'

const App = () => {
  return (
    <div className='mx-auto'>
      <nav>
        <a href="/">Inicio</a>
        <a href="/contactos">Contactos</a>
        <a href="/about">Acerca de nosotros</a>
      </nav>
      <Routes>
        <Route path='/' index element={<Index />}/>
        <Route path='/contactos' element={<Contactos />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App