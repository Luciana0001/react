import React, {useState} from 'react';

function Multiplicar() {
    // Definindo os estados para os dois números e o resultado
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    // função para calcular a divisão
    const calcularMultiplicacao = () =>
    {
        setResultado(num1 / num2);
    };

    return (
        <div>
            <br></br>
            <h1>Multiplicação </h1>
            <div>
                <label>
                    Número 1:
                    <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} />
                </label>
            </div>
            <div>
                <label>
                    Número 2:
                    <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} />
                </label>
            </div>
            <button onClick={calcularMultiplicacao}>
                Calcular
            </button> 
            <p> Resultado: {resultado}</p>
        </div>
    );
}

export default Multiplicar;