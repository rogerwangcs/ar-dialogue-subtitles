import React, { Component } from 'react';

class AudioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="audioContainer">
        {this.props.transcript}
      </div>
    );
  }
}

export default AudioContainer;