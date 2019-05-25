import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Topbar from '../containers/Topbar'
import Create from '../containers/Create';
import Train from '../containers/Train'
const Router = () => (
        <Switch>
          <Route path='/account' render={() => <h3>account</h3>} />
          <Route path='/train' component={Train} />
          <Route path='/mision' render={() => <h3>mision</h3>} />
          <Route path="/create" component={Create}/>
          <Redirect from="*" to="/account" />
        </Switch>
);

export default Router