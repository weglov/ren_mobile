import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		query: ''
  	}
  }
  handleChange = (e) => {
  	this.setState({query:e.target.value});
    this.props.query(e.target.value);
  }
  render() {
	    return (
	    		<div className="r_search__box">
	    			<input type="text" value={this.state.query} onChange={this.handleChange} className="r_search__input" placeholder="Поиск" />
	    			<span><i className="ion-ios-search-strong"></i></span>
	    		</div>
	    );
  }
}
