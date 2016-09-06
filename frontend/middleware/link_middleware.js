import { createLibraryLink, destroyLibraryLink, specCreateLink } from '../util/api_util/library_link_util';
import { getLibrary, getAllLibraries } from '../actions/library_actions';
import { getGame } from '../actions/game_actions';



export const LinkMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error = (errors) => alert(errors);
  switch (action.type) {
    case "CREATE_LINK":
      success = (data) => (dispatch(getGame(action.gameId)));
      createLibraryLink(action.userId, action.libraryId, action.gameId, success, error);
      return next(action);
    case "SPEC_CREATE_LINK":
      success = (data) => {
        dispatch(getGame(action.gameId));
        dispatch(getAllLibraries(action.userId));
        dispatch(getLibrary());
      };
      specCreateLink(action.userId, action.libraryName, action.gameId, success, error);
      return next(action);
    case "DELETE_LINK":
      success = () => (dispatch(getLibrary(action.libraryId)));
      destroyLibraryLink(action.linkId, success, error);
      return next(action);
    default:
      return next(action);
  }
};
