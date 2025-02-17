import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Pagina404 from './404'
import "./main.css"
import Saludo from './saludo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/saludo' element={<Saludo />} />
            <Route path='*' element={<Pagina404 />} />
        </Routes>
   </BrowserRouter>
    
)
