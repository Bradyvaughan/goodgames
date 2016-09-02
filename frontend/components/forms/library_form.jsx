import React from 'react';
import { hashHistory } from 'react-router';

class LibraryForm extends React.Component {

  constructor() {
    super();
    this.state = {name: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createLibrary(this.props.currentId, this.state);
    this.setState({name: ""});
    document.querySelector('#add-lib').classList.toggle('hidden');
    document.querySelector('#new-lib').classList.toggle('hidden');
    document.querySelector('#name').value = "";
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return(
      <div className="inline-form hidden form" id="new-lib">
        <div>
          <label htmlFor="name"></label>
          <input type="text" id="name"
            onChange={this.linkState("name")}/>
        </div>
        <button onClick={this.handleClick}>New Library</button>
      </div>
    );
  }
}

export default LibraryForm;
