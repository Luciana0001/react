import React, { useState } from 'react';

function DistanciaTempo() {
    // Definindo os estados para a distância, tempo e a velocidade média
    const [distancia, setDistancia] = useState('');
    const [tempo, setTempo] = useState('');
    const [velocidade, setVelocidade] = useState('');

    // Função para calcular a velocidade média
    const calcularVelocidade = () => {
        const valorDistancia = parseFloat(distancia);
        const valorTempo = parseFloat(tempo);

        // Verifica se os valores são números válidos e se o tempo é maior que 0
        if (isNaN(valorDistancia) || isNaN(valorTempo) || valorTempo <= 0) {
            setVelocidade('Erro: Distância e tempo devem ser números válidos e o tempo deve ser maior que 0.');
            return;
        }

        // Calcula a velocidade média
        const resultadoVelocidade = valorDistancia / valorTempo;
        setVelocidade(resultadoVelocidade.toFixed(2)); // Exibe o resultado com 2 casas decimais
    };

    return (
        <div>
            <br />
            <h1>Calculadora de Velocidade Média</h1>
            <div>
                <label>
                    Distância (em km):
                    <input 
                        type="number" 
                        value={distancia} 
                        onChange={(e) => setDistancia(e.target.value)} 
                        step="0.01" 
                        min="0" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Tempo (em horas):
                    <input 
                        type="number" 
                        value={tempo} 
                        onChange={(e) => setTempo(e.target.value)} 
                        step="0.01" 
                        min="0" 
                    />
                </label>
            </div>
            <button onClick={calcularVelocidade}>
                Calcular Velocidade Média
            </button>
            <p> Velocidade Média: {velocidade} km/h</p>
        </div>
    );
}

export default DistanciaTempo;
