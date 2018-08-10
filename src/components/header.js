import React, { Component } from 'react';

class Header extends Component {
    render() {        
        return (
            <header id="main-header">
                <div>{this.props.title}</div>
            </header>
        );
    }
}

export default Header;


