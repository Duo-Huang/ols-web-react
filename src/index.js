import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Router from './router/index';
import Topbar from './containers/Topbar'
import './assests/css/normalize.css'
import './assests/css/base.css'

ReactDOM.render(
    <HashRouter>
        <div>
            <Topbar></Topbar>
            <Router></Router>
        </div>
    </HashRouter>,
    document.getElementById('root'));