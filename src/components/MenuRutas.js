import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li style={{display: "inline", padding: "15px"}}><a href='/'>Home</a></li>
            <li style={{display: "inline", padding: "15px"}}><a href='/cine'>Cine</a></li>
            <li style={{display: "inline", padding: "15px"}}><a href='/musica'>Música</a></li>
            <li style={{display: "inline", padding: "15px"}}><a href='/form'>Form Básico</a></li>
            <li style={{display: "inline", padding: "15px"}}><a href='/collatz'>Collatz</a></li>
            <li style={{display: "inline", padding: "15px"}}><a href='/tabla-multiplicar'>Tabla de multiplicar</a></li>
            <li style={{display: "inline", padding: "15px"}}><a href='/tabla-multiplicar2'>TablaMultiplicar2</a></li>
            <li style={{display: "inline", padding: "15px"}}><a href='/seleccion-multiple-forms'>Seleccion Mutiple Forms</a></li>
        </ul>
      </div>
    )
  }
}
