import { connect } from 'react-redux';
import GameDetail from './game_detail';
import { getGame } from '../../actions/game_actions';
import { getAllLibraries } from '../../actions/library_actions';
import { createLink } from '../../actions/link_actions';

const mapStateToProps = state => ({
  games: state.games.games,
  currentId: state.session.currentUser.id,
  libraries: state.libraries.libraries
});

const mapDispatchToProps = dispatch => ({
  getGame: (id) => dispatch(getGame(id)),
  getAllLibraries: (id) => dispatch(getAllLibraries(id)),
  createLink: (userId, libId, gameId) =>
  dispatch(createLink(userId, libId, gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);
