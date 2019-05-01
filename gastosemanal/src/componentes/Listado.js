import React, { Component } from 'react';
import Gasto from './Gasto';

class Listado extends Component {
    render() {
        return(
            <div className="gastos-realizados">
                {/* console.log(this.props.gastos) */}
                <h2>Listado</h2>
                {Object.keys(this.props.gastos).map(key => (
                    // console.log(key)
                    <Gasto
                            key={key}
                            gasto={this.props.gastos[key]}
                    ></Gasto>
                ))}

            </div>
        )
    }
}

export default Listado; 