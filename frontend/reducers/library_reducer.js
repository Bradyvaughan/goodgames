import { merge } from 'lodash';

export const LibraryReducer = (state = {errors: [], library: {}}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case "RECEIVE_LIBRARY":
      newState.library = action.library;
      return newState;
    case "RECEIVE_ERRORS":
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
