import { useEffect, useState } from "react"




function App() {

const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState([]) //El [] es porque no peude empezar vacio

  useEffect(() => {
    fetch(`${API_URL}assets`)
      // fecth y catch es una promesa
      .then((resp) => resp.json()) //La respuesta que me ha llegado debe correr en el tipo JSON
        .then((data) => {
          //console.log(data)) //La data que me ha llegado debe ser impresa en la consola
          setCriptos(data.data)
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
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}> Nombre: {name} Precio:{priceUsd}</li>
        ))
        }
      </ol>

    </>
  )
}

export default App
