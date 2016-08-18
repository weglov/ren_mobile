import React, { Component } from 'react';
import Loader from '../loader/load';
import NewsItemShort from '../news/news_item_short';




export default class Result extends Component {
  render() {
      let loader = this.props.throbber ? <Loader show="true" /> : ''
            let nodes = this.props.data.map((nodes,i) => {
        return (<NewsItemShort display="n_item__short" key={i} data={nodes}></NewsItemShort>);
      });
      let help = (nodes.length === 0 && !this.props.throbber) ? 'Ничего не найдено' : '' 
	    return (
	    		<div className="r_search__results">
            {loader}
            <div className="r_search__list">
              {nodes}
              {help}
            </div>
          </div>
	    );
  }
}
