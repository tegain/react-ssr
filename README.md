```js
scripts: {
		// Use nodemon to watch the build folder (everytime webpack rebuilds the bundle), then runs the server file
		"dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
		// Webpac the server config file
		"dev:build:server": "webpack --config webpack.server.js  --watch"
}
```

##### Same modular syntax (between require() and ES6 import)
We can, because we run babel on the server side too.

##### Run multiple NPM scripts in parallel

Run all scripts starting by "dev:*" in parallel

```json
"dev": "npm-run-all --parallel dev:*"
```

##### API
http://react-ssr-api.herokuapp.com/

### SSR Process with Redux ###

We need to send data from the store to component before rendering it.

We can't use the lifecycles methods, like `componentWillMount` (because it will then trigger only once) or `componentDidMount` (because it doesn't trigger when called from the server).

Instead, we use `React Router config`:
- transform the `<Route />` components into an array of routes objects (with the same properties)
- in the Router component, instead of passing our <Routes /> component, we use the `renderRoutes` helper function from React Router config, to return Routes from an array of routes objects
- for each component, we create a extern function `loadData()` whose work will be to manually dispatch a Redux action, when called
- make use of the `matchRoutes()` helper from React Router config inside of the Express server file, to map over our routes and compare them to the current request pathname (with `req.path`)
- for each route, we call the `route.loadData()`, passing the Redux store as parameter
- this `loadData` function will then dispatch an action to the redux store (and feed it) which will return a promise
- inside of the Express server file, we can now wait until this promise is resolved, and send the rendered component (with data from store) to the browser


### Authentication ###

In order to use cookies for authentication, we need to trick the app to be on the same domain (cookies are domain dependant).

- To do that, we create 2 separates *axios instances* (https://github.com/axios/axios#creating-an-instance) (one for client, one for server)
- We use the `extraArgument` function provided by Redux Thunk (https://github.com/gaearon/redux-thunk/blob/master/src/index.js) to tweak the middleware, by adding the previous axios instance
- the extra argument will be passed as a 3rd argument in the action creator
- In the action creator, we can now replace the regular `axios.get()` function with the new 3rd argument (the axios instance)
- Repeat for server store

