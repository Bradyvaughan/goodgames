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
    this.setState({title: "", body: ""});
    document.querySelector('#add-review').classList.toggle('hidden');
    document.querySelector('#new-review').classList.toggle('hidden');
    document.querySelector('#title').value = "";
    document.querySelector('#body').value = "";
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return(
      <div className="inline-form hidden form" id="new-review">
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
