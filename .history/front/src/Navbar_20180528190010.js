import React, { Component } from "react";
import Profil from "./Profil";
import "./Navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar ">
        <a className="navbar-brand" href="#">
          <Profil />
        </a>
      </nav>
    );
  }
}

export default Navbar;
