import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import appRoutes from '../../../configRoutes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {appRoutes.map(route => <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
