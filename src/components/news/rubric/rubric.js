import React, { Component } from 'react';
import NewsList from '../news_list';
import { load } from '../../../Api';
import Loader from '../../loader/load';

export default class RubricPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            title: null,
            throbber: true
        }
    }
    loadData = (i) => {
        let post = load('post?category='+i).then((ok) => {
            return ok;
        })
        let name = load('category/' + i).then((ok) => {
            return ok;
        })
        Promise.all([post, name]).then((e) => {
            this.setState({
                data: e[0].data,
                throbber: false,
                title: e[1].data[0].name
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
                <h1>{this.state.title}</h1>
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
