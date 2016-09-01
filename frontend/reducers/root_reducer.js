import { SessionReducer } from './session_reducer';
import { combineReducers } from 'redux';
import { GameReducer } from './game_reducer';
import { LibraryReducer } from './library_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  games: GameReducer,
  libraries: LibraryReducer
});

export default RootReducer;
