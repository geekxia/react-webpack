// 为生产环境所配置的选项

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
const { BundleAnalyzerPlugin } = WebpackBundleAnalyzer

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	// 用于指定生产打包，还是启动开发环境
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			new UglifyJsPlugin(),
			new CssMinimizerPlugin()
		]
	},
	module: {
		rules: [
			// sass-loader，用于加载.scss文件，交给sass编译器进行编译
			// sass编译器会把.scss文件编译成.css文件
			// css-loader 加载.css文件
			// style-loader，是把css样式添加DOM树中
			// 当use多个loader时，有先后顺序，先起作用的loader要写在后面
			// MiniCssExtractPlugin.loader作用是把css代码抽离出来，放在独立的css文件中
			{
				test:/\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		// 一个很好用的打包分析工具
		new BundleAnalyzerPlugin({
			analyzerPort: 8888,
			openAnalyzer: false
		}),
		// 把.js文件中import的样式文件抽离出来
		new MiniCssExtractPlugin({
      attributes: {
        id: 'target',
        'data-target': 'example',
      },
			filename: '[name].[chunkhash].css'
    })
	]
}
