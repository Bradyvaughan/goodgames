import { merge } from 'lodash';

export const GameReducer = (
  state={games: {img: "", title: "", description: "", avg_rating: "", release_date: "", libraries: []},
   gameErrors: []}, action) => {
  let newState = merge({},state);
  switch (action.type) {
    case "RECEIVE_ALL_GAMES":
      newState.games = action.data;
      return newState;
    case "RECEIVE_GAME":
      newState.games = action.data;
      return newState;
    case "RECEIVE_SOME_GAMES":
      merge(newState.games, action.data);
      return newState;
    case "RECEIVE_ERRORS":
      newState.gameErrors = action.errors;
      return newState;
    default:
      return state;
  }
};
