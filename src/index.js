import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Tell Express to treat the public directory as the public one on front end
app.use(express.static('public'));

// Tell Express to watch for any route,
// and let React Router deal with actual router
app.get('*', (req, res) => {
	// Send the stringified html with react component
	// Pass the request param to the renderer function to get the request url
	res.send(renderer(req));
});

app.listen(3000, () => {
	console.log('Listening on port 3000.');
});
