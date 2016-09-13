import React, { Component } from 'react';
import NewsList from './news_list';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentWillMount() {

    }
    render() {
        var data = this.props.data.kit;
        if (this.props.load) {
            return ( <div className="n_wrap" >
            <NewsList display={"--image"} data={data[2]}/>
            <NewsList display={"--image"} data={data[3]}/>
            <NewsList display={"--row"} data={data[4]}/>
            </div>
            );  
        } else {
            return null
        }
        
    }
}
