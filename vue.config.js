const Webpack = require('webpack')
const config = {
	devServer: {
		overlay: {
			warnings: false,
			errors: false
		}
	},
	lintOnSave: false,
	assetsDir: 'assets',
	publicPath: './',
	configureWebpack: {
		plugins: [
			new Webpack.ProvidePlugin({
				jQuery: 'jQuery',
				$: 'jQuery'
			})
		],
		module: {
			rules: [
				{
				　　test: /\.less$/,	
				　　use: "less-loader",
				}
			]
		},
	},
	
	
	
}

module.exports = config;