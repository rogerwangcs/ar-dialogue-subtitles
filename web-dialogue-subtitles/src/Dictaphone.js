import React from "react";
import SpeechRecognition from "react-speech-recognition";

import AudioContainer from './AudioContainer';

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
      <AudioContainer transcript={transcript} resetTranscript={resetTranscript}></AudioContainer>
    </div>
  );
};

export default SpeechRecognition(Dictaphone);