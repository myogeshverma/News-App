import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter as Router,  routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';

import Reducer from "./reducers";

import App from './App';

const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = Reducer;
const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));

ReactDOM.render(

  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);