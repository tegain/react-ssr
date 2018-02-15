import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './router/Routes';

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
	// Render the Router container
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
	, document.querySelector('#root')
);
