import { merge } from 'lodash';

export const LibrariesReducer = (state = {errors: [], libraries: {}}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case "RECEIVE_ALL_LIBRARIES":
      newState.libraries = action.libraries;
      return newState;
    case "RECEIVE_ERRORS":
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
