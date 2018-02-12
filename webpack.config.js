const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, 'src')
const DIST_DIR = path.resolve(__dirname, 'dist')

const generateHtml = new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve(SRC_DIR, 'index.html')
})

const configs = {
	entry: path.resolve(SRC_DIR, 'app.js'),
	output: {
		path: DIST_DIR,
		filename: 'app.js',
		publicPath: '/'
	},
	devServer: {
		port: 11000,
		contentBase: SRC_DIR
	},
	plugins: [
		generateHtml
	]
}

module.exports = configs
