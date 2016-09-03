import {receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import {createLibrary} from '../actions/library_actions';

import { signUp, login, logout } from '../util/api_util/session_util';





export const SessionMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case "LOGIN":
      success = (data) => {
        store.dispatch(receiveCurrentUser(data));
        document.getElementById('login').classList.toggle('hidden');
      };
      error = response => store.dispatch(receiveErrors(response.responseJSON));
      login({user: action.user}, success, error);
      return next(action);
    case "SIGN_UP":
      success = (data) => {
        store.dispatch(receiveCurrentUser(data));
        store.dispatch(createLibrary(data.id, {name: "Played"}));
        store.dispatch(createLibrary(data.id, {name: "Currently Playing"}));
        store.dispatch(createLibrary(data.id, {name: "Wanting to Play"}));
        document.getElementById('signUp').classList.toggle('hidden');
        // store.dispatch(receiveErrors({errors: []}));
      };
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
