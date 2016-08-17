import React, { Component } from 'react';
import { load } from '../../Api';
import NewsList from './news_list';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        load('kit/2').then((stories) => {
            this.setState({
                data: stories.data
            });
        });
    }
    render() {
        return ( <div className="n_wrap" >
            <NewsList display={"n_item"} data={this.state.data}/>
            </div>
        );
    }
}
