import React, { Component } from "react";
import Particles from "react-particles-js";

import Dictaphone from "./Dictaphone.js";
import WebcamDisplay from "./WebcamDisplay";
import DialogueBubble from "./DialogueBubble";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transcriptLog: [
        { person: "Person 1", text: "hey my name is roger" },
        { person: "Person 2", text: "hey my name is john" }
      ]
    };
  }

  addToTranscript = (person, text) => {
    if (!text) return;
    this.setState({
      transcriptLog: [
        { person: person, text: text },
        ...this.state.transcriptLog
      ]
    });
  };

  render() {
    const listTranscript = this.state.transcriptLog.map(line => {
      return (
        <div>
          <span>{`Person ${line.person}: `}</span>
          <span>{line.text}</span>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="background">
          <Particles
            params={{
              particles: {
                number: {
                  value: 80
                },
                color: {
                  value: "#ccffff"
                },
                size: {
                  value: 5,
                  random: false,
                },
                line_linked: {
                  enable: false
                },
                move: {
                  random: true,
                  speed: 0.25,
                  direction: "top",
                  out_mode: "out"
                }
              }
            }}
          />
        </div>
        <h1 className="header">Live Subtitles</h1>
        {/* <Dictaphone addToTranscript={this.addToTranscript} /> */}
        <WebcamDisplay />
        <div className="transcriptContainer">
          <h1>Transcript:</h1>
          {listTranscript}
        </div>
      </div>
    );
  }
}

export default App;
