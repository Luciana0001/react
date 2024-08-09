import React, { useState } from 'react';

function JurosCompostos() {
    // Definindo os estados para o capital, taxa de juros, período e o resultado do montante
    const [capital, setCapital] = useState('');
    const [taxa, setTaxa] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [montante, setMontante] = useState('');

    // Função para calcular o montante com juros compostos
    const calcularJurosCompostos = () => {
        const valorCapital = parseFloat(capital);
        const valorTaxa = parseFloat(taxa) / 100; // Convertemos a taxa para decimal
        const valorPeriodo = parseFloat(periodo);

        // Verifica se os valores são números válidos e se o período é maior que 0
        if (isNaN(valorCapital) || isNaN(valorTaxa) || isNaN(valorPeriodo) || valorCapital < 0 || valorTaxa < 0 || valorPeriodo < 0) {
            setMontante('Erro: Capital, taxa e período devem ser números válidos e maiores que 0.');
            return;
        }

        const resultadoMontante = valorCapital * Math.pow((1 + valorTaxa), valorPeriodo);
        setMontante(resultadoMontante.toFixed(2)); // Exibe o resultado com 2 casas decimais
    };

    return (
        <div>
            <br />
            <h1>Juros Compostos</h1>
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
                    Período (em períodos de capitalização):
                    <input 
                        type="number" 
                        value={periodo} 
                        onChange={(e) => setPeriodo(e.target.value)} 
                        step="0.01" 
                        min="0" 
                    />
                </label>
            </div>
            <button onClick={calcularJurosCompostos}>
                Calcular Montante com Juros Compostos
            </button> 
            <p> Montante: R$ {montante}</p>
        </div>
    );
}

export default JurosCompostos;
