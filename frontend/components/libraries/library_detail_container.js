import { connect } from 'react-redux';
import LibraryDetail from './library_detail';
import { getLibrary } from '../../actions/library_actions';
import { deleteLink, specCreate } from '../../actions/link_actions';
import { getGame, getGamesByLibrary, clearGames } from '../../actions/game_actions';


const mapStateToProps = state => ({
  games: state.games.games,
  currentUser: state.session.currentUser,
  libraries: state.libraries.libraries
});

const mapDispatchToProps = dispatch => ({
  getGamesByLibrary: (libId, page) => dispatch(getGamesByLibrary(libId, page)),
  deleteLink: (gameId, libraryId) => dispatch(deleteLink(gameId, libraryId)),
  getGame: (gameId) => dispatch(getGame(gameId)),
  clearGames: () => dispatch(clearGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
