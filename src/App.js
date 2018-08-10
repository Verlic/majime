import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import ExerciseList from './components/exercise-list';

var list = [
  {
    id: 1,
    title: 'Fracciones de primer nivel',
    description: 'Cuál es el valor de 5/2?',
    answers: [
      { id: 1, value: '1.5', valid: false },
      { id: 2, value: '2.5', valid: true },
      { id: 3, value: '1.3', valid: false },
    ]
  },
  {
    id: 2,
    title: 'Multiplicaciones',
    description: 'Cuál es el valor de 5*2?',
    answers: [
      { id: 1, value: '15', valid: false },
      { id: 2, value: '9', valid: false },
      { id: 3, value: '10', valid: true },
    ]
  },
  {
    id: 3,
    title: 'Multiplicaciones',
    description: 'Cuál es el valor de 5*2?'
  }, {
    id: 4,
    title: 'Multiplicaciones',
    description: 'Cuál es el valor de 5*2?'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Majime - まじめ"></Header>
        <ExerciseList exercises={list}></ExerciseList>
      </div>
    );
  }
}

export default App;
