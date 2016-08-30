import { connect } from 'react-redux';
import SignUp from './sign_up';
import { signUp } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});
const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
