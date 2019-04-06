import React, { Component } from 'react';
import Dictaphone from './Dictaphone.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      test: 1,
      test2: 'string',
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Hello World!{this.state.test}</h1>
        <Dictaphone/>
      </div>
    );

  }
}

export default App;
