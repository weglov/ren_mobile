import React, { Component } from 'react';
import News from '../news/news';
import MainNews from './main_news.js';
import { load } from '../../Api';


export default class Main extends Component {
	constructor(props) {
        super(props);
        this.state = {
            data: {},
            throbber: false
        }
    }
	componentWillMount() {
        load('home').then((stories) => {
            this.setState({
                data: stories.data,
                throbber: true
            });
        });
        
    }
    render() {
        return (
        	<div className="r_front">
	        	<MainNews display={'r_main_front'}/>
	            <News data={this.state.data} load={this.state.throbber}/>
            </div>
        );
    }
}
