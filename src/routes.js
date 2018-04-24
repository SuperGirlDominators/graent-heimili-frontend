import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export const MainRoutes = () => {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}/>
        </Router>
      </Provider>
    </div>
  );
}
