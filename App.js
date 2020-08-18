import React, { Component } from "react";
import Users from "./components/users/users";
import AddUser from "./components/AddUser";

/*import { logo } from "./logo.jpeg";*/

import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("http://localhost:56749/api/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.toString(),
        });
        console.error(error);
      });
  }

  render() {
    return (
      /*     <div class="card">
    <div class="card-body">
      <h5 class="card-title">Lucy Zhuang</h5>
      <h6>
        <a
          class="link"
          href="http://lucyzy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucy's Blog
        </a>
      </h6>
      <h6>lucy@lucyzy.com</h6>
      <p class="card-text">
        In your moments of choice, try always to choose the path that leads to
        wisdom.
      </p>
    </div>
  </div>*/
      <div>
        <div className="app">
          <AddUser />
        </div>
        <div>
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="http://lucyzy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More REACT...
        </a>
      </header>
      <p className="App-intro">
        To get stated, edit <code>src/App.js</code> and save to reload
      </p>
    </div>
  );
}*/

export default App;
