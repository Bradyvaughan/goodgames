import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: "", email: "", modalIsOpen: false};
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

  handleClick(e) {
    e.preventDefault();
    this.props.signUp({username: this.state.username, email: this.state.email, password: this.state.password});
    this.closeModal();
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  renderErrors() {
    let errors = this.props.errors.map((error, i) => (
      <li key={`error-${i}`}>{error}</li>
    ));
    return(
      <ul>
        {errors}
      </ul>
    );
  }


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
      <div className={className} id="signUp">
        <p className="button vert-center" onClick={this.openModal}>Sign Up</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style = {customStyles} >

            <div className ="big-form form">
                {this.renderErrors()}
              <div>
                <input type="text" placeholder="Username" id="username"
                  onChange={this.linkState("username")}/>
              </div>

              <div>
                <input type="text" placeholder="Email" id="email"
                  onChange={this.linkState("email")}/>
              </div>

              <div>
                <input type="password" placeholder="Password" id="password"
                  onChange={this.linkState("password")}/>
              </div>
              <button onClick={this.handleClick}>Sign Up</button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
