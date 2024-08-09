import React, { useState } from 'react';

function Notas() {
     // Definindo os estados para os dois números e o resultado
     const [num1, setNum1] = useState(0);
     const [num2, setNum2] = useState(0);
     const [num3, setNum3] = useState(0);
     const [resultado, setResultado] = useState('');

      // Função para calcular notas
    const calcularNotas = () => {
        setResultado((num1 + num2 + num3) / 3);
    };

    return (
        <div>
            <br></br>
            <h1> Notas </h1>
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
            
            <div>
            <label>
                    Número 3:
                    <input type="number" value={num3} onChange={(e) => setNum3(parseFloat(e.target.value))} />
                </label>
            </div>
            <button onClick={calcularNotas}>
                Calcular
            </button> 
            <p> Resultado: {resultado}</p>
        </div>
    );
}

export default Notas;
