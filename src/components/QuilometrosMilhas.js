import React, { useState } from 'react';

function QuilometrosMilhas() {
    // Definindo os estados para quilômetros e milhas
    const [quilometros, setQuilometros] = useState('');
    const [milhas, setMilhas] = useState('');

    // Função para converter quilômetros para milhas
    const converterParaMilhas = () => {
        const valorQuilometros = parseFloat(quilometros);
        if (isNaN(valorQuilometros) || valorQuilometros < 0) {
            setMilhas('Erro: O valor em quilômetros deve ser um número positivo.');
        } else {
            const resultado = valorQuilometros * 0.621371;
            setMilhas(resultado.toFixed(2)); // Exibe o resultado com 2 casas decimais
        }
    };

    return (
        <div>
            <br />
            <h1>Quilômetros para Milhas</h1>
            <div>
                <label>
                    Quilômetros:
                    <input 
                        type="number" 
                        value={quilometros} 
                        onChange={(e) => setQuilometros(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <button onClick={converterParaMilhas}>
                Converter
            </button> 
            <p> Milhas: {milhas}</p>
        </div>
    );
}

export default QuilometrosMilhas;
