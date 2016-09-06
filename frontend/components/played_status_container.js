import {connect} from 'react-redux';
import PlayedStatus from './played_status';
import { specCreate } from '../actions/link_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  specCreate: (userId, libName, gameId, libId) => dispatch(specCreate(userId, libName, gameId, libId))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlayedStatus);
