import React, { Component } from "react";

class FormMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
      </form>
    );
  }
}

export default FormMeetup;
