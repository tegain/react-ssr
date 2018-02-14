const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {

	// Tell Webpack the root file of our server app
	entry: './src/client/client.js',

	// Where to put the generated output file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},

	plugins: [
		new BundleAnalyzerPlugin({
			analyzerPort: 27013,
			openAnalyzer: false
		})
	]
};

module.exports = merge(baseConfig, config);
