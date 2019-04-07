import React from "react";
import SpeechRecognition from "react-speech-recognition";

import AudioContainer from "./AudioContainer";

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  addToTranscript
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      {/* <button onClick={resetTranscript}>Reset</button> */}
      <AudioContainer
        transcript={transcript}
        addToTranscript={addToTranscript}
        resetTranscript={resetTranscript}
      />
    </div>
  );
};

export default SpeechRecognition(Dictaphone);
