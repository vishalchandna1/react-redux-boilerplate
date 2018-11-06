import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';

export const history = createHistory();

export default function configureStore() {
  
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(routerMiddleware(history))));

  return store;
}