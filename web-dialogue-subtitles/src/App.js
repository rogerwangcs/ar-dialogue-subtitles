import React, { Component } from "react";
import * as faceapi from "face-api.js";
import Particles from "react-particles-js";

import Dictaphone from "./Dictaphone.js";
import WebcamDisplay from "./WebcamDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transcriptLog: [
        // { person: "Person 1", text: "hey my name is roger" },
        // { person: "Person 2", text: "hey my name is john" }
      ],
      faceDescriptions: [],
      lipCoords: [{0: {_x: 0, _y: 0}}],
      mouths: [],
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.lipCoords !== nextState.lipCoords) {
      this.setState(
        {
          mouths: nextState.lipCoords.map(face => this.mouthDist(face))
        },
        // () => console.log(this.state.lipCoords)
      );
    }
  }

  mouthDist = lipsArray => {
    let x = 0;
    let y = 0;
    for (const lip of lipsArray) {
      x += lip._x;
      y += lip._y;
    }
    let averageX = x / lipsArray.length;
    let averageY = y / lipsArray.length;

    let dist = 0;
    for (const lip of lipsArray) {
      dist += faceapi.euclideanDistance([averageX, averageY], [lip._x, lip._y]);
    }
    return dist;
  };

  addToTranscript = (person, text) => {
    if (!text) return;
    this.setState({
      transcriptLog: [
        { person: person, text: text },
        ...this.state.transcriptLog
      ]
    });
  };

  setLipCoords = lipCoords => {
    this.setState({ lipCoords });
  };
  setFaceDescriptions = faceDescriptions => {
    this.setState({ faceDescriptions });
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
                  value: 60
                },
                color: {
                  value: "#648be5"
                },
                size: {
                  value: 10,
                  random: false
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
        <Dictaphone addToTranscript={this.addToTranscript} lipCoord={this.state.lipCoords[0][0]}/>
        <WebcamDisplay
          setLipCoords={this.setLipCoords}
          setFaceDescriptions={this.setFaceDescriptions}
        />
        <div className="transcriptContainer">
          <h1>Transcript:</h1>
          {listTranscript}
        </div>
      </div>
    );
  }
}

export default App;
