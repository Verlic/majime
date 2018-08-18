import React, { Component } from 'react';
import ExerciseList from './exercise-list';

import './chapter.css';

class Chapter extends Component {
    render() {
        return (            
            <div id="chapter">
                <h1>{this.props.chapter.title}</h1>
                <ExerciseList exercises={this.props.chapter.exercises}></ExerciseList>
            </div>            
        );
    }
}

export default Chapter;