import React, { Component } from "react";
import Profil from "./Profil";
import { Link } from "react-router-dom";

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
        <Link to="/create" className="btn btn-primary">
          <i className="fa fa-plus" /> Créer un Meetup
        </Link>
      </nav>
    );
  }
}

export default Navbar;
