import React from 'react';
import { hashHistory } from 'react-router';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: "", email: ""};
    this.handleClick = this.handleClick.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.signUp(this.state);
    // document.getElementById('signUp').classList.toggle('hidden');
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
    return(
      <div className="big-form form hidden" id="signUp">
          {this.renderErrors()}
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username"
            onChange={this.linkState("username")}/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email"
            onChange={this.linkState("email")}/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"
            onChange={this.linkState("password")}/>
        </div>
        <button onClick={this.handleClick}>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
