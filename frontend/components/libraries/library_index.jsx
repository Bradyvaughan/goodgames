import React from 'react';
import LibraryIndexItem from './library_index_item';
import { hashHistory } from 'react-router';

class LibraryIndex extends React.Component {
  componentDidMount() {
    let currentId;
    if (this.props.currentUser) {
      currentId = this.props.currentUser.id;
      this.props.getAllLibraries(currentId);
    }
  }

  hide(e) {
    e.preventDefault();
    $('#liblist').toggleClass('translated');
  }

  render() {

    let defaults = [<li className='temp'>Default Libraries</li>];
    let customs = [<li className='temp'>Custom Libraries</li>];



    let libIndex = Object.keys(this.props.libraries).forEach((key) => {
      if (["Played", "To Play", "Currently Playing"]
      .indexOf(this.props.libraries[key].name) > -1) {
        defaults.push(<LibraryIndexItem key={`library-${key}`}
           library={this.props.libraries[key]}
           getLibrary={this.props.getLibrary}
           deleteLibrary={this.props.deleteLibrary}
           libraryId={key}/>)
      } else {
        customs.push(<LibraryIndexItem key={`library-${key}`}
           library={this.props.libraries[key]}
           getLibrary={this.props.getLibrary}
           deleteLibrary={this.props.deleteLibrary}
           libraryId={key}/>)
      }
     });
    return(
        <ul className="lib-index translated" id="liblist">
          <span onClick={this.hide}>X</span>
          <div className='def-lib'>
            {defaults}
          </div>
          <div className='def-lib'>
            {customs}
          </div>
        </ul>
    );
  }
}

export default LibraryIndex;
