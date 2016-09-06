import {receiveErrors, receiveAllGames, receiveGame, receiveSomeGames }
  from '../actions/game_actions';

import { getAllGames, getGame, createGame, deleteGame, updateGame, getGamesByUser, getGamesByPage, getGamesByLibrary }
  from '../util/api_util/game_util';

export const GameMiddleware = ({state, dispatch}) => next => action => {
  let success;
  let error = (response) => dispatch(receiveErrors(response));
  switch (action.type) {
    case "GET_ALL_GAMES":
      success = (data) => dispatch(receiveAllGames(data));
      getAllGames(success, error);
      return next(action);
    case "GET_GAMES_BY_USER":
      success = (data) => dispatch(receiveSomeGames(data));
      getGamesByUser(action.userId, action.page, success, error);
      return next(action);
    case "GET_GAMES_BY_PAGE":
      success = (data) => dispatch(receiveSomeGames(data));
      getGamesByPage(action.page, success, error);
      return next(action);
    case "GET_GAMES_BY_LIBRARY":
      success = (data) => dispatch(receiveSomeGames(data));
      getGamesByLibrary(action.libraryId, action.page, success, error);
      return next(action);
    case "GET_GAME":
      success = (data) => dispatch(receiveGame(data));
      getGame(action.gameId, success, error);
      return next(action);
    case "CREATE_GAME":
      success = (data) => console.log('hooray!');
      createGame(action.game, success, error);
      return next(action);
    case "DELETE_GAME":
      success = (data) => console.log('hooray!');
      deleteGame(action.gameId, success, error);
      return next(action);
    case "UPDATE_GAME":
      success = (data) => dispatch(receiveGame(data));
      updateGame(action.gameId, action.game, success, error);
      return next(action);
    default:
      return next(action);
  }
};
