/**
 * Here we have a hardcoded username and password, after successful login, 
 * we will receive JWT token as a response from a server that is saved in local storage.
 */

import React, { Component } from "react";
import axios from "axios";

class login extends Component {
  constructor() {
    super();

    this.state = {
      username: "admin",
      password: "admin"
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:8080/authenticate";

    const username = this.state.username;
    const password = this.state.password;

    const user_object = {
      username: username,
      password: password
    };

    axios.post(endpoint, user_object).then(res => {
      localStorage.setItem("authorization", res.data.token);
      return this.handleDashboard();
    });
  };

  handleDashboard() {
    axios.get("http://localhost:8080/dashboard").then(res => {
      if (res.data === "success") {
        this.props.history.push("/dashboard");
      } else {
        alert("Authentication failure");
      }
    });
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword = event => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <form className="form-signin" onSubmit={this.handleFormSubmit}>
            <h2 className="form-signin-heading">Please login</h2>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChangeUsername}
              />
            </div>
            <div className="form-group">
              <input type="password"
                className="form-control"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default login;