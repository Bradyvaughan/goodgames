import React from 'react';
import LibraryIndexItem from './library_index_item';
import { hashHistory } from 'react-router';

class LibraryIndex extends React.Component {
  componentDidMount() {
    let currentId;
    if (this.props.currentUser) {
      currentId = this.props.currentUser.id;
    } else {
      currentId = 0;
    }
    this.props.getAllLibraries(currentId);
  }

  render() {
    let libIndex = Object.keys(this.props.libraries).map((key) => (
      <LibraryIndexItem key={`library-${key}`}
         library={this.props.libraries[key]}
         getLibrary={this.props.getLibrary}
         deleteLibrary={this.props.deleteLibrary}
         libraryId={key}/>
     ));
    return(
      <ul className="lib-index">
        {libIndex}
      </ul>
    );
  }
}

export default LibraryIndex;
