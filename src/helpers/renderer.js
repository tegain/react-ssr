import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../client/router/Routes';

/**
 * Render React component to string and return it to express route.
 * @returns {string}
 */
export default (req, store, context) => {
	const content = renderToString(
		/**
		 * `context` Used to make some redirects or display error messages
		 * @doc https://reacttraining.com/react-router/web/api/StaticRouter/context-object
		 */
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				{/**
					 * renderRoutes takes an array of routes objects and render them as react routes
					 */}
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);

	return `
		<!doctype html>
		<html>
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
			</head>
			<body>
				<div id="root">${content}</div>
        <script>
        	window.INITIAL_STATE = ${serialize(store.getState())}
				</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
};
