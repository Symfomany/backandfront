import React, { Component } from "react";
import ajax from "./config";
import "./Liste.css";
import { Link } from "react-router-dom";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.remove = this.remove.bind(this);
  }

  update(meetup) {
    this.props.history.push("/create");
  }

  remove(meetup) {
    ajax
      .get(`/remove/${meetup.id}`)
      .then(response => {
        this.props.refresh(response.data);
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
            <button onClick={e => this.update(meetup)} className="btn btn-info">
              Modifier
            </button>
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
