import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";

class FormSignin extends Component {
  state = {
    // { username, email, password, isAdmin, history }
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    history: [],
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/profile" />;
    }

    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h2>Signin</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignin));
