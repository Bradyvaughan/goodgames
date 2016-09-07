import { connect } from 'react-redux';
import Home from './home';
import { getGamesByUser, clearGames } from '../actions/game_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  games: state.games.games
});
const mapDispatchToProps = dispatch => ({
  getGamesByUser: (userId, page) => dispatch(getGamesByUser(userId, page)),
  clearGames: () => dispatch(clearGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
