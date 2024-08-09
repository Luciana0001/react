import React, { useState } from 'react';

function PrecoDesconto() {
    // Definindo os estados para o preço, percentual de desconto e o preço final
    const [preco, setPreco] = useState('');
    const [desconto, setDesconto] = useState('');
    const [precoComDesconto, setPrecoComDesconto] = useState('');

    // Função para calcular o preço com o desconto
    const calcularPrecoComDesconto = () => {
        const valorPreco = parseFloat(preco);
        const valorDesconto = parseFloat(desconto);

        if (isNaN(valorPreco) || isNaN(valorDesconto) || valorPreco < 0 || valorDesconto < 0 || valorDesconto > 100) {
            setPrecoComDesconto('Erro: O preço e o percentual de desconto devem ser números válidos. O desconto deve estar entre 0 e 100.');
        } else {
            const descontoDecimal = valorDesconto / 100;
            const valorDesconto = valorPreco * descontoDecimal;
            const resultadoPreco = valorPreco - valorDesconto;
            setPrecoComDesconto(resultadoPreco.toFixed(2)); // Exibe o resultado com 2 casas decimais
        }
    };

    return (
        <div>
            <br />
            <h1>Desconto</h1>
            <div>
                <label>
                    Preço:
                    <input 
                        type="number" 
                        value={preco} 
                        onChange={(e) => setPreco(e.target.value)} 
                        step="0.01" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Percentual de Desconto (%):
                    <input 
                        type="number" 
                        value={desconto} 
                        onChange={(e) => setDesconto(e.target.value)} 
                        step="0.01" 
                        min="0"
                        max="100"
                    />
                </label>
            </div>
            <button onClick={calcularPrecoComDesconto}>
                Calcular Preço com Desconto
            </button> 
            <p> Preço com Desconto: {precoComDesconto}</p>
        </div>
    );
}

export default PrecoDesconto;
