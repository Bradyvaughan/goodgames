import { connect } from 'react-redux';
import LibraryForm from './library_form';
import { createLibrary, getAllLibraries } from '../../actions/library_actions';

const mapStateToProps = state => ({
  currentId: state.session.currentUser.id,
  errors: state.libraries.errors
});

const mapDispatchToProps = dispatch => ({
  createLibrary: (userId, library) => dispatch(createLibrary(userId, library)),
  getAllLibraries: (userId) => dispatch(getAllLibraries(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryForm);
