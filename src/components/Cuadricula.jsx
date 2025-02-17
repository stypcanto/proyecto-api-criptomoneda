import { useEffect, useState } from "react"
import axios from "axios"
import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"


function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState([]) //El [] es porque no peude empezar vacio

  //axios hace ya conversion de respuesta a JSON, con axios se reemplaza a fecth
  useEffect(() => {
    axios.get(`${API_URL}assets`)
      // fecth y catch es una promesa
      // .then((resp) => resp.json()) //La respuesta que me ha llegado debe correr en el tipo JSON
      .then((data) => {
        console.log(data) //La data que me ha llegado debe ser impresa en la consola
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La petición no se pudo completar")
      })
  }, [])

  if (!criptos) return <>
    <span>Cargando ...</span>
  </>

  return (
    <>
      <div className="app-container">
       
        <h1>Lista de Criptomonedas</h1>
        <div className="cripto-container">
          {criptos.map(({ id, name, priceUsd, symbol,changePercent24Hr}) => (
            <Cripto 
            key={id} 
            name={name} 
            priceUsd={priceUsd} 
            symbol={symbol} 
            changePercent24Hr={changePercent24Hr} />
           ))
          }
        </div>
      </div>



    </>
  )
}

export default Cuadricula
