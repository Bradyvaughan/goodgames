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
    let name = this.props.library.name;
    let x = <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete}></i>;
    if (["Played", "To Play", "Currently Playing"].indexOf(name) > -1) {
      x = null;
    }
    return (
      <li className="lib-item">
        <p onClick={this.handleClick}>{name}</p>
        {x}
      </li>
    );
  }
}

export default LibraryIndexItem;
