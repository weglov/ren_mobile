import React, { Component } from 'react';
import NewsList from './news_list';
import { load } from '../../Api';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            throbber: false
        }
    }
    componentDidMount() {
        load(this.props.data).then((e) => {
            this.setState({
                data: e.data,
                throbber: true
            });
        });
        
    }
    render() {
        var data = this.state.data;
        if (this.state.data) {
            return ( <div className="n_wrap n_main--wrap n_list__block" >
            <h2><span>{this.props.title}</span></h2>
            <NewsList display={"--row"} type={'bock'} data={data}/>
            </div>
            );  
        } else {
            return null
        }
        
    }
}
