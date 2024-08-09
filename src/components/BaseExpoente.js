import React, { useState } from 'react';

function BaseExpoente() {
    // Definindo os estados para a base, expoente e o resultado
    const [base, setBase] = useState(0);
    const [expoente, setExpoente] = useState(0);
    const [resultado, setResultado] = useState('');

    // Função para calcular a base elevada ao expoente
    const calcularPotencia = () => {
        const valorBase = parseFloat(base);
        const valorExpoente = parseFloat(expoente);

        if (isNaN(valorBase) || isNaN(valorExpoente)) {
            setResultado('Erro: Base e expoente devem ser números válidos.');
        } else {
            const resultadoPotencia = Math.pow(valorBase, valorExpoente);
            setResultado(resultadoPotencia.toFixed(2)); 
        }
    };

    return (
        <div>
            <br />
            <h1>Potência</h1>
            <div>
                <label>
                    Base:
                    <input 
                        type="number" 
                        value={base} 
                        onChange={(e) => setBase(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Expoente:
                    <input 
                        type="number" 
                        value={expoente} 
                        onChange={(e) => setExpoente(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <button onClick={calcularPotencia}>
                Calcular Potência
            </button> 
            <p> Resultado: {resultado}</p>
        </div>
    );
}

export default BaseExpoente;
