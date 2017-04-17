const webpack = require('webpack');


module.exports = {

	resolve: {
		extension:['','js','jsx']
	},

	entry: ['./react/index.jsx'],

	output: {
		filename: 'app.js',
		path: './_site/js',
		publicPath: '/'
	},

	module: {
		loaders: [
			{
				test: /(\.js|jsx)$/,
				exclude:/node_modules/,
				loaders:['babel']
			}
		]
	}
}
