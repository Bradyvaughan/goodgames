import { connect } from 'react-redux';
import LibraryDetail from './library_detail';
import { getLibrary } from '../../actions/library_actions';
import { deleteLink, specCreate } from '../../actions/link_actions';
import { getGame } from '../../actions/game_actions';


const mapStateToProps = state => ({
  library: state.library.library,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getLibrary: (id) => dispatch(getLibrary(id)),
  deleteLink: (linkId, libraryId) => dispatch(deleteLink(linkId, libraryId)),
  getGame: (gameId) => dispatch(getGame(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
