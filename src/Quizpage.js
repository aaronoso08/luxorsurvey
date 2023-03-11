
import React, { useState, useRef } from 'react';
import './PopUp.css';
import './QuizPage.css';
import './style.css';
import './QuizQuestion.css';
import ProgressBar from './ProgressBar';
import MyWebcam from './MyWebcam';
import Modal from 'react-bootstrap/Modal';



import {Answer1} from './ui-components';
import {Answerfulladdress} from './ui-components';
import {Answer2} from './ui-components';
import {Answer4} from './ui-components';
import {Answer5} from './ui-components';
import {Answer6} from './ui-components';


const QuizPage = ({ surveyData, signOut }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [recording, setRecording] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const videoRef = useRef(null);

  const questions = [

    {
      question1: "Hi thank you for choosing Luxor Energy the most reliable solar provider in North America. This call is being recorded for quality assurance. Do we have your permission to proceed?",
      question2: "To record your response, press Video response",
      video: "https://luxorsurveyapp-storage-48413d43211922-luxordev.s3.amazonaws.com/public/questionone.mp4",
      webcamContent: <Answer1 className="my-form"
      style={{
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '5px',
        marginBottom: '28px',
        width: '304px',
      height: '148px',
      }}/>,

      
    },
    {
      question1: "Please state the address where your solar project will be taking place",
      question2: "To submit your answer, simply press the Video Response button and submit your address.",
      video: "https://luxorsurveyapp-storage-48413d43211922-luxordev.s3.amazonaws.com/public/questiontwo.mp4",
      webcamContent: <Answerfulladdress className="my-form"
      style={{
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '5px',
        marginBottom: '25px',
        width: '304px',
      height: '160px',
      }}/>,
      
    },
    {
      question1: "Following questions may be answered either yes or no. Luxor Energy does not guarantee a specific panel or the exact number of panels. Luxor Energy will install the exact system size or larger that was sold by your representative. Is that correct?",
      question2: "To record your response, press Video response",
      video: "https://luxorsurveyapp-storage-48413d43211922-luxordev.s3.amazonaws.com/public/questionthree.mp4",
      webcamContent: <Answer2 className="my-form"
      style={{
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '5px',
        marginBottom: '28px',
        width: '304px',
      height: '148px',
      }}/>,
      
    },
    {
      question1: "Luxor Energy will install panels on planes most suitable for your home's location. For maximum production. And the most efficient layout. While complying with any and all applicable building code regulations. Is that correct?",
      question2: "To record your response, press Video response",
      video: "https://luxorsurveyapp-storage-48413d43211922-luxordev.s3.amazonaws.com/public/questionfour.mp4",
      webcamContent: <Answer4 className="my-form"
      style={{
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '5px',
        marginBottom: '28px',
        width: '304px',
      height: '148px',
      }}/>,
    },
    {
      question1: "Does Luxor Energy have permission to install without anyone being home? Yes or no",
      question2: "To record your response, press Video response",
      video: "https://luxorsurveyapp-storage-48413d43211922-luxordev.s3.amazonaws.com/public/questionfive.mp4",
      webcamContent: <Answer4 className="my-form"
      style={{
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '5px',
        marginBottom: '28px',
        width: '304px',
      height: '148px',
      }}/>,
    },
    {
      question1: "Will the gate be open for installation?",
      question2: "To provide your response, you can utilize the Video Response feature by pressing the designated button",
      video: "https://luxorsurveyapp-storage-48413d43211922-luxordev.s3.amazonaws.com/public/questionsix.mp4",
      webcamContent: <Answer5 />,
     
 
    },
    { 
      question1: "Did your sales representative promise you anything that was not written in your install agreement? Yes or no.",
      question2: "To record your response, press Video response",
      video: "https://luxorsurveyapp-storage-48413d43211922-luxordev.s3.amazonaws.com/public/questionseven.mp4",
      webcamContent:  <Answer6 className="my-form"
      style={{
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '5px',
        marginBottom: '28px',
        width: '304px',
      height: '148px',
      }}/>,
  
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setVideoPlayed(false);
      setRecording(false); // add this line to reset the recording state
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextQuestion();
  };

  const handleStartRecording = () => {
    setRecording(true);
    setVideoPlayed(true);
  };



  return (
    <div className="quiz-page">
      {recording ? (
        
<div className="recording-container">
  <div className="background-video-container">
    <div className="webcam-wrapper">
      <MyWebcam content={questions[currentQuestion].webcamContent} />
      <div className="stop-recording-button">
        <button className="recording-button" onClick={() => setRecording(false)}>
          Close
        </button>
      </div>
    </div>
  </div>
  <div className="submit-button-container">

  </div>
  <div className="submit-addressanswer">
    {questions[currentQuestion].webcamContent}
  </div>
</div>

        
      ) : (
        <div className="question-container">
          <video
            src={questions[currentQuestion].video}
            controls
            autoPlay={!videoPlayed}
            ref={videoRef}
            className="question-video"
          />
          <form onSubmit={handleSubmit} className="form">
            <h2 className="question-text">{questions[currentQuestion].question1}</h2>
            <h2 className="question-text">{questions[currentQuestion].question2}</h2>
            {!recording && questions[currentQuestion].response}
            <div className="form-container">
              <div className="left-button-container">
                <button className="left-button" onClick={handleStartRecording}>
                {questions[currentQuestion].responseButtonLabel}
                  Video Response
                </button>
              </div>
              {currentQuestion !== questions.length - 1 && (
                <div className="right-button-container">
                  <button className="right-button" type="button" onClick={handleNextQuestion}>
                    Next
                  </button>
                </div>
              )}
            </div>
            <div className="progress-bar-container">
              <ProgressBar currentQuestion={currentQuestion} totalQuestions={questions.length} />
            </div>
          </form>
          {currentQuestion === questions.length - 1 && (
            <div className="submit-button-container">
              <button className="submit-button" onClick={() => setShowModal(true)}>
                submit survey
              </button>
            </div>
          )}
        </div>
      )}
{showModal && (
  <Modal show={showModal} onHide={() => setShowModal(false)} centered>
    <Modal.Header>
    <Modal.Title></Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <div className="message">
      We appreciate you taking the time to complete the survey. Please return the device to the sales representative
    </div>
    <button className="sign-out-button" onClick={signOut}>
              Sign out
            </button>
    </Modal.Body>
  </Modal>
)}
  </div>
);
};

export default QuizPage;


//fdfadfsdfasdfsd



