```js
scripts: {
		// Use nodemon to watch the build folder (everytime webpack rebuilds the bundle), then runs the server file
		"dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
		// Webpac the server config file
		"dev:build:server": "webpack --config webpack.server.js  --watch"
}
```

#### Same modular syntax (between require() and ES6 import)
We can, because we run babel on the server side too.
