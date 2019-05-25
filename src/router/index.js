import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Create from '../containers/Create';
const Router = () => (
    <BrowserRouter>
        <Route path="/" component={Create}/>
    </BrowserRouter>
);

export default Router