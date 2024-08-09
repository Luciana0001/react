import React, { useState } from 'react';

function Circulo() {
    // Definindo os estados para o raio e a área
    const [raio, setRaio] = useState(0);
    const [area, setArea] = useState(0);

    // Função para calcular a área do círculo
    const calcularArea = () => {
        const valorRaio = parseFloat(raio);
        if (isNaN(valorRaio) || valorRaio <= 0) {
            setArea('Erro: O raio deve ser um número positivo.');
        } else {
            const resultado = Math.PI * Math.pow(valorRaio, 2);
            setArea(resultado.toFixed(2)); 
        }
    };

    return (
        <div>
            <br />
            <h1>Círculo</h1>
            <div>
                <label>
                    Raio:
                    <input 
                        type="number" 
                        value={raio} 
                        onChange={(e) => setRaio(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <button onClick={calcularArea}>
                Calcular Área
            </button> 
            <p> Área: {area}</p>
        </div>
    );
}

export default Circulo;
