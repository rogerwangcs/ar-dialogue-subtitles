import React, { Component } from 'react';
import Dictaphone from './Dictaphone.js';
import WebcamDisplay from './WebcamDisplay';
import DialogueBubble from './DialogueBubble';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Live Dialogue Subtitles!</h1>
        <WebcamDisplay/>
        <Dictaphone/>
        <DialogueBubble dialogue='this is testing a really long dialogue message spoke by someone on the right side' left={550} top={300}/>
      </div>
    );
  }
}

export default App;
