import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';

export default () => (
	<div>
		<Route exact path="/" component={Home} />
	</div>
);
