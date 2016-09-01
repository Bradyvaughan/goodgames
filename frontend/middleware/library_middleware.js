import {receiveErrors, receiveAllLibraries, receiveLibrary, removeLibrary}
  from '../actions/library_actions';
import {getAllLibraries, getLibrary, createLibrary, destroyLibrary}
  from '../util/api_util/library_util';

export const LibraryMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error = (response) => dispatch(receiveErrors(response));
  switch (action.type) {
    case "GET_ALL_LIBRARIES":
      success = (data) => dispatch(receiveAllLibraries(data));
      getAllLibraries(action.userId, success, error);
      return next(action);
    case "GET_LIBRARY":
      success = (data) => dispatch(receiveLibrary(data));
      getLibrary(action.userId, action.id, success, error);
      return next(action);
    case "CREATE_LIBRARY":
      success = (data) => dispatch(receiveLibrary(data));
      createLibrary(action.userId, action.library, success, error);
      return next(action);
    case "DELETE_LIBRARY":
      success = () => console.log('hooray!');
      destroyLibrary(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};
