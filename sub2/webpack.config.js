const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { name } = require('./package');

module.exports = {
	entry: './index.jsx',
	mode: 'development',
	output: {
		library: `${name}`,
		libraryTarget: 'umd',
		publicPath: 'http://localhost:8000',
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
	},
	target: 'web',
	devServer: {
		port: '8000',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
};
