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

  componentDidMount() {
    this.detectPause();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.paused) {
      this.props.resetTranscript();
      this.props.addToTranscript(1, this.props.transcript);
      this.setState({ paused: false });
    }
    console.log("pause?:" + this.state.paused);
    clearTimeout(this.pauseTimer);
    this.detectPause();
  }

  detectPause = () => {
    this.pauseTimer = setTimeout(() => {
      this.setState({ paused: true });
    }, 1000);
  };

  render() {
    return (
      <div className="audioContainer">
        <DialogueBubble
          dialogue={this.props.transcript}
          left="600px"
          top="250px"
        />
      </div>
    );
  }
}

export default AudioContainer;
