
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { InformationCreateForm } from './ui-components';
import QuizPage from './Quizpage';
import React, { useState } from 'react';
import { API } from 'aws-amplify';

const App = ({ signOut, user }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [surveyData, setSurveyData] = useState(null);
  const [showSignOutButton, setShowSignOutButton] = useState(false);

  const startSurvey = () => {
    setCurrentPage('informationForm');
  };

  const handleFormSubmit = async (data) => {
    try {
      const response = await API.post('surveyAPI', '/surveys', {
        body: data
      });
      setSurveyData(response);
      setCurrentPage('quiz');
    } catch (error) {
      console.log('Error submitting survey data: ', error);
    }
  };

  const handleShowSignOutButton = (show) => {
    setShowSignOutButton(show);
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <div>
          <div className="typerwriter-container">
            <div className="typewriter">
              <h1>DIGITAL SURVEY</h1>
              <button className="start-quiz-button" onClick={startSurvey}>
                BEGIN SURVEY
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'informationForm' && (
        <div>
          <InformationCreateForm
  className="my-form"
  style={{
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '5px',
  }}
  onSubmit={handleFormSubmit}
/>

          <button className="next-button" onClick={() => {
            handleFormSubmit();
            setCurrentPage('quiz');
          }}>
            Next
          </button>
        </div>
      )}

      {currentPage === 'quiz' && (
        <div>
          <QuizPage surveyData={surveyData} signOut={signOut} onShowSignOutButton={handleShowSignOutButton} />
          {showSignOutButton && <button className="sign-out-button" onClick={signOut}>Sign out</button>}
        </div>
      )}
    </div>
  );
};

export default withAuthenticator(App);

