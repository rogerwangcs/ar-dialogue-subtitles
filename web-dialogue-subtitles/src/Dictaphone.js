import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <button onClick={resetTranscript}>Reset</button>
      <h1>{transcript}</h1>
    </div>
  );
};

export default SpeechRecognition(Dictaphone);