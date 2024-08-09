import React, { useState } from 'react';

function Retangulo() {
    // Definindo os estados para largura, altura e o resultado
    const [largura, setLargura] = useState(0);
    const [altura, setAltura] = useState(0);
    const [area, setArea] = useState(0);

    // Função para calcular a área do retângulo
    const calcularArea = () => {
        // Verifica os numeros (no caso de serem maiores que 0)
        if (largura <= 0 || altura <= 0) {
            setArea('Erro: Largura e altura devem ser maiores que 0.');
        } else {
            const resultado = largura * altura;
            setArea(resultado);
        }
    };

    return (
        <div>
            <br />
            <h1> Área do Retângulo</h1>
            <div>
                <label>
                    Largura:
                    <input 
                        type="number" 
                        value={largura} 
                        onChange={(e) => setLargura(parseFloat(e.target.value) || 0)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    Altura:
                    <input 
                        type="number" 
                        value={altura} 
                        onChange={(e) => setAltura(parseFloat(e.target.value) || 0)} 
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

export default Retangulo;
