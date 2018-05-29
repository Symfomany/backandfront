import React, { Component } from "react";
import ajax from "./config";
import Meetup from "./Meetup";
import "./Liste.css";
import { Link } from "react-router-dom";
import AnimatedWrapper from "./AnimatedWrapper";

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
        <div className="row">
          {this.props.meetups.length === 0 && (
            <div className="alert alert-danger">
              Aucun Meetup de prévu à l'horizon
            </div>
          )}
          {this.props.meetups.length > 0 &&
            this.props.meetups.map(meetup => (
              <Meetup remove={this.remove} meetup={meetup} key={meetup.id} />
            ))}
        </div>
      </div>
    );
  }
}

export default AnimatedWrapper(Liste);
