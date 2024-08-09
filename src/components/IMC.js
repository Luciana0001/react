import React, { useState } from 'react';

function IMC() {
    // Definindo os estados para peso, altura e o resultado do IMC
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');

    // Função para calcular o IMC
    const calcularIMC = () => {
        const valorPeso = parseFloat(peso);
        const valorAltura = parseFloat(altura);
        
        if (isNaN(valorPeso) || isNaN(valorAltura) || valorAltura <= 0) {
            setImc('Erro: Peso e altura devem ser números válidos e altura deve ser maior que 0.');
        } else {
            const resultadoIMC = valorPeso / (valorAltura * valorAltura);
            setImc(resultadoIMC.toFixed(2)); // Exibe o resultado com 2 casas decimais
        }
    };

    return (
        <div>
            <br />
            <h1>Calculadora de IMC</h1>
            <div>
                <label>
                    Peso (kg):
                    <input 
                        type="number" 
                        value={peso} 
                        onChange={(e) => setPeso(e.target.value)} 
                        step="0.1" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Altura (m):
                    <input 
                        type="number" 
                        value={altura} 
                        onChange={(e) => setAltura(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <button onClick={calcularIMC}>
                Calcular IMC
            </button> 
            <p> IMC: {imc}</p>
        </div>
    );
}

export default IMC;
