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
      <div>
        <label>
          Username
          <input type="text" onChange={this.linkState("username")}/>
        </label>
        <label>
          Email
          <input type="text" onChange={this.linkState("email")}/>
        </label>
        <label>
          Password
          <input type="password" onChange={this.linkState("password")}/>
        </label>
        <input type="submit" value="Sign Up" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default SignUp;
