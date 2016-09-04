import React from 'react';
import LoginContainer from './forms/login_container';
import SignUpContainer from './forms/sign_up_container';
import { hashHistory } from 'react-router';


class App extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleHome(e) {
    e.preventDefault();
    hashHistory.push('/home');
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

  render(){
    let logoutClass = "button vert-center";
    let guestClass = "button vert-center";
    let libClass = "";
    if (this.props.currentUser) {
      guestClass += " hidden";
    } else {
      logoutClass += " hidden";
      libClass += "hidden";
    }
    return(
      <div className='header'>
        <nav>
          <section>
            <section className="logo">
              <span className="gg">gg</span><span className="wp">wp</span>
            </section>
            <ul className={libClass}>
              <li onClick={this.handleHome}><span className="vert-center">My Libraries</span></li>
            </ul>
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
