import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';
import { getGame } from '../../actions/game_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.logInErrors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  getGame: id => dispatch(getGame(id))
});

const thing = connect(mapStateToProps, mapDispatchToProps)(Login);

export default thing;
