import React, { Component } from 'react';

import DialogueBubble from './DialogueBubble';

class AudioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
    }

    this.pauseTimer = null;
  }

  componentDidMount() {
    this.detectPause();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.paused) {
      this.props.resetTranscript();
      this.setState({paused: false});
    }
    console.log('component updated');
    clearTimeout(this.pauseTimer);
    this.detectPause();
  }

  detectPause = () => {
    this.pauseTimer = setTimeout(() => {
      this.setState({paused: true}, ()=> {console.log(this.state.paused)});
    }, 1500);
  }

  render() {
    return (
      <div className="audioContainer">
        <DialogueBubble dialogue={this.props.transcript} left='600px' top='250px'/>
      </div>
    );
  }
}

export default AudioContainer;