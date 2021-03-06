import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from './../Helper';
import ControlPresupuesto from './ControlPresupuesto';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('¿Cuál es el presupuesto?');
    // console.log(presupuesto);
    let resultado = validarPresupuesto(presupuesto);
    
    if(resultado) {
      //console.log('Válido');
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto,
      })

    } else {
      // console.log('Presupuesto no válido');
      this.obtenerPresupuesto();
    }

  }

  // ***** Agregar un nuevo gasto al state
  agregarGasto = gasto => {
    // ***** Tomar una copia del state actual
    const gastos = { ...this.state.gastos };
    /*
    const { nombreGasto, cantidadGasto } = gasto;
    console.log('Se agregó el gasto ' + gasto);
    console.log(gastos);
    console.log(nombreGasto);
    console.log(cantidadGasto);
    */

    // ***** Agregar al gasto el objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    // console.log(gastos);
    // console.log(gasto);
    this.restarPresupuesto(gasto.cantidadGasto);

    // ***** Ponerlo en state
    this.setState({
      gastos
    })

  }

  // Restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad => {
    // ***** Leer el gasto
    // console.log(typeof cantidad);
    let restar = Number(cantidad);

    // ***** Tomar una copia del state actual
    let restante = this.state.restante;

    // ***** Lo restamos
    restante -= restar;
    console.log(restante);
    restante = String(restante);
    // ***** Agregamos el nuevo state
    this.setState({
      restante,
      //restante: restante,
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
              <Listado
                        gastos={this.state.gastos}
              ></Listado>
              <ControlPresupuesto
                                  presupuesto={this.state.presupuesto}
                                  restante={this.state.restante}
              ></ControlPresupuesto>
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
