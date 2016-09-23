import React, { Component } from 'react';
import Config from '../../Config';
import { load } from '../../Api';
import moment from 'moment';
import Social from "./social";
import NewsBlock from './news_block';
import { Link } from 'react-router';

export default class NewsPage extends Component {
	constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            data: {},
            date:  null
        }
    }

    loadData = (e) => {
        moment.locale('ru');
        load(e).then((stories) => {
            this.setState({
                data: stories.data[0],
                date: moment(stories.data[0].created*1000).format('LT, LL')
            });
        });
    }
    componentWillMount() {
        this.loadData('post/' + this.state.id);
    } 
    componentWillReceiveProps(nextProps) {
      if (nextProps.params.id !== this.props.params.id) {
        this.loadData('post/' + nextProps.params.id);
      }
    }
    render() {
    	let data = this.state.data;
    	let image = this.state.data.image ? data.image['540x305'].replace(Config.CDN,Config.SITE) : '';
        let tags = data.tag_list ? Object.keys(data.tag_list) : '';
        tags = tags ? tags.map((nodes,i) => <li key={i}><Link to={'/novosti/t/' + tags[i]}>{data.tag_list[nodes]}</Link></li>) : ''
      return (
        <div className='n_article'>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.description }} className='n_article__desc'/>
        <div className="n_article__data">
            <div className="n_article__data--create">{this.state.date}</div>
            <div className="n_article__data--view">{data.view}</div>
        </div>
        <div className="n_article__image">
        <img src={image} alt={data.title} title={data.description}/>
        {data.image_alt ? <span className="n_article__image--alt">{data.image_alt}</span> : ""}
        </div>
        <Social />
        <div dangerouslySetInnerHTML={{__html: data.content }} className='n_article__content'/>
            <div className="n_article__tags">
                <div className="n_article__tags--name">Теги:</div>
                <ul className="n_article__tags--list">{tags}</ul>
            </div>
            <NewsBlock data={'home/last'} limit={5} display={"--row"} title={'ЧИТАЙТЕ ТАКЖЕ:'}/>
        </div>
      )
    }
}