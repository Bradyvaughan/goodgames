import { SessionReducer } from './session_reducer';
import { combineReducers } from 'redux';
import { GameReducer } from './game_reducer';
import { LibraryReducer } from './library_reducer';
import { LibrariesReducer } from './libraries_reducer';
import { ReviewReducer } from './review_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  games: GameReducer,
  libraries: LibrariesReducer,
  library: LibraryReducer,
  reviews: ReviewReducer
});

export default RootReducer;
