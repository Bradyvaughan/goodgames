import React from 'react';
import LoginContainer from './forms/login_container';
import SignUpContainer from './forms/sign_up_container';


export const App = ({children}) => (
  <div>
    <LoginContainer />
    <SignUpContainer />
    {children}
  </div>
);
