import "./App.css";
import React, { Component } from "react";

export class AppInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
    };
  }

  handleEmailChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      email: event.target.value,
    });
  };

  handleFirstNameChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  // onClick Verson:
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleOnClickSubmit = (event) => {
    // Will send data to the backend onClick
  };

  // Handles all onChange for the inputs
  handleOnChange = (event) => {
    this.setState({
      //  You have to use the [] to get the event.target.name
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <label>Email: </label>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          placeholder="Email"
        ></input>
        <p>{this.state.email}</p>

        {/* {onSubmit Version} */}
        <form onSubmit={this.handleOnSubmit}>
          {/* <label>First Name: </label> */}
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
            placeholder="First Name"
          ></input>
          <button>Submit</button>
        </form>

        {/* {onClick Version} */}
        <br />
        {/* <label>Last Name: </label> */}
        <input
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
          placeholder="Last Name"
        />

        <button onClick={this.handleOnClickSubmit}>Submit</button>

        {/* Using one onChange for all inputs Version */}
        {/* Consolidated Version of examples above */}

        <form>
          <br />
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            placeholder="Email"
          />
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleOnChange}
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleOnChange}
            placeholder="Last Name"
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AppInput;
