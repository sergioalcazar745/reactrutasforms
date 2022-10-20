import React, { Component } from 'react'
import home from './../assest/images/home.jpg'

export default class Home extends Component {
  render() {
    return (
        <div>
            <h1>Home</h1>
            <img src={home} alt="Home" style={{"width": "300px", "height": "300px"}}/>
        </div>
    )
  }
}
