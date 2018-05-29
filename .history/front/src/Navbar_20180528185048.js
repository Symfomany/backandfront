import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-dark  bg-primary">
        <a className="navbar-brand" href="#">
          <Profil />
        </a>
      </nav>
    );
  }
}

export default Navbar;
