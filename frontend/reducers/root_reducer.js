import { SessionReducer } from './session_reducer';
import { combineReducers } from 'redux';
import { GameReducer } from './game_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  games: GameReducer
});

export default RootReducer;
