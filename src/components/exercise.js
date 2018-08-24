import React, { Component } from 'react';
import './exercise.css';
import Option from './option.js';

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
                <div>{this.props.item.types.choice.options.map(option => <Option isValid={option.isValid} isSelected={this.state.choice===option} isAnswered={this.state.answered} onClick={() => this.checkValue(option)} key={option.value} description={option.value}></Option>)}</div>
            </div>
        );
    }
}

export default Exercise;
