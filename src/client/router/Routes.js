import React from 'react';
import Home from '../components/Home';
import UsersList, { loadData } from '../components/UsersList';

/**
 * Need to define routes as an array of routes objects
 *
 * It is needed in order to figure out which component to render
 * depending on the url
 *
 * @doc https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
 */
export default [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		loadData,
		path: '/users',
		component: UsersList
	}
];
