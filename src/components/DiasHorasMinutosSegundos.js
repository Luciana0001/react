import React, { useState } from 'react';

function DiasHorasMinutosSegundos() {
    // Definindo os estados para os dias inseridos e os resultados da conversão
    const [dias, setDias] = useState('');
    const [horas, setHoras] = useState('');
    const [minutos, setMinutos] = useState('');
    const [segundos, setSegundos] = useState('');

    // Função para converter dias para horas, minutos e segundos
    const converterDias = () => {
        const valorDias = parseFloat(dias);

        // Verifica se o valor é um número válido e não negativo
        if (isNaN(valorDias) || valorDias < 0) {
            setHoras('');
            setMinutos('');
            setSegundos('');
            return;
        }

        // Calcula horas, minutos e segundos
        const resultadoHoras = valorDias * 24;
        const resultadoMinutos = resultadoHoras * 60;
        const resultadoSegundos = resultadoMinutos * 60;

        // Atualiza os estados com os resultados da conversão
        setHoras(resultadoHoras.toFixed(0)); // Sem casas decimais
        setMinutos(resultadoMinutos.toFixed(0)); // Sem casas decimais
        setSegundos(resultadoSegundos.toFixed(0)); // Sem casas decimais
    };

    return (
        <div>
            <br />
            <h1>Conversor de Dias</h1>
            <div>
                <label>
                    Dias:
                    <input 
                        type="number" 
                        value={dias} 
                        onChange={(e) => setDias(e.target.value)} 
                        step="0.01" 
                        min="0" 
                    />
                </label>
            </div>
            <button onClick={converterDias}>
                Converter
            </button>
            <div>
                <p>Horas: {horas}</p>
                <p>Minutos: {minutos}</p>
                <p>Segundos: {segundos}</p>
            </div>
        </div>
    );
}

export default DiasHorasMinutosSegundos;
