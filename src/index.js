import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { ThemeProvider, createTheme } from '@aws-amplify/ui-react';
import { studioTheme } from './ui-components';
import awsconfig from './aws-exports';
import './QuizPage.css';


Amplify.configure(awsconfig); 

const updatedTheme = createTheme({
  name: 'my-theme-updates',
  tokens: {
    global: {
      body: {
        backgroundColor: {
          value: '#f5f5f5',
        },
      },
    },
    
    components: {
      button: {
        primary: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
          fontWeight: {
            value: '600',
          },
        },
      },
      answers: {
        answer1: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
        },
        answerfulladdress: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
        },
        informationcreateform: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
          padding: {
            value: '20px',
          },
          boxShadow: {
            value: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          },
          fontFamily: {
            value: 'Arial, sans-serif',
          },
          fontSize: {
            value: '16px',
          },
          width: {
            value: '80%',
          },
          border: {
            value: '1px solid #ccc',
          },
          textTransform: {
            value: 'uppercase',
          },
          textAlign: {
            value: 'center',
          },
          transition: {
            value: 'all 0.3s ease',
          },
        },
        answer2: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
        },
        answer4: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
        },
        answer5: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
        },
        answer6: {
          backgroundColor: {
            value: '#5a5858',
          },
          color: {
            value: '#fff',
          },
          borderRadius: {
            value: '5px',
          },
        },
      },
    },
  },
}, studioTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={updatedTheme}>
    <App />
  </ThemeProvider>
);

reportWebVitals();
