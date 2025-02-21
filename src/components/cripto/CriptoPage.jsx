import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import dayjs from "dayjs";

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const params = useParams()

    const [cripto, setCripto] = useState({})
    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then(data =>
                setCripto(data.data.data))
            .catch(e => console.error(e))
    }, [])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then(data =>
                setHistory(data.data.data))
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            <h1>Soy una criptomoneda { params.id }</h1>
            <div className="info">
                <ul>
                    <li><span className="label">Nombre: </span>{ cripto.name }</li>
                    <li><span className="label">Símbolo: </span>{ cripto.symbol }</li>
                </ul>
            </div>

            <h2>Historial</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>

                </thead>
                <tbody>
                    { history.map(({ date, priceUsd, time }) => {
                        console.log("Fecha recibida:", date); // 🔍 Verifica qué formato tiene la fecha
                        const formattedDate = dayjs(date).isValid()
                            ? dayjs(date).format("DD/MM/YYYY")
                            : "Fecha inválida";

                        return (
                            <tr key={ time }>
                                <td>{ formattedDate }</td>
                                <td>{ parseFloat(priceUsd).toFixed(4) }</td>
                            </tr>
                        );
                    }) }
                </tbody>





            </table>
        </>
    )
}

export default CriptoPage
