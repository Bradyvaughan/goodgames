import { connect } from 'react-redux';
import LibraryIndex from './library_index';
import { getAllLibraries, getLibrary, deleteLibrary }
  from '../../actions/library_actions';

const mapStateToProps = state => ({
  libraries: state.libraries.libraries,
  currentId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  getAllLibraries: (id) => dispatch(getAllLibraries(id)),
  getLibrary: (id) => dispatch(getLibrary(id)),
  deleteLibrary: (id) => dispatch(deleteLibrary(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryIndex);
