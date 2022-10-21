import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    numero = React.createRef();

    state = {
        lista: []
    }

    tablaMultiplicar = (event) => {
        event.preventDefault();
        var numero = parseInt(this.numero.current.value);
        var aux = [];
        
        for (let i = 1; i <= 10; i++) {
            aux.push(numero * i)           
        }
        console.log(aux)
        this.setState({
            lista: aux
        })
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>
                <form onSubmit={this.tablaMultiplicar}>
                    <label>Introduzca número</label><br/>
                    <input type="text" ref={this.numero}/>
                    <button>Calcular</button>
                </form>
                <ul>
                    {
                        this.state.lista.map((numero, index) => {                          
                            return (<li key={index}>{numero}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
