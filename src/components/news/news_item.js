import React, { Component } from 'react';
import Config from '../../Config';
import { Link } from 'react-router';
import moment from 'moment';

export default class NewsItem extends Component {
  render() { 
    let Class = this.props.display ? this.props.display : 'n_item' ;
    let data = this.props.data;
    moment.locale('ru');
    let created = moment(data.created*1000).fromNow();
    let image = data.image['200x115'].replace(Config.CDN,Config.SITE)
    return (
      <Link className={Class} to={Config.URL.news + data.id} activeClassName='active'>
      <div className={Class + "__image"}><img src={image} alt={data.title} title={data.description}/></div>
      <div className={Class + "__title"}>{data.title}<span className={Class+"__created"}>{created}</span></div>
      </Link>
    );
  }
}

