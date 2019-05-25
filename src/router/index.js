import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Login from '../components/Login'
import Logup from '../components/Logup'
import Create from '../containers/Create';
const Router = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login}/>
            <Route path="/log-up" component={Logup}/>
            {/* <Route path="/list" component={Logup}/> */}
            {/* <Route path="/detail" component={Logup}/> */}
            <Route path="/create" component={Create}/>
        </div>
    </BrowserRouter>
);

export default Router