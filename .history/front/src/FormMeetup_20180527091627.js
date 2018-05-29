import React, { Component } from "react";

class FormMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add(e) {
    e.preventDefault();
  }

  handleChange(e) {}

  render() {
    return (
      <form onSubmit={this.add} onChange={this.handleChange}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            type="email"
            className="form-control"
            id="desc"
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
