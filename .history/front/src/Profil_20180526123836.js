import React, { Component } from "react";
import ajax from "./config";

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
  componentDidMount() {}

  /**
   * 
   */
  render() {
    return <h3>Bonjour, </h3>;
  }
}

export default Profil;
