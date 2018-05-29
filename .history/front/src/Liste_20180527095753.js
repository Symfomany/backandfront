import React, { Component } from "react";

import "./Liste.css";
import { Link } from "react-router-dom";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.meetups.map(meetup => (
          <div key={meetup.id} className="item">
            <h4>{meetup.title}</h4>
            <p>{meetup.description}</p>
            <button className="btn btn-danger">Supprimer</button>
          </div>
        ))}
        <Link to="/create" className="btn btn-primary">
          Créer un Meetup
        </Link>
      </div>
    );
  }
}

export default Liste;
