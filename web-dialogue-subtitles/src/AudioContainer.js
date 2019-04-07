import React, { Component } from "react";

import DialogueBubble from "./DialogueBubble";

class AudioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false
    };

    this.pauseTimer = null;
  }

  componentWillReceiveProps(newProps) {
    if(newProps.transcript !== this.props.transcript) {
      clearTimeout(this.pauseTimer);
      this.startTimer();
    }
  }

  startTimer = () => {
    this.pauseTimer = setTimeout(() => {
      this.props.addToTranscript(this.props.transcript);
      this.props.resetTranscript();
    }, 1500);
  };

  render() {
    return (
      <div className="audioContainer">
        <DialogueBubble
          dialogue={this.props.transcript}
          left={this.props.lipCoord._x}
          top={this.props.lipCoord._y}
        />
      </div>
    );
  }
}

export default AudioContainer;
