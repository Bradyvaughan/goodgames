import {receiveCurrentUser, receiveLogInErrors, receiveSignUpErrors } from '../actions/session_actions';
import {createLibrary, getAllLibraries} from '../actions/library_actions';
import {hashHistory} from 'react-router';

import { signUp, login, logout } from '../util/api_util/session_util';
import { getGamesByUser } from '../actions/game_actions';





export const SessionMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case "LOGIN":
    error = response => store.dispatch(receiveLogInErrors(response.responseJSON));
      success = (data) => {
        store.dispatch(receiveCurrentUser(data));
        $("#login").addClass('hidden');
        $("#signUp").addClass('hidden');
        store.dispatch(receiveLogInErrors([]));
        store.dispatch(getAllLibraries(data.id));
        if (window.hash.location !== "/games"){
          store.dispatch(getGamesByUser(data.id, 1));
        }
      };
      login({user: action.user}, success, error);
      return next(action);
    case "SIGN_UP":
    error = response => store.dispatch(receiveSignUpErrors(response.responseJSON));
      success = (data) => {
        store.dispatch(receiveCurrentUser(data));
        store.dispatch(createLibrary(data.id, {name: "Played"}));
        store.dispatch(createLibrary(data.id, {name: "Currently Playing"}));
        store.dispatch(createLibrary(data.id, {name: "To Play"}));
        document.getElementById('signUp').classList.toggle('hidden');
        store.dispatch(receiveSignUpErrors([]));
      };
      signUp({user: action.user}, success, error);
      return next(action);
    case "LOGOUT":
      success = () => {
        if (window.location.hash.match(new RegExp("/home/"))) {
          hashHistory.push("/games");
        }
        next(action);
      };
      logout(success, error);
      break;
    default:
      return next(action);
  }
};
