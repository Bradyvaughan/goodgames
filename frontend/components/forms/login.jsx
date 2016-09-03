import React from 'react';
import { hashHistory } from 'react-router';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {username: "", password: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.login(this.state);
    document.getElementById('login').classList.toggle('hidden');
  }

  // componentDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }

  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     hashHistory.push("/home");
  //   }
  // }

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

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return(
      <div className="big-form form hidden" id="login">
          {this.renderErrors()}
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username"
            onChange={this.linkState("username")}/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"
            onChange={this.linkState("password")}/>
        </div>
        <button onClick={this.handleClick}>Log In</button>
      </div>
    );
  }
}

export default Login;
