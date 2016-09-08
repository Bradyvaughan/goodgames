import React from 'react';
import Modal from 'react-modal';

class EditReviewForm extends React.Component {

  constructor() {
    super();
    this.state = {title: "", body: "", modalIsOpen: false};
    this.handleClick = this.handleClick.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors && nextProps.errors.length === 0) {
      this.closeModal();
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateReview(this.props.gameId, this.props.reviewId, {title: this.state.title, body: this.state.body});
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
    let editClass = "vert-center";
    if (!this.props.reviewId) {
      editClass += ' hidden';
    }
    const customStyles = {
      overlay : {
        position: 'fixed',
        top : 0,
        bottom : 0,
        right : 0,
        left : 0,
        backgroundColor : 'rgba(0, 0, 0, .7)',
        zIndex : 9998
      },

      content : {
        zIndex : 9999,
        backgroundColor : 'rgba(10, 10, 60, 1)',
        top: '20vh',
        bottom: '20vh',
        left: '20vw',
        right: '20vw',


      }
    };
    return(
      <div className={editClass}  id="edit-review">
        <p className="button" onClick={this.openModal}>Edit Review</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style = {customStyles} >
          <div className="form review-form">

            <div>
            {this.renderErrors()}
            <h1>Edit Your Review</h1>
            </div>
            <input type="text" placeholder="Review Title"
              onChange={this.linkState("title")}/>
            <textarea placeholder="Review Body"
              rows="6"
              onChange={this.linkState("body")}/>
            <button onClick={this.handleClick}>Save Changes</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditReviewForm;
