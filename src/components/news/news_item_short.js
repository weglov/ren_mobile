import React, { Component } from 'react';
import Config from '../../Config';
import { Link } from 'react-router';
import moment from 'moment';

export default class NewsItemShort extends Component {
  render() { 
    let Class = this.props.display ? this.props.display : 'n_item__short' ;
    let data = this.props.data;
    moment.locale('ru');
    let created = moment(data.created*1000).fromNow();
    return (
      <Link className={Class} to={Config.URL.news + data.id} activeClassName='active'>
      <div className={Class + "__title"}>{data.title}<span className={Class+"__created"}>{created}</span></div>
      </Link>
    );
  }
}
