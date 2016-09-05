import {receiveErrors, receiveLibrary, removeLibrary, receiveAllLibraries}
  from '../actions/library_actions';
import {getLibrary, createLibrary, destroyLibrary}
  from '../util/api_util/library_util';

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
        dispatch(receiveAllLibraries(data));
        $('#add-lib').addClass('hidden');
        document.querySelector('#new-lib').classList.toggle('hidden');
        document.querySelector('#name').value = "";
      };
      createLibrary(action.userId, action.library, success, error);
      return next(action);
    case "DELETE_LIBRARY":
      success = (data) => dispatch(receiveAllLibraries(data));
      destroyLibrary(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};
