import React, { Component } from 'react'
import musica from './../assest/images/Musica.jpg'

export default class Musica extends Component {
    render() {
        return (
            <div>
                <h1>Musica</h1>
                <img src={musica} alt="Musica" style={{"width": "300px", "height": "300px"}}/>
            </div>
        )
    }
}
