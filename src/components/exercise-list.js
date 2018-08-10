import React, { Component } from 'react';
import Exercise from './exercise';

class ExerciseList extends Component {
    render() {
        return (
            <div className="content">
                {this.props.exercises.map(exercise => <Exercise key={exercise.id} item={exercise}></Exercise>)}
            </div>
        );
    }
}

export default ExerciseList;