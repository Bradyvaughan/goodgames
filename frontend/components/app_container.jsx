import App from './app';
import { connect } from 'react-redux';
import { logout, login } from '../actions/session_actions';
import { clearGames, getSearch } from '../actions/game_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  clearGames: () => dispatch(clearGames()),
  getSearch: (query, page) => dispatch(getSearch(query, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
