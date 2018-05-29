import React, { Component } from "react";
import ajax from "./config";

class FormMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add(e) {
    e.preventDefault();
    console.log(this.state);
    ajax
      .post("/create", this.state)
      .then(response => {
        this.context.router.push("/");
      })
      .catch(e => alert("Erreur, veuillez réessayer plus tard"));
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
      <form onSubmit={this.add} onChange={this.handleChange}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            className="form-control"
            id="desc"
            name="description"
            placeholder="Enter description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm Meetup
        </button>
      </form>
    );
  }
}

export default FormMeetup;
