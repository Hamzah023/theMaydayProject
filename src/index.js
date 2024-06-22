import React from 'react'; // Import React
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode> {/* Ensure that React is defined here */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
