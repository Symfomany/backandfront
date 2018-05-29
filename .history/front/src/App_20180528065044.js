import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profil from "./Profil";
import Liste from "./Liste";
import FormMeetup from "./FormMeetup";

import ajax from "./config"; // configuration of Ajax
import { Link, Route } from "react-router-dom";

/**
 * Class App
 */
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
   * Fetch api
   * Une fois que le composant est monté
   */
  componentDidMount() {
    ajax.get("/liste").then(res => this.setState({ meetups: res.data }));
  }

  /**
   * Refresh all meetups after actions
   */
  refresh(meetups) {
    this.setState({
      meetups
    });
  }

  /**
   * Render App
   */
  render() {
    const MyListe = props => {
      return (
        <Liste refresh={this.refresh} meetups={this.state.meetups} {...props} />
      );
    };
    const CreateForm = props => {
      return <FormMeetup refresh={this.refresh} {...props} />;
    };

    const UpdateForm = props => {
      return <FormMeetup update="true" refresh={this.refresh} {...props} />;
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
        <Route path="/create" render={CreateForm} />
        <Route path="/update/:id" render={UpdateForm} />
      </div>
    );
  }
}

export default App;
