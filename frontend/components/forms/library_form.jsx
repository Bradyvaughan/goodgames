import React from 'react';
import Modal from 'react-modal';

class LibraryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: "", modalIsOpen: false};
    this.handleClick = this.handleClick.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createLibrary(this.props.currentUser.id, this.state);
    }
    this.setState({name: ""});
    this.closeModal();
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  // renderErrors() {
  //   let errors = this.props.errors.map((error, i) => (
  //     <li key={`error-${i}`}>{error}</li>
  //   ));
  //   if (errors[0]) {
  //     return(
  //       <ul className="side-list">
  //         {errors}
  //       </ul>
  //     );
  //   }
  // }

  render () {

    let className = "vert-center";
    if (this.props.loggedIn) {
      className += " hidden";
    }
    const customStyles = {
      overlay : {
        position: 'fixed',
        top : 0,
        bottom : 0,
        right : 0,
        left : 0,
        backgroundColor : 'rgba(0, 0, 0, .5)',
        zIndex : 9998
      },

      content : {
        zIndex : 9999,
        backgroundColor : 'rgba(20, 20, 120, 1)',
        top: '15vh',
        bottom: '45vh',
        left: '20vw',
        right: '20vw',


      }
    };
    // {this.renderErrors()}
    return(
      <div className={className} id="new-lib">
        <p className="button" onClick={this.openModal}>Add Library</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style = {customStyles} >
            <form className ="form small-form" onSubmit={this.handleClick}>

              <div>
                <h1>Create a New Games Library</h1>
              </div>


              <input type="text" placeholder="Library Name" id="name"
                onChange={this.linkState("name")}/>
              <input className="form-button" type="submit" value="New Library" />
            </form>
        </Modal>
      </div>
    );
  }
}

export default LibraryForm;
