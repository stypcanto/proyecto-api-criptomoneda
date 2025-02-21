import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
        <h1>Hola, bienvendio a EDmarket</h1>
        <p>Conoce las 100 cripto más usadas</p>
        <Link to="/criptomonedas">Ver Criptomonedas</Link>

    </>
  )
}

export default Home
