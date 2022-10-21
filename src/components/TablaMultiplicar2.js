import React, { Component } from 'react'

function getRandom() {
    return parseInt(Math.random() * 10) + 1;
}

function rellenarSelect() {
    var auxAleatorio = [];

    for (let i = 0; i < 10; i++) {
        auxAleatorio.push(getRandom())
    }

    return auxAleatorio;
}

export default class TablaMultiplicar2 extends Component {

    selectnumero = React.createRef();

    state = {
        aleatorios: rellenarSelect(),
        listaOperacion: [],
        listaResultado: []
    }

    tablaMultiplicar = (event) => {
        event.preventDefault();
        var numero = this.selectnumero.current.value;
        var auxOperacion = [];
        var auxResultado = [];

        for (let i = 1; i <= 10; i++) {
            auxOperacion.push(numero + "x" + i)
            auxResultado.push(numero * i);
        }

        this.setState({
            listaOperacion: auxOperacion,
            listaResultado: auxResultado
        })
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>TablaMultiplicar2</h1>
                <form>
                    <select ref={this.selectnumero} onChange={this.tablaMultiplicar}>
                        {
                            this.state.aleatorios.map((numero, index) => {
                                return (<option value={numero} key={index}>{numero}</option>)
                            })
                        }
                    </select>
                </form><br />
                <table style={{margin: "auto"}}>
                    <thead>
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listaOperacion.map((operacion, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{operacion}</td>
                                        <td>{this.state.listaResultado.at(index)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
