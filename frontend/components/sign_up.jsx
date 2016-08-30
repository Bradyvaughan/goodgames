import React from 'react';

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {username: "", password: "", email: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return(
      <div className="big-form form">

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
          <button onClick={this.handleClick}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
