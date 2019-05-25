import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Router from './router/index';
import Topbar from './containers/Topbar'
import './assests/css/normalize.css'
import './assests/css/base.css'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Topbar></Topbar>
            <Router></Router>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));