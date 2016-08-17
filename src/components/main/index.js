import React, { Component } from 'react';
import News from '../news/news';
import MainNews from './main_news.js';


export default class Main extends Component {
    render() {
        return (
        	<div className="r_front">
	        	<MainNews display={'r_main_front'}/>
	            <News />
            </div>
        );
    }
}
