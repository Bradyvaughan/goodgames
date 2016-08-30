import {receiveCurrentUser, receiveErrors }
  from '../actions/session_actions';

import { signUp, login, logout } from '../util/api_util/session_util';





export const SessionMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case "LOGIN":
      success = (data) => store.dispatch(receiveCurrentUser(data));
      error = response => store.dispatch(receiveErrors(response.responseJSON));
      login({user: action.user}, success, error);
      return next(action);
    case "SIGN_UP":
      success = (data) => store.dispatch(receiveCurrentUser(data));
      error = response => store.dispatch(receiveErrors(response.responseJSON));
      signUp({user: action.user}, success, error);
      return next(action);
    case "LOGOUT":
      success = () => next(action);
      error = response => store.dispatch(receiveErrors(response.responseJSON));
      logout(success, error);
      break;
    default:
      return next(action);
  }
};
