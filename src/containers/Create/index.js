import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Topbar from '../Topbar'
import Train from '../Train'

export default class Create extends React.Component {
  render() {
    return (
      <div>
        <Topbar />
        <Switch>
          <Route path='/account' render={() => <h3>account</h3>} />
          <Route path='/train' component={Train} />
          <Route path='/mision' render={() => <h3>mision</h3>} />
          <Redirect from="*" to="/account" />
        </Switch> 
      </div>
    )
  }
}