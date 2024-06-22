import React from 'react';
import Header from './header'; // Import the Header component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS file for styling

function App() {
  return (
    <>
      <Header /> {/* Include the Header component */}
      <div className="container">
        <div className="rectangle"> {/* Container for the rectangle */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Phone number</th>
                <th scope="col">Name</th>
                <th scope="col">Emergency?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bob Johnson</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1>Hello, Major Chutney</h1>
      <table class="dispatch">
      <tr>
            <th>Caller Id</th>
            <th>Severity</th>
            <th>Distress Description</th>
            <th>Units Required</th>
            <th>Location</th>
        </tr>
        <tr>
            <td>519-xxx-xxxx</td>
            <td>7</td>
            <td>Car accident</td>
            <td>Police, Ambulance</td>
            <td>0.5 km</td>
        </tr>
        <tr>
            <td>226-xxx-xxxx</td>
            <td>4</td>
            <td>Robbery</td>
            <td>Police</td>
            <td>1.2 km</td>
        </tr>
        <tr>
            <td>416-xxx-xxx</td>
            <td>5</td>
            <td>Fire</td>
            <td>Police, Ambulance, Fire truck</td>
            <td>2.5 km</td>
        </tr>
      </table>
    </>
  )
}

export default App;
