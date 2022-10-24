import React, { Component } from 'react'

export default class SeleccionMultipleForms extends Component {
    
    selectMutiple = React.createRef();

    generarOptions = () => {
        var listaOptions = [];

        for (let i = 0; i < 10; i++) {
            listaOptions.push(<option key={i} value={"Elemento: " + i}>{"Elemento: " + i}</option>)     
        }

        return listaOptions;
    }

    mostrarSeleccionados = (e) => {
        e.preventDefault();
        var options = this.selectMutiple.current.options;
        var datos = "";

        for(var option of options){
            if(option.selected){
                datos += option.value + ",";
            }
        }

        this.setState({
            seleccionados: datos
        })
    }

    state = {
        seleccionados: ""
    }

    render() {
        return (
            <div style={{margin: "auto", width: "75%"}}>
                <h1>Seleccion Múltiple Forms</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <select ref={this.selectMutiple} size="10" multiple>
                        {this.generarOptions()}
                    </select><br/><br/>
                    <button>Mostrar seleccionados</button>
                </form>
                <h1 style={{color: "red"}}>
                    {this.state.seleccionados}
                </h1>
            </div>
        )
    }
}
