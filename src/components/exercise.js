import React, { Component } from 'react';
import './exercise.css';

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = { answered: false };
    }
    checkValue(option) {
        if (!this.state.answered) {
            this.setState({ answered: true, choice: option })
        }

    }

    getStyle(option) {
        if (this.state.answered) {
            if (this.state.choice === option) {
                if (option.isValid) {
                    return 'answered valid';
                } else {
                    return 'answered invalid';
                }
            }
            return 'answered';
        } else {
            return 'answer';
        }
    }

    render() {
        return (
            <div className="exercise">
                <div><h2>{this.props.item.description}</h2></div>
                <div>{this.props.item.types.choice.title}</div>
                <div>{this.props.item.types.choice.options.map(option => <p className={this.getStyle(option)} key={option.value} onClick={() => this.checkValue(option)}>{option.value}</p>)}</div>
            </div>
        );
    }
}

export default Exercise;
