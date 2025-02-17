import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Pagina404 from "./components/404";
import "./main.css";
import Saludo from "./components/saludo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Menu />
      {/* Hago con Menu, esta es su posicion para que funciones el Link, permite tener una navegacion sin que la pagina recargue */}
      <Routes>
        <Route
          path='/'
          element={<App />}
        />
        <Route
          path='/saludo'
          element={<Saludo />}
        />
        <Route
          path='*'
          element={<Pagina404 />}
        />
      </Routes>
    </BrowserRouter>
  </>
);
