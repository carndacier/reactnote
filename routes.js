import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './containers/app';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			</Switch>
		</BrowserRouter>
	)
}