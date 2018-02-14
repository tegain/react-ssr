const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
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

	plugins: [
		new BundleAnalyzerPlugin({
			analyzerPort: 27012,
			openAnalyzer: false
		})
	]
};



module.exports = merge(baseConfig, config);
