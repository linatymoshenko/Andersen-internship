import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value });

  }
  handleChangeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  handleChangeAge(event) {
    this.setState({ age: event.target.value });
  }

  handleSubmit(event) {
    alert(`A user was submitted: ${this.state.firstName} ${this.state.lastName}, ${this.state.age} years old.`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
            </label>
            <input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
            <label>
              Last Name:
            </label>
            <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
            <label>
              Age:
            </label>
            <input type="number" min="0" value={this.state.age} onChange={this.handleChangeAge} />
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
