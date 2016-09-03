import { connect } from 'react-redux';
import LibraryDetail from './library_detail';
import { getLibrary } from '../../actions/library_actions';
import { deleteLink } from '../../actions/link_actions';


const mapStateToProps = state => ({
  library: state.library.library
});

const mapDispatchToProps = dispatch => ({
  getLibrary: (id) => dispatch(getLibrary(id)),
  deleteLink: (linkId, libraryId) => dispatch(deleteLink(linkId, libraryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
