import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from '../client/router/Routes';

/**
 * Render React component to string and return it to express route.
 * @returns {string}
 */
export default (req) => {
	const content = renderToString(
		/**
		 * `context` Used to make some redirects or display error messages
		 * @doc https://reacttraining.com/react-router/web/api/StaticRouter/context-object
		 */
		<StaticRouter location={req.path} context={{}}>
			<Routes />
		</StaticRouter>
	);

	return `
		<!doctype html>
		<html>
			<head></head>
			<body>
				<div id="root">${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
};
