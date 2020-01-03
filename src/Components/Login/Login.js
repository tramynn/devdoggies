import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome Back!</h1>
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>LOGIN</button>
        </form>
      </div>);
  }
}

export default Login;
