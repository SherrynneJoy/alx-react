const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js',
	},
	performance: {
    	maxAssetSize: 1000000,
	hints: false,
	maxEntrypointSize: 1000000,
	},
	plugins: [ new CleanWebpackPlugin(), new HtmlWebpackPlugin() ],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		contentBase: path.join(__dirname, './public'),
		compress: true,
		port: 8564,
	}
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true,
							disbale: true,
						},
					},
				],
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin(),
		new CleanWebpackPlugin()
	]
};
