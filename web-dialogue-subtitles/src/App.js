import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      test: {}
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );

  }
}

export default App;
