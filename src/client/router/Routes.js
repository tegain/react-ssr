import React from 'react';
import App from '../App';
import HomePage from '../pages/HomePage';
import UsersListPage from '../pages/UsersListPage';
import AdminsListPage from '../pages/AdminsListPage';
import NotFoundPage from '../pages/NotFoundPage';

/**
 * Need to define routes as an array of routes objects (with a App root component)
 *
 * It is needed in order to figure out which component to render
 * depending on the url
 *
 * @doc https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
 */
export default [
	{
		...App, // no path property will make it displayed on every page
		routes: [
			{
				...HomePage, // Exported `component: Homepage`
				path: '/',
				exact: true
			},
			{
				...UsersListPage,
				path: '/users'
			},
			{
				...AdminsListPage,
				path: '/admins'
			},
			{
				...NotFoundPage
			}
		]
	}
];
