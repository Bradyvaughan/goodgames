import React from 'react';
import LoginContainer from './forms/login_container';
import SignUpContainer from './forms/sign_up_container';
import { hashHistory } from 'react-router';
import LibraryIndexContainer from './libraries/library_index_container';
import LibraryFormContainer from './forms/library_form_container';


class App extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleNewLib = this.handleNewLib.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleHome(e) {
    e.preventDefault();
    hashHistory.push('/');
  }

  handleLogin(e) {
    e.preventDefault();
    document.getElementById('login').classList.toggle('hidden');
    $("#signUp").addClass('hidden');
  }

  handleSignUp(e) {
    e.preventDefault();
    document.getElementById('signUp').classList.toggle('hidden');
    $("#login").addClass('hidden');
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: "SidMeier", password: "civilization"});
  }

  handleNewLib(e) {
    e.preventDefault();
    document.querySelector('#new-lib').classList.toggle('hidden');
  }

  render(){
    let logoutClass = "button vert-center";
    let guestClass = "button vert-center";
    let libClass = "lib-dropdown vert-center";
    if (this.props.currentUser) {
      guestClass += " hidden";
    } else {
      logoutClass += " hidden";
      libClass += " hidden";
    }
    return(
      <div className='header'>
        <nav>
          <section>
            <section className="logo" onClick={this.handleHome}>
              <span className="gg">gg</span><span className="wp">wp</span>
            </section>
            <div className={libClass}>
              <span className="vert-center">My Libraries</span>
              <LibraryIndexContainer />
            </div>
            <div className={libClass}>
              <p className="button" onClick={this.handleNewLib}>
                Add a Library
              </p>
              <LibraryFormContainer />
            </div>
            <p className="search-bar">
              <label className="vert-center">Search:</label>
              <input className="vert-center" type="text"/>
            </p>
          </section>
          <section className="buttons">

            <p className={guestClass} onClick={this.handleGuest}>
              Guest Log In
            </p>
            <p className={logoutClass} onClick={this.handleLogout}>
              Log Out
            </p>
            <p className={guestClass} onClick={this.handleLogin}>
              Log In
            </p>
            <p className={guestClass} onClick={this.handleSignUp}>
              Sign Up
            </p>
          </section>
        <LoginContainer />
        <SignUpContainer />
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
