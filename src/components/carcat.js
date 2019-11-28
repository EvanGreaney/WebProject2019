import React from 'react';
import '../App.css';

class Carcat extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello World from the Car Catalogue</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Carcat;