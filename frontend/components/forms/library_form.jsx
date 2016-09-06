import React from 'react';

class LibraryForm extends React.Component {

  constructor() {
    super();
    this.state = {name: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createLibrary(this.props.currentUser.id, this.state);
    }
    this.setState({name: ""});
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  renderErrors() {
    // debugger;
    let errors = this.props.errors.map((error, i) => (
      <li key={`error-${i}`}>{error}</li>
    ));
    return(
      <ul className="side-list">
        {errors}
      </ul>
    );
  }

  render () {
    return(
      <div className="inline-form hidden form" id="new-lib">
        {this.renderErrors()}
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
