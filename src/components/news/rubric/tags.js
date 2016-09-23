import React, { Component } from 'react';
import NewsList from '../news_list';
import { load } from '../../../Api';
import Loader from '../../loader/load';

export default class TagsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            title: null,
            throbber: true
        }
    }
    loadData = (i) => {
        load('tag/' + i).then((e) => {
            this.setState({
                data: e.data,
                throbber: false,
                title: e.data[0].tag_list[i]
            });
        })
    }
    componentDidMount() {
        this.loadData(this.props.params.id)
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.params.id !== this.props.params.id) {
        this.loadData(nextProps.params.id);
      }
    }
    render() {
        if (!this.state.throbber) {
          return (
            <div className="r_rubric">
                <h1>Тег: {this.state.title}</h1>
                <NewsList display={"--image"} data={this.state.data}/>
            </div>
            );  
        } else {
            return (
                <Loader show="true" color="black"/>
                )
        }
        
    }
}
