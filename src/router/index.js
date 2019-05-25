import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Create from '../containers/Create';
import Details from '../containers/Details';
const Router = () => (
    <BrowserRouter>
        <div>
            {/* <Route path="/list" component={Logup}/> */}
            <Route path="/details/:id" component={Details}/>
            <Route path="/create" component={Create}/>
        </div>
    </BrowserRouter>
);

export default Router