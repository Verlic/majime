
import React, { Component } from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = { answered: false };
    }

    checkAnswer(id) {
        if (!this.state.answered) {
            this.setState({ answered: true, answerId: id });
        }
    }

    render() {
        if (!this.props.item.answers) {
            this.props.item.answers = [];
        }

        return (
            <div className="exercise">
                <div><h2>{this.props.item.title}</h2></div>
                <div>{this.props.item.description}</div>
                <div className="actions">
                    {this.props.item.answers.map(answer => <input key={answer.id} type="button" className={'answer ' + (this.state.answered && answer.id === this.state.answerId && answer.valid ? 'valid' : (this.state.answered && answer.id === this.state.answerId && !answer.valid ? 'invalid' : ''))} name="answer" value={answer.value} onClick={() => this.checkAnswer(answer.id)} />)}
                </div>
            </div>
        );
    }
}

export default Exercise;