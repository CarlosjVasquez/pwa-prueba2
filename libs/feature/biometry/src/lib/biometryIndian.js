import React, { createRef, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
// import * as tf from "@tensorflow/tfjs";
import * as blazeface from '@tensorflow-models/blazeface';
import { checkBoxesCenter, drawRect, dataURLtoFile } from './utils';
import siteConfig from './services/config';
let predictionInterval;
//let net;

const maxFrames = 4;

const initialState = {
  warningText: 'Loading ...',
  countFrames: maxFrames,
  selected: 'register',
};

class BiometricIndian extends React.Component {
  constructor(props) {
    super(props);
    this.webcamRef = React.createRef(null);
    // this.canvasRef = React.createRef(null);
  }

  state = initialState;
  videoWidth = siteConfig.VIDEO_WIDTH();
  videoHeight = siteConfig.VIDEO_HEIGHT();
  videoConstraints = {
    width: this.videoWidth,
    height: this.videoHeight,
  };

  componentDidMount = () => {
    this.runBlazeFace();
  };
  componentWillUnmount() {
    console.log('desmontando');
    this.setState(initialState);
  }

  runBlazeFace = async () => {
    const net = await blazeface.load();

    predictionInterval = setInterval(() => {
      this.detect(net);
    }, 500);
  };

  detect = async (net) => {
    if (
      typeof this.webcamRef.current !== 'undefined' &&
      this.webcamRef.current !== null &&
      this.webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = this.webcamRef.current.video;
      let umbral = 0.89;
      // const videoWidth = this.webcamRef.current.video.videoWidth;
      // const videoHeight = this.webcamRef.current.video.videoHeight;

      // Set video width
      // this.webcamRef.current.video.width = videoWidth;
      // this.webcamRef.current.video.height = videoWidth;

      // Set canvas height and width
      // this.canvasRef.current.width = videoWidth / 2;
      // this.canvasRef.current.height = videoHeight/2;

      // Make Detections
      const obj = await net.estimateFaces(video);

      if (this.webcamRef?.current && video) {
        const { setMessage, handleUserMedia } = this.props;
        // const ctx = this.canvasRef.current?.getContext("2d");
        // ctx.strokeStyle = 'transparent'
        // ctx.beginPath();
        // ctx.lineWidth = 5;
        if (siteConfig.DEVICE() === 'Mobile') {
          umbral = 0.8;
        }
        // console.log("umbral", umbral)
        // console.log("siteConfig", siteConfig.DEVICE())

        // let radiusX = this.videoWidth / 2 - siteConfig.PERCENTAGE_DISTANCE_FROM_BORDER() * this.videoWidth / 100;
        // let radiusY = this.videoHeight / 2 - siteConfig.PERCENTAGE_DISTANCE_FROM_BORDER() * this.videoHeight / 100;
        // ctx.ellipse(this.videoWidth/2, this.videoHeight/2, radiusX, radiusY , 0, 0, 2 * Math.PI, false );
        // ctx.stroke();
        //console.log(obj);
        if (this.state.countFrames < 0) {
          this.setState({ countFrames: maxFrames });
        }
        if (obj.length !== 0 && obj[0].probability[0] > umbral) {
          let imageWidth = this.videoWidth;
          let faceWidth = obj[0].bottomRight[0] - obj[0].topLeft[0];
          let faceSize = (faceWidth / imageWidth) * 100;
          // Draw box
          // ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);

          // drawRect(obj, ctx);
          console.log('Validando centro', checkBoxesCenter(obj[0]));
          if (checkBoxesCenter(obj[0])) {
            this.setState({ warningText: '' });
            const counter =
              this.state.countFrames > 0 ? this.state.countFrames : 5;
            setMessage('No te muevas ' + (counter - 1));
            this.setState((prevState) => {
              return { ...prevState, countFrames: prevState.countFrames - 1 };
            });
          } else {
            this.setState({
              warningText: 'MOVE TO CENTER',
              countFrames: maxFrames,
            });
            setMessage('Centra tu rostro');
          }
          console.error('faceSize', faceSize);

          if (faceSize < siteConfig.MIN_FACE_SIZE) {
            this.setState({ warningText: 'MOVE CLOSER' });
            setMessage('Acércate más');
            this.setState({ countFrames: maxFrames });
          }
          if (faceSize > siteConfig.MAX_FACE_SIZE) {
            this.setState({ warningText: 'MOVE FAR' });
            setMessage('Estás muy cerca');
            this.setState({ countFrames: maxFrames });
          }

          if (this.state.countFrames === 0) {
            // Process Request
            this.setState({ capture: this.webcamRef.current.getScreenshot() });

            clearInterval(predictionInterval);
            // handle API POST Request
            const screenShot = this.webcamRef.current.getScreenshot();
            this.handlePostRequest(screenShot);
            if (handleUserMedia) {
              handleUserMedia(screenShot);
            }
            setMessage('');
            this.setState(initialState);
          }
        } else {
          if (this.state.countFrames < 1) {
            setMessage('Centra tu cara');
            this.setState({ countFrames: maxFrames, warningText: '' });
          } else {
            setMessage('Enfoca tu rostro');
            this.setState({ countFrames: maxFrames, warningText: '' });
          }
        }
      }
    }
  };

  handlePostRequest = async (screenShot) => {
    var file = dataURLtoFile(screenShot, 'image.png');

    const body = new FormData();
    body.append('image', file);
    body.append('username', 'store.step.uid');
  };

  render() {
    return (
      <>
        {/* <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%'
      }}>
          <h3 style={{ color: 'red'}}>{this.state.warningText || "..."}</h3>
      </div> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            margin: '0px auto',
            backgroundSize: 'cover',
            left: 0,
            position: 'absolute',
            objectFit: 'cover',
            right: 0,
            bottom: 0,
            // height: 150,
            // justifyContent: 'center'
          }}
        >
          <Webcam
            audio={false}
            forceScreenshotSourceSize={true}
            videoConstraints={this.videoConstraints}
            screenshotFormat="image/png"
            ref={this.webcamRef}
            className="camera"
            height={this.videoHeight}
            width={this.videoWidth}
            // playsinline
            minScreenshotHeight={this.videoHeight}
            minScreenshotWidth={this.videoWidth}
            screenshotQuality={1}
            // onUserMedia={handleUserMedia}
            style={{
              left: '50%',
              position: 'absolute',
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              right: 0,
              bottom: 0,
              backgroundSize: 'cover',
              overflow: 'hidden',
            }}
          />
          {/* <canvas
            ref={this.canvasRef}
            width={this.videoConstraints.width}
            height={this.videoConstraints.height}
            minScreenshotHeight={this.videoHeight}
            minScreenshotWidth={this.videoWidth}
            style={{
              left: 0,
              position: "absolute",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              right: 0,
              bottom: 0,
              backgroundSize: "cover",
              overflow: "hidden"
            }}
        /> */}
        </div>
      </>
    );
  }
}

export default BiometricIndian;
