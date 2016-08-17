import React, { Component } from 'react';

export default class Loader extends Component {
  	render() {
		return (
			<div className={"r_loader " + this.props.show}>
				<div className="spinner">
				  <div></div>
				  <div></div>
				  <div></div>
				</div>
			</div>
		);
	}
}
