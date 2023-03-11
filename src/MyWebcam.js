
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  facingMode: 'user',
  height: 460,
  width: 500
};

const MyWebcam = () => {
  const webcamRef = useRef(null);
  const [recordedVideo, setRecordedVideo] = useState(null);

  const onStopRecording = (videoBlob) => {
    setRecordedVideo(videoBlob);
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMediaError={(err) => console.log(err)}
        onUserMedia={(stream) => console.log(stream)}
        onRecordingComplete={onStopRecording}
      />

      {recordedVideo && (
        <video src={URL.createObjectURL(recordedVideo)} controls />
      )}
    </>
  );
};

export default MyWebcam;


