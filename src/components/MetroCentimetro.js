import React, { useState } from 'react';

function MetroCentimetro() {
    // Definindo os estados para os metros e os centímetros
    const [metros, setMetros] = useState('');
    const [centimetros, setCentimetros] = useState('');

    // Função para converter metros para centímetros
    const converterParaCentimetros = () => {
        const valorMetros = parseFloat(metros);
        if (isNaN(valorMetros) || valorMetros < 0) {
            setCentimetros('Erro: O valor em metros deve ser um número positivo.');
        } else {
            const resultado = valorMetros * 100;
            setCentimetros(resultado.toFixed(2)); // Exibe o resultado com 2 casas decimais
        }
    };

    return (
        <div>
            <br />
            <h1>Metros para Centímetros</h1>
            <div>
                <label>
                    Metros:
                    <input 
                        type="number" 
                        value={metros} 
                        onChange={(e) => setMetros(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <button onClick={converterParaCentimetros}>
                Converter
            </button> 
            <p> Centímetros: {centimetros}</p>
        </div>
    );
}

export default MetroCentimetro;
