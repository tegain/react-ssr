const path = require('path');

module.exports = {
	// Inform Webpack that we're building a bundle
	// for NodeJS, rather than for the browser
	target: 'node',

	// Tell Webpack the root file of our server app
	entry: './src/index.js',

	// Where to put the generated output file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	// Tell webpack to run babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						['env', { targets: { browsers: ['last 2 versions'] } }]
					],
					plugind: ['transform-object-rest-spread']
				}
			}
		]
	}
};

module.exports = merge(baseConfig, config);
