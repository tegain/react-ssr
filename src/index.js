import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Tell Express to treat the public directory as the public one on front end
app.use(express.static('public'));

// Tell Express to watch for any route,
// and let React Router deal with actual router
app.get('*', (req, res) => {
	// Create redux store before actually rendering the component,
	// in order to add some logic to this store
	const store = createStore();

	// Send the stringified html with react component
	// Pass the request param and the redux store to the renderer function to get the request url
	res.send(renderer(req, store));
});

app.listen(3000, () => {
	console.log('Listening on port 3000.');
});
