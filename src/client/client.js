import 'babel-polyfill'; // Avoid `regeneratorRuntime is not defined`
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import Routes from './router/Routes';
import reducers from './reducers';

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

/**
 * Re-render the app on the #root div created in the
 * server-returned html template.
 *
 * React will crawl the existing structure and
 * bind all the event handlers etc
 *
 * @note : `Warning: render(): Calling ReactDOM.render() to hydrate
 * server-rendered markup will stop working in React v17.
 * Replace the ReactDOM.render() call with ReactDOM.hydrate()
 * if you want React to attach to the server HTML.`
 *
 * @doc https://reactjs.org/docs/react-dom.html#hydrate
 */
ReactDOM.hydrate(
	// Render the Router container inside of redux Provider
	<Provider store={store}>
		<BrowserRouter>
			{/**
			 * renderRoutes takes an array of routes objects and render them as react routes
			 */}
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('#root')
);
