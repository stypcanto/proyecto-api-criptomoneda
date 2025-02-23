import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import "./CriptoPage.css";

const CriptoPage = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const params = useParams();

    const [cripto, setCripto] = useState({});
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then(data => setCripto(data.data.data))
            .catch(e => console.error(e));

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then(data => setHistory(data.data.data))
            .catch(e => console.error(e));
    }, [params.id]); // 🔹 Se agrega params.id como dependencia para evitar problemas

    // 🔹 Se define la función que faltaba
    const parseFloatNumber = (num, decimals = 3) => {
        return num ? parseFloat(num).toFixed(decimals) : "N/A"; // Evita errores con `null` o `undefined`
    };

    return (
        <>
            <div className="cripto-page-container">
                <div className="info">
                    <div className="main-info">
                        <span> Ranking: {cripto.rank} </span>
                        <h1> {cripto.name} </h1>
                        <span className="symbol"> {cripto.symbol} </span>
                    </div>

                    <div className="details">
                        <ul>
                            <li className="detail">
                                <span className="label">Precio:</span>
                                <span> {parseFloatNumber(cripto.priceUsd, 3)} </span>
                            </li>
                            <li className="detail">
                                <span className="label">Max Supply:</span>
                                <span> {parseFloatNumber(cripto.maxSupply, 3)} </span>
                            </li>
                            <li className="detail">
                                <span className="label">Market Cap (USD):</span>
                                <span> {parseFloatNumber(cripto.marketCapUsd, 3)} </span> {/* 🔹 Corregido */}
                            </li>
                            <li className="detail">
                                <span className="label">Volumen (USD - 24hrs.):</span>
                                <span> {parseFloatNumber(cripto.volumeUsd24Hr, 3)} </span>
                            </li>
                            <li className="detail">
                                <span className="label">Variación (24hrs.):</span>
                                <span> {parseFloatNumber(cripto.changePercent24Hr, 3)} </span>
                            </li>
                            <li className="detail">
                                <span className="label">VWAP 24hrs.:</span>
                                <span> {parseFloatNumber(cripto.vwap24Hr, 3)} </span>
                            </li>
                        </ul>
                    </div>
                </div>
           

            <div className="history">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(({ date, priceUsd, time }) => {
                            console.log("Fecha recibida:", date); 
                            const formattedDate = dayjs(date).isValid()
                                ? dayjs(date).format("DD/MM/YYYY")
                                : "Fecha inválida";

                            return (
                                <tr key={time}>
                                    <td>{formattedDate}</td>
                                    <td>{parseFloat(priceUsd).toFixed(4)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    );
};

export default CriptoPage;
