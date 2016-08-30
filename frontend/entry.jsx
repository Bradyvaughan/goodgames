import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { Root } from './components/root';
import { signUp, login, logout } from './actions/session_actions';



document.addEventListener("DOMContentLoaded", () =>{
  window.signUp = signUp;
  window.login = login;
  window.logout = logout;
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser, errors: []}};
  }
  const store = configureStore(preloadedState);
  window.store = store;

  ReactDOM.render(<Root store={store}/>,document.getElementById("root"));
});
