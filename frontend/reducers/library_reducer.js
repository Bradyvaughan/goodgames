import {receiveErrors, receiveAllLibraries, receiveLibrary, removeLibrary}
  from '../actions/library_actions';
import {getAllLibraries, getLibrary} from '../util/api_util/library_util';

import { merge } from 'lodash';

export const LibraryReducer = (state = {errors: [], libraries: {}}, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case "RECEIVE_ALL_LIBRARIES":
      newState.libraries = action.libraries;
      return newState;
    case "RECEIVE_LIBRARY":
      newState.libraries = action.library;
      return newState;
    case "RECEIVE_ERRORS":
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
