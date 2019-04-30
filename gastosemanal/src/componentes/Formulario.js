import React, { Component } from 'react';

class FormularioGasto extends Component {

    // Refs para los campos del formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGasto = (e) => {

        // Prevenir el default
        e.preventDefault();
        // Crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value
        }
        console.log(gasto);
        // Agregarlo y enviarlo por props
        this.props.agregarGasto(gasto);

        // Resetear el formulario (opcional)
        e.currentTarget.reset();

    }

    render() {
        return (
            <form action="" onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aquí</h2>
                <div className="campo">
                    <label htmlFor="">Nombre Gasto</label>
                    <input ref={this.nombreGasto} type="text" className="u-full-width" placeholder="Ej. Transporte"/>
                </div>
                <div className="campo">
                    <label htmlFor="">Cantidad</label>
                    <input ref={this.cantidadGasto} type="text" className="u-full-width" placeholder="Ej. 300"/>
                </div>

                <input type="submit" className="button-primary u-full-width" value="Agregar"/>
            </form>
        )
    } 
}

export default FormularioGasto; 