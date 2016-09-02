import React from 'react';
import LoginContainer from './forms/login_container';
import SignUpContainer from './forms/sign_up_container';
import { hashHistory } from 'react-router';


class App extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleHome(e) {
    e.preventDefault();
    hashHistory.push('/home');
  }

  render(){

    return(
      <div className='header'>
        <nav>
          <section>
            <section className="logo">
              <span className="gg">gg</span><span className="wp">wp</span>
            </section>
            <ul>
              <li onClick={this.handleHome}><span className="vert-center">Home</span></li>
              <li><span className="vert-center">My Games</span></li>
            </ul>
            <p className="search-bar">
              <label className="vert-center">Search:</label>
              <input className="vert-center" type="text"/>
            </p>
          </section>
          <p className="button vert-center" onClick={this.handleLogout}>
            Sign Out
          </p>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
