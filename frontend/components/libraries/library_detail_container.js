import { connect } from 'react-redux';
import LibraryDetail from './library_detail';
import { getLibrary } from '../../actions/library_actions';
import { deleteLink } from '../../actions/link_actions';


const mapStateToProps = state => ({
  library: state.library.library
});

const mapDispatchToProps = dispatch => ({
  getLibrary: (id) => dispatch(getLibrary(id)),
  deleteLink: (linkId) => dispatch(deleteLink(linkId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetail);
