'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [ './src/index' ],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: [ 'babel' ]
		}]
	},

	devtool: 'inline-source-map',

	//plugins: [
	//	new webpack.ProvidePlugin({ React: 'react' })
	//],

	resolve: {
		alias: {
			'actions': path.resolve(__dirname, './src/actions/actions')
		}
	}
};
