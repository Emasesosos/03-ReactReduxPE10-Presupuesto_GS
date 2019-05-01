import React, { Component } from 'react';
import { revisarPresupuesto } from './../Helper';
import PropTypes from 'prop-types';

class Restante extends Component {
    render(){
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;
        const clase = revisarPresupuesto(presupuesto, restante);
        // console.log(clase);
        return(
            <div className={clase}>
                Restante: $ {this.props.restante}
            </div>
        )
    }
}

Restante.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired,
}

export default Restante;  