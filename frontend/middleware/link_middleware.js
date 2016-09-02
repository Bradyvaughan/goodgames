import { createLibraryLink, destroyLibraryLink, specCreateLink } from '../util/api_util/library_link_util';



export const LinkMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error = (errors) => alert(errors);
  switch (action.type) {
    case "CREATE_LINK":
      success = (data) => (console.log('hooray'));
      createLibraryLink(action.userId, action.libraryId, action.gameId, success, error);
      return next(action);
    case "SPEC_CREATE_LINK":
      success = (data) => (console.log('hooray'));
      specCreateLink(action.userId, action.libraryName, action.gameId, success, error);
      return next(action);
    case "DELETE_LINK":
      success = (data) => (console.log('hooray'));
      destroyLibraryLink(action.linkId, success, error);
      return next(action);
    default:
      return next(action);
  }
};
