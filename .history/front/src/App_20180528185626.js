import React, { Component } from "react";
import Liste from "./Liste";
import FormMeetup from "./FormMeetup";
import Navbar from "./Navbar";
import ajax from "./config"; // configuration of Ajax
import { Route } from "react-router-dom";
import "./App.css";
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
    /**
     * Syntaxe Fonctionnelle d'un composant
     * Différent rendus de composant avec props
     * (HOC simple)
     */
    const MyListe = props => {
      return (
        <Liste refresh={this.refresh} meetups={this.state.meetups} {...props} />
      );
    };
    const MeetupForm = props => {
      return <FormMeetup refresh={this.refresh} {...props} />;
    };

    return (
      <div className="container">
        <Navbar />

        {/* Declarations of Routes  --> */}

        <Route exact path="/" render={MyListe} />
        <Route path="/create" render={MeetupForm} />
        <Route path="/update/:id" render={MeetupForm} />
      </div>
    );
  }
}

export default App;
