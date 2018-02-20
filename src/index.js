import 'babel-polyfill'; // Avoid `regeneratorRuntime is not defined`
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';

import Routes from './client/router/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Tell express to proxy all routes matching `/api` to the defined url
app.use(
	'/api',
	proxy('http://react-ssr-api.herokuapp.com', {
		// Don't use in others app, this is specific to this API
		// Tell Google oAuth to redirect to localhost:3000 after authentication instead of the real API
		proxyReqOptDecorator (opts) {
			opts.headers['x-forwarded-host'] = 'localhost:3000';
			return opts
		}
	})
);

// Tell Express to treat the public directory as the public one on front end
app.use(express.static('public'));

// Tell Express to watch for any route,
// and let React Router deal with actual router
app.get('*', (req, res) => {
	// Create redux store before actually rendering the component,
	// in order to add some logic to this store
	const store = createStore(req);

	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null;
	});

	Promise.all(promises)
		.then(() => {
			const context = {};
			const content = renderer(req, store, context);

			/**
			 * Send the stringified html with react component
			 * Pass the request param and the redux store to the renderer function to get the request url
			 *
			 * if `context` contains the `notFound` property defined in NotFoundPage component,
			 * return a 404 status.
			 */
			if (context.notFound) {
				res.status(404);
			}

			res.send(content);
		})
		// .catch(/* also render the app */); // Even if there is a problem, render the app. Not recommended though.
		// .catch((err) => res.send(err.response.data.error)); // Not recommended: it's like throwing up all the SSR with this generic message
});

app.listen(3000, () => {
	console.log('Listening on port 3000.');
});
