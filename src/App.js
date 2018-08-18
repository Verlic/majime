import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Chapter from './components/chapter';

var chapters = require('./data/chapters.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Majime - まじめ"></Header>
        <Chapter chapter={chapters[0]}></Chapter>
      </div>
    );
  }
}

export default App;
