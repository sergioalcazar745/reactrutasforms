import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';
import FormSimple from './FormSimple';
import Collatz from './Collatz';
import TablaMultiplicar from './TablaMultiplicar';
import TablaMultiplicar2 from './TablaMultiplicar2';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cine' element={<Cine />} />
                    <Route path='/musica' element={<Musica />} />
                    <Route path='/form' element={<FormSimple />} />
                    <Route path='/collatz' element={<Collatz />} />
                    <Route path='/tabla-multiplicar' element={<TablaMultiplicar />} />
                    <Route path='/tabla-multiplicar2' element={<TablaMultiplicar2 />} />
                    <Route path='*' element={<div>Default Page Content</div>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
