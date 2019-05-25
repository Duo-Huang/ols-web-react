import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Create from '../containers/Create';
const Router = () => (
    <BrowserRouter>
        <div>
            {/* <Route path="/list" component={Logup}/> */}
            {/* <Route path="/detail" component={Logup}/> */}
            <Route path="/create" component={Create}/>
        </div>
    </BrowserRouter>
);

export default Router