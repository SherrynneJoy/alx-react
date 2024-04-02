const path = require('path');

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, './js/dashboard_main.js'),
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
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
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
};
