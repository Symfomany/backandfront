import React, { Component } from 'react';

import loader from "loader.gif"

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <img src={loader} />>
        );
    }
}

export default Loader;