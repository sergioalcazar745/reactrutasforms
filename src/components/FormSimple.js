import React, { Component } from 'react'

export default class FormSimple extends Component {

    cajanombre = React.createRef();
    cajaedad = React.createRef();

    recibirDatosForm = (event) => {
        event.preventDefault();
        this.setState({
            user: this.cajanombre.current.value,
            edad: this.cajaedad.current.value
        })
    }

    state = {
        user: null,
        edad: null
    }

    render() {
        return (
            <div>
                <h1>Ejemplo simple forms</h1>
                <form onSubmit={this.recibirDatosForm}>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajanombre} />
                    <br />
                    <label>Edad: </label>
                    <input type="text" ref={this.cajaedad} /><br />
                    <button>Enviar datos</button>
                </form>
                {
                    (this.state.user != null && this.state.edad != null) &&
                    (<div>
                        <h2>Usuario: {this.state.user}</h2>
                        <h2>Edad: {this.state.edad}</h2>
                    </div>)
                }
            </div>
        )
    }
}
