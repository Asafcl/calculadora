import "./App.css";
import LogoComponent from './componentes/logo'
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import {evaluate} from 'mathjs'

function App() {
  const [input, setInput] = useState("");

  const insertInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado =()=>{
    if (input){
    setInput(evaluate(input))
    }else{
  alert('ingrese valores')
    }
  }

  return (
    <div className="App">
      <LogoComponent/>
      <div className="cont_calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={insertInput}>1</Boton>
          <Boton manejarClick={insertInput}>2</Boton>
          <Boton manejarClick={insertInput}>3</Boton>
          <Boton manejarClick={insertInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={insertInput}>4</Boton>
          <Boton manejarClick={insertInput}>5</Boton>
          <Boton manejarClick={insertInput}>6</Boton>
          <Boton manejarClick={insertInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={insertInput}>7</Boton>
          <Boton manejarClick={insertInput}>8</Boton>
          <Boton manejarClick={insertInput}>9</Boton>
          <Boton manejarClick={insertInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={insertInput}>0</Boton>
          <Boton manejarClick={insertInput}>.</Boton>
          <Boton manejarClick={insertInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear setInputClear={()=>setInput('')}>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
