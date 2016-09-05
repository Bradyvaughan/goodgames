import React from 'react';
import { hashHistory } from 'react-router';



class LibraryIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    hashHistory.push(`/home/${this.props.libraryId}`);
    this.props.getLibrary(this.props.libraryId);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteLibrary(this.props.libraryId);
  }

  render () {
    return (
      <li className="lib-item">
        <p onClick={this.handleClick}>{this.props.library.name}</p>
        <span className='icon' onClick={this.handleDelete}>x</span>
      </li>
    );
  }
}

export default LibraryIndexItem;
