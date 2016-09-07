import { createLibraryLink, destroyLibraryLink, specCreateLink } from '../util/api_util/library_link_util';
import { getLibrary, getAllLibraries } from '../actions/library_actions';
import { getGame, getGamesByUser, getAllGames, subtractGame } from '../actions/game_actions';
import { hashHistory } from 'react-router';



export const LinkMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error;
  switch (action.type) {
    case "CREATE_LINK":
      error = (errors) => alert(errors.responseJSON);
      success = (data) => (dispatch(getGame(action.gameId)));
      createLibraryLink(action.userId, action.libraryId, action.gameId, success, error);
      return next(action);
    case "SPEC_CREATE_LINK":
      error = (errors) => alert(errors.responseJSON);
      success = (data) => {
        if (window.location.hash.match(new RegExp("#/games/[0-9]"))) {
          dispatch(getGame(action.gameId));
        } else if (window.location.hash.match(new RegExp("#/games"))) {
          dispatch(getAllGames());
        } else if (window.location.hash.match(new RegExp("#/home"))) {
          dispatch(getLibrary(action.libId));
        } else {
          dispatch(getGamesByUser(action.userId, 1));
        }
      };
      specCreateLink(action.userId, action.libraryName, action.gameId, success, error);
      return next(action);
    case "DELETE_LINK":
      error = (errors) => alert(errors.responseText);
      success = () => (dispatch(subtractGame(action.gameId)));
      destroyLibraryLink(action.gameId, action.libId, success, error);
      return next(action);
    default:
      return next(action);
  }
};
