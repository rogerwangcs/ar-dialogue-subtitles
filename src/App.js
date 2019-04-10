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
      lipCoords: [{3: {_x: 0, _y: 0}}],
      mouths: [],
      personSpeaking: -1,
      showLandmarks: false,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.lipCoords !== nextState.lipCoords) {
      this.setState(
        {
          mouths: nextState.lipCoords.map(face => this.mouthDist(face))
        }
      );
    }
  }

  mouthDist = lipsArray => {
    let x = 0;
    let y = 0;
    for (const lip of lipsArray){
        x += lip._x;
        y += lip._y;
    }
    let averageX = x/(lipsArray.length);
    let averageY = y/(lipsArray.length);

    let dist = 0;
    let maxDist = 0;
    for (const lip of lipsArray){
        const currDist = faceapi.euclideanDistance([averageX, averageY], [lip._x, lip._y]);
        dist += currDist;
        if (maxDist < currDist){
            maxDist = currDist;
        }
    }
    dist = dist/maxDist;
    return dist;
  };

  addToTranscript = (text) => {
    if (!text) return;
    this.setState({
      transcriptLog: [
        { person: this.state.personSpeaking, text: text },
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

  activeSpeakerCoords = () => {
    const { mouths, lipCoords } = this.state;
    if(mouths.length > 0) {
      let i = mouths.indexOf(Math.max(...mouths));
      if (this.state.personSpeaking !== i) {
        this.setState({personSpeaking: i});
      }
      try {
        return lipCoords[i][3];
      } catch (err) {
        // do nothing
      }
    }
    if (this.state.personSpeaking !== -1) {
      this.setState({personSpeaking: -1});
    }
    return {_x: 0, _y: 0};
  }

  render() {
    const listTranscript = this.state.transcriptLog.map(line => {
      return (
        <div>
          <span>{`Person ${line.person === -1 ? 'Offscreen' : line.person + 1}: `}</span>
          <span>{line.text}</span>
        </div>
      );
    });

    const lipCoords = this.activeSpeakerCoords();

    return (
      <div className="App" tabIndex="0" onKeyDown={(ev) => {
        //'w' key
        if (ev.keyCode === 87) {
          this.setState((state) => ({
            showLandmarks: !state.showLandmarks,
          }));
        }
      }}>
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
                  value: 15,
                  random: false
                },
                line_linked: {
                  enable: false
                },
                move: {
                  random: true,
                  speed: 3,
                  direction: "top",
                  out_mode: "out"
                }
              }
            }}
          />
        </div>
        <h1 className="header">Live Subtitles</h1>
        <Dictaphone addToTranscript={this.addToTranscript} lipCoord={lipCoords}/>
        <WebcamDisplay
          setLipCoords={this.setLipCoords}
          setFaceDescriptions={this.setFaceDescriptions}
          showLandmarks={this.state.showLandmarks}
        />
        <p style={{color: 'white'}}>Wait for the black dot to appear above your head.</p>
        <p style={{color: 'white'}}>Press 'w' to toggle face wireframe.</p>
        <div className="transcriptContainer">
          <h1>Transcript:</h1>
          {listTranscript}
        </div>
      </div>
    );
  }
}

export default App;
