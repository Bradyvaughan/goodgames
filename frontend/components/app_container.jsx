import App from './app';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(App);
