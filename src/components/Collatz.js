import React, { Component } from 'react'

export default class Collatz extends Component {
  numero = React.createRef();

  state = {
    lista: []
  }

  mostrarLista = (event) => {
    event.preventDefault();
    this.state.lista.splice(0, this.state.lista.length);
    this.setState({
      lista: this.state.lista
    })

    var resultado = parseInt(this.numero.current.value);

    while (true) {
      if (resultado % 2 == 0) {
        resultado = resultado / 2;
        if (resultado == 1) {
          this.setNumero(resultado);
          break;
        }else{
          this.setNumero(resultado);
        }
      } else {
        resultado = (resultado * 3) + 1;
        this.setNumero(resultado);
      }
    }
  }

  setNumero = (numero) => {
    this.state.lista.push(numero)
    this.setState({
      lista: this.state.lista
    })
  }


  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
        <form onSubmit={this.mostrarLista}>
          <label>Introduce un número</label>
          <input type="text" ref={this.numero} /><br />
          <button>Mostrar secuencia</button>
        </form>
        <ul>
          {
            this.state.lista.length > 0 &&
            this.state.lista.map((object, index) => {
              return (<li key={index}>{object}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}
