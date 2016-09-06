import {receiveErrors, receiveAllLibraries}
  from '../actions/library_actions';
import {getAllLibraries}
  from '../util/api_util/library_util';

export const LibrariesMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error = (response) => dispatch(receiveErrors(response.responseJSON));
  switch (action.type) {
    case "GET_ALL_LIBRARIES":
      success = (data) => dispatch(receiveAllLibraries(data));
      getAllLibraries(action.userId, success, error);
      return next(action);
    default:
      return next(action);
  }
};
