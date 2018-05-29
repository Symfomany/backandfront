import React, { Component } from "react";

class Profil extends Component {
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
  render() {
    return <h3>Bonjour, </h3>;
  }
}

export default Profil;
