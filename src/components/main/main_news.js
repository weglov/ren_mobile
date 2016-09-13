import React, { Component } from 'react';
import Config from '../../Config';
import { Link } from 'react-router';
import { load } from '../../Api';

export default class MainNews extends Component {
  constructor(props) {
        super(props);
        this.state = {
            data: {},
            throbber: false
        }
    }
    componentWillMount() {
        load('kit/6').then((data) => {
            this.setState({
                data: data.data[0],
                throbber: data.status
            });
        });
        
    }
  render() { 
    let Class = this.props.display ? this.props.display : 'n_item' ;
    let data = this.state.data;
    let throbber = this.state.throbber ? 'load' : '';
    let image = data.image ? data.image['540x305'].replace(Config.CDN,Config.SITE): '';
    return (
      <Link className={Class + ' ' + throbber} to={Config.URL.news + data.id} activeClassName='active'>
      <div className={Class + "__image"}><img src={image} alt={data.title} title={data.description}/></div>
      <div className={Class + "__title"}>{data.title}</div>
      </Link>
    );
  }
}

