import React from 'react';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {username: "", password: ""};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return(
      <div className="small-form form">
        <label>
          <span>Username: </span>
          <input type="text" onChange={this.linkState("username")}/>
        </label>
        <label>
          <span>Password: </span>
          <input type="password" onChange={this.linkState("password")}/>
        </label>
        <input type="submit" value="Log In" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Login;
