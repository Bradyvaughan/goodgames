import {receiveErrors, receiveLibrary, removeLibrary, receiveAllLibraries, subtractLibrary}
  from '../actions/library_actions';
import {getLibrary, createLibrary, destroyLibrary}
  from '../util/api_util/library_util';
import { hashHistory } from 'react-router';

export const LibraryMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error = (response) => dispatch(receiveErrors(response.responseJSON));
  switch (action.type) {
    case "GET_LIBRARY":
      success = (data) => dispatch(receiveLibrary(data));
      getLibrary(action.id, success, error);
      return next(action);
    case "CREATE_LIBRARY":
      success = (data) => {
        dispatch(receiveLibrary(data));
        dispatch(receiveErrors([]));
        let keys = Object.keys(data);
        let id = keys[keys.length - 1];
        hashHistory.push(`/home/${id}`);
      };
      createLibrary(action.userId, action.library, success, error);
      return next(action);
    case "DELETE_LIBRARY":
      success = (data) => {
        dispatch(subtractLibrary(data));
        if (window.location.hash.includes(`/${action.id}?`)) {
          hashHistory.push('/');
        }
      };
      destroyLibrary(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};
