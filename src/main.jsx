import React from "react";
import ReactDOM from "react-dom/client";
import Cuadricula from "./components/Cuadricula";
import Pagina404 from "./components/404";
import "./main.css";
import Saludo from "./components/saludo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
                 <Route  index  element={<Cuadricula />}/>    
                 <Route path='saludo'element={<Saludo />}/>
              
        </Route>
        <Route path='*' element={<Pagina404 />}/>
      </Routes>
    </BrowserRouter>
  
);
