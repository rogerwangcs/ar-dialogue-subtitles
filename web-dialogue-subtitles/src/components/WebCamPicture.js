import React, { Component } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: 'user',
};

export default class WebCamPicure extends Component {
  constructor(props){
    super(props);
    this.state = {
      takingPicture: false
    }
    this.image = null;
    this.webcam = React.createRef();
    this.ready = true;
  }

  componentDidMount() {
    // setInterval(this.capture, 0);
    this.capture();
  }

  capture = async () => {
    const imageSrc = this.webcam.current.getScreenshot();
    if (!imageSrc) {
      return setTimeout(this.capture, 1000);
    }
    // console.log("Take Picture");
    await this.props.landmarkPicture(this.webcam.current);
    setTimeout(this.capture, 0);
  };

  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Webcam
          audio={false}
          height={480}
          ref={this.webcam}
          screenshotFormat="image/webp"
          width={640}
          videoConstraints={videoConstraints}
        />
      </div>
    );
  }
}
