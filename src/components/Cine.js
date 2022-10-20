import React, { Component } from 'react'
import cine from './../assest/images/cine.jpg'

export default class Cine extends Component {
    render() {
        return (
            <div>
                <h1>Cine</h1>
                <img src={cine} alt="Cine" style={{"width": "300px", "height": "300px"}}/>
            </div>
        )
    }
}