import React, { Component } from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';
import PropTypes from 'prop-types';

class ControlPresupuesto extends Component {
    render() {
        return(
            <div>
                <React.Fragment>
                    <Presupuesto
                                    presupuesto={this.props.presupuesto}
                    ></Presupuesto>
                    <Restante
                                presupuesto={this.props.presupuesto}
                                restante={this.props.restante}
                    ></Restante>
                </React.Fragment>
            </div>
        )
    }
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired,
}

export default ControlPresupuesto;