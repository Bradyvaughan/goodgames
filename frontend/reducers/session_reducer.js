import { merge } from 'lodash';


export const SessionReducer =
  (state = {currentUser: null, signUpErrors: [], logInErrors: []}, action) => {
    let newState = merge({}, state);
  switch (action.type) {
    case "RECEIVE_CURRENT_USER":
      newState.currentUser = action.user;
      return newState;
    case "RECEIVE_SIGN_UP_ERRORS":
      newState.signUpErrors = action.errors;
      return newState;
    case "RECEIVE_LOG_IN_ERRORS":
      newState.logInErrors = action.errors;
      return newState;
    case "LOGOUT":
      newState.currentUser = null;
      return newState;
    default:
      return state;
  }
};
