import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  // Agregar un nuevo gasto al state
  agregarGasto = gasto => {
    // Tomar una copia del state actual
    const gastos = { ...this.state.gastos };
    const { nombreGasto, cantidadGasto } = gasto;
    console.log('Se agregó el gasto ' + gasto);
    console.log(gastos);
    console.log(nombreGasto);
    console.log(cantidadGasto);

    // Agregar al gasto el objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    console.log(gastos);
    // Ponerlo en state
    this.setState({
      gastos
    })

  }

  render() {
    return (
      <div className="App container">
        <Header
                titulo='Gasto Semanal'
        ></Header>

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                          agregarGasto = {this.agregarGasto}
              ></Formulario>
            </div>
            <div className="one-half column">
            </div>
          </div>
        </div>

        <Imagen></Imagen>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
