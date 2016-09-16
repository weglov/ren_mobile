import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Компоненты
import App from './App';
import NotFound from './components/notfound/NotFound';
import NewsPage from './components/news/index';
import Main from './components/main/index';

export const routes = (
	<Route  path="/" component={App}>
    	<IndexRoute component={Main} />
    	<Route path="novosti/p/:id" component={NewsPage}/>
    	<Route path="*" component={NotFound}/>
    </Route>
)