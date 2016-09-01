import { createLibraryLink, deleteLibraryLink } from '../util/api_util/library_link_util';



export const LinkMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error = (errors) => alert(errors);
  switch (action.type) {
    case "CREATE_LINK":
      success = (data) => (console.log('hooray'));
      createLibraryLink(action.gameId, action.libraryId, action.userId, success, error);
      return next(action);
    case "DELETE_LINK":
      success = (data) => (console.log('hooray'));
      deleteLibraryLink(action.id, success, error);
      return next(action);
    default:

  }
};
