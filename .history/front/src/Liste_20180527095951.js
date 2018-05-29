import React, { Component } from "react";
import ajax from "./config";
import "./Liste.css";
import { Link } from "react-router-dom";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  remove() {
    ajax
      .post("/create", this.state)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(e => alert("Erreur, veuillez réessayer plus tard"));
  }

  render() {
    return (
      <div>
        {this.props.meetups.map(meetup => (
          <div key={meetup.id} className="item">
            <h4>{meetup.title}</h4>
            <p>{meetup.description}</p>
            <button
              onClick={e => this.remove(meetup)}
              className="btn btn-danger"
            >
              Supprimer
            </button>
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
