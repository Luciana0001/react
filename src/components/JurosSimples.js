import React, { useState } from 'react';

function JurosSimples() {
    // Definindo os estados para o capital, taxa de juros, período e o resultado do juros simples
    const [capital, setCapital] = useState('');
    const [taxa, setTaxa] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [jurosSimples, setJurosSimples] = useState('');

    // Função para calcular o juros simples
    const calcularJurosSimples = () => {
        const valorCapital = parseFloat(capital);
        const valorTaxa = parseFloat(taxa) / 100; // Convertemos a taxa para decimal
        const valorPeriodo = parseFloat(periodo);

        if (isNaN(valorCapital) || isNaN(valorTaxa) || isNaN(valorPeriodo) || valorCapital < 0 || valorTaxa < 0 || valorPeriodo < 0) {
            setJurosSimples('Erro: Capital, taxa e período devem ser números válidos e maiores que 0.');
            return;
        }

        const resultadoJuros = valorCapital * valorTaxa * valorPeriodo;
        setJurosSimples(resultadoJuros.toFixed(2)); // Exibe o resultado com 2 casas decimais
    };

    return (
        <div>
            <br />
            <h1>Juros Simples</h1>
            <div>
                <label>
                    Capital (R$):
                    <input 
                        type="number" 
                        value={capital} 
                        onChange={(e) => setCapital(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Taxa de Juros (% ao período):
                    <input 
                        type="number" 
                        value={taxa} 
                        onChange={(e) => setTaxa(e.target.value)} 
                        step="0.01" 
                        min="0" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Período:
                    <input 
                        type="number" 
                        value={periodo} 
                        onChange={(e) => setPeriodo(e.target.value)} 
                        step="0.01" 
                        min="0" 
                    />
                </label>
            </div>
            <button onClick={calcularJurosSimples}>
                Calcular Juros Simples
            </button> 
            <p> Juros Simples: R$ {jurosSimples}</p>
        </div>
    );
}

export default JurosSimples;
