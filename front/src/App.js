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
    return (
      <div>
        <Navbar />

        <div className="container">
          <Route
            exact
            path="/"
            render={props => (
              <Liste
                {...props}
                refresh={this.refresh}
                meetups={this.state.meetups}
              />
            )}
          />

          <Route
            path="/create"
            render={props => <FormMeetup {...props} refresh={this.refresh} />}
          />
          <Route
            path="/update/:id"
            render={props => <FormMeetup {...props} refresh={this.refresh} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
