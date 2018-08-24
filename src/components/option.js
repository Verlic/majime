import React, { Component } from 'react';

import classNames from 'classnames';

class Option extends Component {

    getStyle() {
        var classes = classNames({
            'answer': !this.props.isAnswered,
            'answered': this.props.isAnswered,
            'valid': this.props.isSelected && this.props.isValid,
            'invalid': this.props.isSelected && !this.props.isValid
        });

        return classes;
    }

    render() {
        return (<p className={this.getStyle()} onClick={this.props.onClick}>{this.props.description}</p>)
    }
}

export default Option
