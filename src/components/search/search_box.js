import React, { Component } from 'react';
import Input from './search_input';
import Result from './search_results';
import {load} from '../../Api'

export default class Search extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		show: props.display,
  		query: '',
  		data: [],
  		throbber: false
  	}
  }  
  SearchQuery = (e) => {
  	this.setState({query: e, throbber: true, data: []});
  	if (e.length > 2) {
		load('search/' + e + '?limit=7').then((stories) => {
		        this.setState({
		            data: stories.data,
		            throbber: false
		        });
		})	
  	}
  	
  } 
  render() {
  	if (this.props.display !== 'active') {
  		return null;
  	} else {
	    return (

	    	<div className={this.props.display + " r_search"}>
	    		<Input query={this.SearchQuery}/>
	    		<Result data={this.state.data} throbber={this.state.throbber}/>
	    	</div>
	    );
	}
  }
}
