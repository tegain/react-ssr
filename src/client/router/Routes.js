import React from 'react';
import HomePage from '../pages/HomePage';
import UsersListPage, { loadData } from '../pages/UsersListPage';

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
		component: HomePage,
		exact: true
	},
	{
		loadData,
		path: '/users',
		component: UsersListPage
	}
];
