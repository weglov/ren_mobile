import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Компоненты
import App from './App';
import NotFound from './components/notfound/NotFound';
import NewsPage from './components/news/index';
import RubricPage from './components/news/rubric/rubric';
import TagsPage from './components/news/rubric/tags';
import Live from './components/live/live';
import Main from './components/main/index';

export const routes = (
	<Route path="/" component={App} >
    	<IndexRoute component={Main} />
    	<Route path="novosti/p/:id" component={NewsPage} />
    	<Route path="novosti/r/:id" component={RubricPage} />
    	<Route path="novosti/t/:id" component={TagsPage} />
    	<Route path="live" component={Live} />
    	<Route path="*" component={NotFound}/>
    </Route>
)