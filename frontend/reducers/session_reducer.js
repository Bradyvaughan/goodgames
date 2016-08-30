import { merge } from 'lodash';


export const SessionReducer =
  (state = {currentUser: null, errors: []}, action) => {
    let newState = merge({}, state);
  switch (action.type) {
    case "RECEIVE_CURRENT_USER":
      newState.currentUser = action.user;
      return newState;
    case "RECEIVE_ERRORS":
      newState.errors = newState.errors.concat(action.errors);
      return newState;
    case "LOGOUT":
      newState.currentUser = null;
      return newState;
    default:
      return state;
  }
};
