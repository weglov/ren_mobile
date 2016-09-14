import React, { Component } from 'react';
import NewsList from './news_list';
import NewsItem from './news_item';
import NewsBlock from './news_block';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    render() {
        var data = this.props.data.kit;
        if (this.props.load) {
            return ( <div className="n_wrap n_main--wrap" >
            <NewsList display={"--image"} type={'main'} data={data[2]}/>
                <div className="n_list n_list__table">
                    <NewsItem display={"--cell"} id={0} type={'main'} data={data[2][7]}></NewsItem>
                    <NewsItem display={"--cell"} id={1} type={'main'} data={data[2][8]}></NewsItem>
                </div>
            <NewsList display={"--image"} data={data[3]}/>
            <NewsList display={"--row"} data={data[4]}/>
            <NewsBlock data={'home/last?limit=3:7&order=id:desc'} display={"--row"} title={'Все новости'}/>
            </div>
            
            );  
        } else {
            return null
        }
        
    }
}
