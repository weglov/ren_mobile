import React, { Component } from 'react';
import Config from '../../Config';
import { load } from '../../Api';

export default class NewsPage extends Component {
	constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            data: {}
        }
    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        id: nextProps.params.id
      })
    }
    componentWillMount() {
        load('post/' + this.state.id).then((stories) => {
            this.setState({
                data: stories.data[0]
            });
        });
    }
  render() {
  	let data = this.state.data;
  	let image = this.state.data.image ? data.image['540x305'].replace(Config.CDN,Config.SITE) : '';
    return (
      <div className='n_article'>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.description }} className='n_article__desc'/>
      <div className="n_article__image"><img src={image} alt={data.title} title={data.description}/></div>
      <div dangerouslySetInnerHTML={{__html: data.content }} className='n_article__content'/>
      </div>
    )
  }
}