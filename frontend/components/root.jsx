import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import { App } from './app';
import { Home } from './home';
import HomeLite from './home_lite';


export const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <Route path="/home" component={ Home }/>
      </Route>
    </Router>
  </Provider>
);
