import React from 'react';
import { Provider } from 'react-redux';
// import { login, signUp } from '../actions/session_actions';
import { Router, Route, hashHistory} from 'react-router';
// import Login from './login';
// import SignUp from './sign_up';
import App from './app';
import Home from './home';
import HomeLite from './home_lite';


export const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="guest" component={HomeLite}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
