const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: ['react-hot-loader/patch', path.resolve('src/index.tsx')],
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
			'@': path.resolve(__dirname, './src')
		}
	},
	devServer: {
		historyApiFallback: true,
		hot: true
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: true
						}
					},
					{ loader: 'scoped-css-loader' },
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]'
				}
			},
			{
				test: /\.(tsx|jsx|js|ts)?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
}
