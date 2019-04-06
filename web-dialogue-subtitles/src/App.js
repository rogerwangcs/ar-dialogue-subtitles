import React, { Component } from 'react';
import Dictaphone from './Dictaphone.js';
import WebcamDisplay from './WebcamDisplay';
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
      </div>
    );

  }
}

export default App;
