const MODEL_URL = './weights'

$(document).ready(function() {
  run()
})

async function run() {
  // load the models
  await faceapi.loadMtcnnModel(MODEL_URL)
  await faceapi.loadFaceRecognitionModel(MODEL_URL)

  // try to access users webcam and stream the images
  // to the video element
  const videoEl = document.getElementById('inputVideo')
  navigator.getUserMedia(
    { video: {} },
    stream => videoEl.srcObject = stream,
    err => console.error(err)
  )
}
