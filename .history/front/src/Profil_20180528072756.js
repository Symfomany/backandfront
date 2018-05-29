import React, { Component } from "react";
import ajax from "./config";
import Loader from "./Loader";

class Profil extends Component {
  /**
 * Init
 */
  constructor(props) {
    super(props);
    this.state = {
      profil: {}
    };
  }

  /**
     * fetch api
     */
  componentDidMount() {
    ajax.get("/").then(res => this.setState({ profil: res.data }));
    ajax.get("/liste").then(res => this.setState({ meetups: res.data }));
  }

  /**
   * 
   */
  render() {
    return this.state.profil.username ? (
      <h4>Bonjour {this.state.profil.username}</h4>
    ) : (
      <Loader />
    );
  }
}

export default Profil;
