import logo from './logo.svg';
import React from 'react';
import './App.css';

function Helloworld(props) {
    return (
      <div id="hello">
        {props.texto}
      </div>
    )  
}

function App() {
  return(
    <div className="App-header">
      <h2>Probando un saludo.......</h2>
      <Helloworld texto="Nombre: Juan"/>
      <Helloworld texto="Apellido: Telis"/>
      <Helloworld texto="Edad: 22"/>
    </div>
  )
}
  




export default App;
