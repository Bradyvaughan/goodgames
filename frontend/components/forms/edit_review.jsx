import React from 'react';

class EditReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: "", body: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.review);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateReview(this.props.gameId, this.props.reviewId, this.state);
    this.setState({title: "", body: ""});
    document.querySelector('#edit-review').classList.toggle('hidden');
    document.querySelector('#change-review').classList.toggle('hidden');
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return(
      <div className="inline-form hidden form" id="change-review">
        <label htmlFor="title">Title</label>
        <input type="text" id="title"
          onChange={this.linkState("title")}/>
        <label htmlFor="body">Body</label>
        <textarea id="body"
          onChange={this.linkState("body")}/>
        <button onClick={this.handleClick}>Save Changes</button>
      </div>
    );
  }
}

export default EditReviewForm;
