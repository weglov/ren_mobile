import React, { Component } from 'react';
import NewsList from './news_list';
import { load } from '../../Api';
import Button from '../ui/button';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            throbber: false,
            limit: 0,
            size: 7
        }
    }
    componentDidMount() {
        load(this.props.data+'?limit='+ this.state.limit + ':'+ this.state.size +'&order=created:asc').then((e) => {
            this.setState({
                data: e.data,
                throbber: true
            });
        });
        
    }
    loadMore = (i) => {
        let limit = this.state.limit + 7;
        this.setState({
            throbber: false 
        });
        load(this.props.data+'?limit='+ limit + ':'+ this.state.size +'&order=created:asc').then((e) => {
            var base = [...this.state.data, ...e.data];
            console.log(limit);
            this.setState({
                data: base,
                throbber: true,
                limit: limit
            });
        });
    }
    render() {
        var data = this.state.data;
        if (this.state.data) {
            return ( <div className="n_wrap n_main--wrap n_list__block" >
            <h2><span>{this.props.title}</span></h2>
            <NewsList display={"--row"} type={'bock'} data={data}/>
            <Button action={this.loadMore} style={'n_list__button'} text={'Показать еще'}/>
            </div>
            );  
        } else {
            return null
        }
        
    }
}
