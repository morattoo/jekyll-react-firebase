const webpack = require('webpack');


module.exports = {

	resolve: {
		extension:['','js','jsx']
	},

	entry: ['./react/index.jsx'],

	output: {
		filename: 'app.js',
		path: './js',
		publicPath: '/'
	},

	module: {
		noParse: /node_modules\/mapbox-gl\/dist\/mapbox-gl.js/,
		loaders: [
			{
				test: /(\.js|jsx)$/,
				exclude:/node_modules/,
				loader: 'babel-loader',
				query: {
	           presets: ['es2015']
					 }
			}
		]
	}
}
