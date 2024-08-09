import Soma from "./components/Soma"
import Subtrair from "./components/Subtrair"
import Dividir from "./components/Dividir"
import Notas from "./components/Notas"
import Temperatura from "./components/Temperatura"
import Retangulo from "./components/Retangulo"
import Circulo from "./components/Circulo"
import BaseExpoente from "./components/BaseExpoente"
import MetroCentimetro from "./components/MetroCentimetro"
import QuilometrosMilhas from "./components/QuilometrosMilhas"
import IMC from "./components/IMC"
import PrecoDesconto from "./components/PrecoDesconto"
import JurosSimples from "./components/JurosSimples"
import JurosSimples from "./components/JurosCompostos"
import DiasHorasMinutosSegundos from "./components/DiasHorasMinutosSegundos"
import DistantaciaTempo from "./components/DistanciaTempo"

import './App.css';

function App() {
  return (
    <div>
      <Soma/>
      <Subtrair/>
      <Dividir/>
      <Notas/>
      <Temperatura/>
      <Retangulo/>
      <Circulo/>
      <BaseExpoente/>
      <MetroCentimetro/>
      <QuilometrosMilhas/>
      <IMC/>
      <PrecoDesconto/>
      <JurosSimples/>
      <JurosCompostos/>
      <DiasHorasMinutosSegundos/>
      <DistantaciaTempo/>

    </div>
  );
}

export default App;
