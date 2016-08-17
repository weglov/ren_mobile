import React, { Component } from 'react';
import NewsItem from './news_item';

export default class NewsList extends Component {
  render() { 
    let nodes = this.props.data.map((nodes,i) => {
      return (<NewsItem display={this.props.display} key={i} data={nodes}></NewsItem>);
    });
    return (
      <div className="n_list">
        {nodes}
      </div>
    );
  }
}

