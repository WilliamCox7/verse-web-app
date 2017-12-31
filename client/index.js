/* PACKAGES */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root';

/* COMPONENTS */
import App from './App';
import Home from './components/Home/Home';

/* STORE - REDUX */
let store = createStore(
  rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

/* ROUTES */
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
