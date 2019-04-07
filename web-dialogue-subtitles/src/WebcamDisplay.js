// import '@tensorflow/tfjs-node';
import React, { Component } from 'react';
import * as faceapi from 'face-api.js';
import WebCamPicture from './components/WebCamPicture.js';

const MODEL_URL = '/weights'
const minConfidence = 0.6

class WebcamDisplay extends Component {

  constructor(props){
    super(props);
    this.fullFaceDescriptions = null;
    this.canvas = React.createRef();
    this.canvasPicWebCam = React.createRef();
  }

  async componentDidMount() {
    await this.loadModels();
  }

  async loadModels () {
    //await faceapi.loadModels(MODEL_URL)
    await faceapi.loadFaceDetectionModel(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
  }

  getFullFaceDescription = async (canvas) => {
    // console.log(canvas);
    this.fullFaceDescriptions = await faceapi.allFaces(canvas, minConfidence);
    console.log(this.fullFaceDescriptions);
    // console.log(JSON.stringify(this.fullFaceDescriptions[0].landmarks.getMouth()));
  }

  drawDescription = (canvas) => {
    this.fullFaceDescriptions.forEach((fd, i) => {
      faceapi.drawLandmarks(canvas, fd.landmarks, { drawLines: true })
    })
  }

  drawHTMLImage(canvas,image,width,height){
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image,0,0,width,height);
  }

  landmarkWebCamPicture = async (webcam) => {
    const ctx = this.canvasPicWebCam.current.getContext("2d");
    ctx.clearRect(0, 0, this.canvasPicWebCam.current.width, this.canvasPicWebCam.current.height);
    const describe = async () => {
      await this.getFullFaceDescription(webcam.video);
      this.drawDescription(this.canvasPicWebCam.current);
    };
    await describe();
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <WebCamPicture style={{ position: 'absolute', top: 0, left: 0 }} landmarkPicture={this.landmarkWebCamPicture} />
          <canvas style={{ position: 'absolute', top: 0, left: 0 }} ref={this.canvasPicWebCam} width={640} height={480} />
        </div>
      </div>
    );
  }
}

export default WebcamDisplay;
