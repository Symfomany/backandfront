import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profil from "./Profil";
import Liste from "./Liste";
import ajax from "./config";

class App extends Component {
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      meetups: []
    };
  }

  /**
   * fetch api
   */
  componentDidMount() {
    ajax.get("/liste").then(res => this.setState({ meetups: res.data }));
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Profil />
        <Liste meetups={this.state.meetups} />
        <button class="btn btn-primary">Créer un Meetup</button>
      </div>
    );
  }
}

export default App;
