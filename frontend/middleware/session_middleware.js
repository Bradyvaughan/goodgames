import {receiveCurrentUser, receiveErrors }
  from '../actions/session_actions';

import { signUp, login, logout } from '../util/api_util';





export const SessionMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case "LOGIN":
      success = () => store.dispatch(receiveCurrentUser(action.user));
      error = response => store.dispatch(receiveErrors(response));
      login({user: action.user}, success, error);
      return next(action);
    case "SIGN_UP":
      success = () => store.dispatch(receiveCurrentUser(action.user));
      error = response => store.dispatch(receiveErrors(response));
      signUp({user: action.user}, success, error);
      return next(action);
    case "LOGOUT":
      success = () => next(action);
      error = response => store.dispatch(receiveErrors(response));
      logout(success, error);
      break;
    default:
      return next(action);
  }
};
