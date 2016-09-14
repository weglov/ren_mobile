import React, { Component } from 'react';
import Config from '../../Config';
import { Link } from 'react-router';
import moment from 'moment';

export default class NewsItem extends Component {
  render() { 
    let Class = 'n_item';
    let data = this.props.data;
    moment.locale('ru');
    let created = moment(data.created*1000).fromNow();
    let url_image = data.image['200x115'].replace(Config.CDN,Config.SITE);
    let el = Class + ' ' + Class + this.props.display + ' el'+ this.props.id;
    let image = this.props.display !== '--row' ? (<div className={Class + "__image"}>
          <img src={url_image} alt={data.title} title={data.description}/>
        </div>) : null
      return (
        <Link className={el} to={Config.URL.news + data.id} activeClassName='active'>
          {image}
          <div className={Class + "__title"}>
            {data.title}
            <span className={Class+"__created"}>{created}</span>
          </div>
        </Link>
      );
  }
}

