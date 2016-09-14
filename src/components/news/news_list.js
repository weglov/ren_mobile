import React, { Component } from 'react';
import NewsItem from './news_item';

export default class NewsList extends Component {
  render() { 
    let nodes = this.props.data.map((nodes,i) => {
      return (<NewsItem 
        display={this.props.display}
        type={this.props.type}
        id={i}
        key={i} 
        data={nodes}></NewsItem>);
    });
    let type = this.props.type ? " n_list__" + this.props.type : ''
    return (
      <div className={"n_list n_list" + this.props.display + type}>
        {nodes}
      </div>
    );
  }
}

