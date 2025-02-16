import { useEffect, useState } from "react"




function App() {


  const [criptos, setCriptos] = useState() //El [] es porque no peude empezar vacio

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
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
        {criptos.map(({ name, priceUsd }) => (
          <li>Nombre: {name} Precio:{priceUsd}</li>
        ))
        }
      </ol>

    </>
  )
}

export default App
