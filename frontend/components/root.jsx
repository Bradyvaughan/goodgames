import React from 'react';
import { Provider } from 'react-redux';
import { login, signUp } from '../actions/session_actions';
import Login from './login';
import SignUp from './sign_up';


export const Root = ({store}) => (
  <Provider store={store}>
    <div>

      <Login login={(user) => store.dispatch(login(user))} />
      <SignUp signUp={(user) => store.dispatch(signUp(user))} />
    </div>
  </Provider>
);
