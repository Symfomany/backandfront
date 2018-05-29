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
    this.props.history.push({
      pathname: "/create",
      update: true,
      state: { meetup }
    });
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
        {this.props.meetups.length === 0 && (
          <div className="alert alert-danger">
            Aucun Meetup de prévu à l'horizon
          </div>
        )}
        {this.props.meetups.length > 0 &&
          this.props.meetups.map(meetup => (
            <div key={meetup.id} className="item">
              <h4>{meetup.title}</h4>
              <p>{meetup.description}</p>
              <Link to={`/update/${meetup.id}`} className="btn btn-primary">
                Modifier
              </Link>
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
