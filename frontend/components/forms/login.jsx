import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: "", modalIsOpen: false};
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
    this.props.login({username: this.state.username, password: this.state.password});
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
        backgroundColor : 'rgba(0, 0, 0, .5)',
        zIndex : 9998
      },

      content : {
        zIndex : 9999,
        backgroundColor : 'rgba(20, 20, 120, 1)',
        top: '20vh',
        bottom: '20vh',
        left: '20vw',
        right: '20vw',


      }
    };
    return(
      <div className={className} id="login">
        <p className="button" onClick={this.openModal}>Log In</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style = {customStyles} >

            <form onSubmit={this.handleClick} className ="big-form form">
              <div>
                <h1>Log In!</h1>
                {this.renderErrors()}
              </div>
              <div>
                <input type="text" placeholder="Username" id="username"
                  onChange={this.linkState("username")}/>
              </div>

              <div>
                <input type="password" placeholder="Password" id="password"
                  onChange={this.linkState("password")}/>
              </div>
              <input className="form-button" type="submit" value="Log In" />
            </form>
        </Modal>
      </div>
    );
  }
}

export default Login;
