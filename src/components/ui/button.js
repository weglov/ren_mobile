import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleClick = (e) => {
        this.props.action('click');
    } 
    render() {
        return (
            <div className={"n_button " +this.props.style}>
                <button onClick={this.handleClick}  className={"n_button--input"}>{this.props.text}</button>
            </div>
            );  
    }
}
