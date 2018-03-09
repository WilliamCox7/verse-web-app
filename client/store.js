import { React, thunk, createStore, applyMiddleware, compose } from './packages';
import root from './root';

/**
 * @const createStore creates store for redux
 */

const store = createStore(
  root, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export {
  store
}
