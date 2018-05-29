import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profil from "./Profil";
import Liste from "./Liste";
import FormMeetup from "./FormMeetup";

import ajax from "./config";
import { Link, Route } from "react-router-dom";

class App extends Component {
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      meetups: []
    };
    this.refresh = this.refresh.bind(this);
  }

  /**
   * fetch api
   */
  componentDidMount() {
    ajax.get("/liste").then(res => this.setState({ meetups: res.data }));
  }

  refresh(meetups) {
    console.log(meetup);
  }

  render() {
    const MyListe = props => {
      return (
        <Liste remove={this.remove} meetups={this.state.meetups} {...props} />
      );
    };

    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Profil />
        <hr className="clear" />
        <Route exact path="/" render={MyListe} />
        <Route path="/create" component={FormMeetup} />
      </div>
    );
  }
}

export default App;
