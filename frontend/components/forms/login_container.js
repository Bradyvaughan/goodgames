import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const thing = connect(mapStateToProps, mapDispatchToProps)(Login);

export default thing;
