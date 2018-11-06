import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import './index.css';
import store, { history } from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <App />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
