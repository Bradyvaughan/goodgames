import React from 'react';

class NewReviewForm extends React.Component {

  constructor() {
    super();
    this.state = {title: "", body: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createReview(this.props.gameId, this.state);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  renderErrors() {
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
      <div className="inline-form form hidden" id="new-review">
        {this.renderErrors()}
        <label htmlFor="title">title</label>
        <input type="text" id="title"
          onChange={this.linkState("title")}/>
        <label htmlFor="body">body</label>
        <textarea id="body"
          onChange={this.linkState("body")}/>
        <button onClick={this.handleClick}>Add Review</button>
      </div>
    );
  }
}

export default NewReviewForm;
