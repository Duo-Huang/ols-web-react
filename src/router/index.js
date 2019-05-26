import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Create from '../containers/Create';
import Details from '../containers/Details';

import Train from '../containers/Train'
const Router = () => (
    <Switch>
        <Route path='/account' exact render={() => <h3>account</h3>} />
        <Route path='/train' exact component={Train} />
        <Route path='/mission' exact render={() => <h3>mision</h3>} />
        <Route path="/train/create" component={Create} />
        <Route path="/train/details/:id" component={Details} />
        <Redirect from="*" to="/account" />
    </Switch>
);

export default Router