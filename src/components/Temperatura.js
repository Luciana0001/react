import React, { useState } from 'react';

function Temperatura() {
    // Definindo os estados para a temperatura em Celsius e o resultado em Fahrenheit
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    // Função para converter Celsius para Fahrenheit
    const converterParaFahrenheit = () => {
        const valorCelsius = parseFloat(celsius);
        if (isNaN(valorCelsius)) {
            setFahrenheit('Erro: Insira um número válido.');
        } else {
            const valorFahrenheit = (valorCelsius * 9/5) + 32;
            setFahrenheit(valorFahrenheit.toFixed(2)); 
        }
    };

    return (
        <div>
            <br/>
            <h1>Temperatura</h1>
            <div>
                <label>
                    Temperatura em Celsius:
                    <input 
                        type="number" 
                        value={celsius} 
                        onChange={(e) => setCelsius(e.target.value)} 
                    />
                </label>
            </div>
            <button onClick={converterParaFahrenheit}>
                Converter
            </button> 
            <p> Temperatura em Fahrenheit: {fahrenheit}</p>
        </div>
    );
}

export default Temperatura;
