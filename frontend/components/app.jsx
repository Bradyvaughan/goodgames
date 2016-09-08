import React from 'react';
import LoginContainer from './forms/login_container';
import SignUpContainer from './forms/sign_up_container';
import { hashHistory, withRouter } from 'react-router';
import LibraryIndexContainer from './libraries/library_index_container';
import LibraryFormContainer from './forms/library_form_container';
import GamesIndexContainer from './games/games_index_container';


class App extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleNewLib = this.handleNewLib.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {q: ""};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearGames();
    this.props.router.push({
      pathname: "/search",
      query: this.state
    });
    this.props.getSearch(this.state.q, 1);
  }

  handleChange(e) {
    this.setState({q: e.currentTarget.value});
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
    let libClass = "xz vert-center";
    let welcome = "";
    if (this.props.currentUser) {
      guestClass += " hidden";
      welcome = `Welcome, ${this.props.currentUser.username}`;
    } else {
      logoutClass += " hidden";
      libClass += " hidden";
    }

    let finalBit = this.props.children;
    if (!this.props.currentUser && !window.location.hash.match(new RegExp("/games"))) {
      finalBit = <GamesIndexContainer/>;
    }
    return(
      <div className='header'>
        <nav>
          <section>
            <section className="logo" onClick={this.handleHome}>
              <span className="gg">gg</span><span className="wp">wp</span>
            </section>
            <div className={libClass}>
              <div className="lib-dropdown">
                <span className="vert-center button">My Categories</span>
                <LibraryIndexContainer />
              </div>
              <LibraryFormContainer />
            </div>
            <form className="search-bar" onSubmit={this.handleSubmit}>
              <label className="vert-center">Search:</label>
              <input className="bar vert-center" type="text" onChange={this.handleChange}/>
              <input type="submit" className="vert-center button" value="Search"/>
            </form>
          </section>

          <span className="vert-center">
            {welcome}
          </span>


          <section className="buttons">

            <p className={guestClass} onClick={this.handleGuest}>
              Guest Log In
            </p>
            <p className={logoutClass} onClick={this.handleLogout}>
              Log Out
            </p>
            <LoginContainer />
            <SignUpContainer />
          </section>
        </nav>
        <div className="children">
          {finalBit}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
