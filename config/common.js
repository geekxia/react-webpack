// 语法基础：CommonJS语法，它必须运行在Node环境

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')


const HappyPack = require('happypack')

function resolve(arg) {
	return path.resolve(__dirname, '..', arg)
}

module.exports = {
	// 入口（必须要有）
	// entry: './src/main.js',
	// entry: path.resolve(__dirname, './src/main.js'),
	entry: {
		// 这里的key名，是给 [name] 这个变量使用的
		app: path.resolve(__dirname, '../src/main.js')
	},
	// 出口（必须要有）
	output: {
		// filename: 'bundle.js', // bundle 一束、一捆
		// [chunkhash] 是为了解决“代浏览器缓存”导致用户端代码不更新的问题
		filename: '[name].[chunkhash].js',
		// 只能使用绝对路径
		path: resolve('dist'),

		// publicPath: '/'
		// publicPath: 'https://cdn.com/qf/h5'
		// publicPath: './',

		// Webpack（5.20.0+）的写法，用于自动清除 dist 目录
		clean: true,
		chunkFilename: '[name].[chunkhash].js'
	},
	// loaders
	// 用于定义模块编译的规则
	module: {
		// 在这里定义一条一条编译规则
		rules: [
			// 当Webpack进行编译打包时，如果检测到文件模块是以.js后缀结尾的，我就使用babel-loader进行加载
			// 进一步使用 @babel/core, @babel/preset-env 进行编译、转译
			{
				test:/\.(js|jsx)$/,
				use: [{
					loader: 'happypack/loader',
					// 对babel-loader进行缓存，提升二次构建时的速度
					options: {
						cacheDirectory: true
					}
				}],
				exclude: /node_modules/
				// include: resolve('src')
		 	},
			// less-loader，加载.less文件，交给 less编译器进行编译
			{
				test:/\.less$/,
				// exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								modifyVars: {
	          			'primary-color': '#1DA57A',
	           			'link-color': '#1DA57A',
	          			'border-radius-base': '2px',
	         			},
	         			javascriptEnabled: true
							}
						}
					}
				]
			},
			// 下面这个file-loader在最新的webpack 5已经废弃
			// file-loader的作用，用于文件、图片等，返回文件图片的路径
			// { test: /\.(png|jpe?g|gif|svg)$/, use: ['file-loader'] }
			{ test: /\.(png|jpe?g|gif|svg)$/, type: 'asset/resource'},
			// 自定义loaders来处理.txt文件
			{
				test: /\.txt$/,
				use: [
					{
						loader: path.resolve(__dirname, './loaders/custom-loader.js')
					}
				]
			},
			{ test: /\.(ts|tsx)$/, loader: "ts-loader" }
		]
	},
	// plugins
	plugins: [
		// 作用：用于把打包后的js文件自动插入到index.html中
		new HtmlWebpackPlugin({
			template: resolve('public/index.html'),
			title: 'Hello',
			filename: 'index.html',
			minify: false
		}),
		// 在控制台上显示编译进度
		new webpack.ProgressPlugin(),
		// 开启多线程babel编译构建
		new HappyPack({
    	loaders: [ 'babel-loader' ],
			threads: 3
  	})
	],
	resolve: {
		alias: {
			'@': resolve('src')
		},
		// 关于省略后缀，只考JavaScript文件
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
	}
}
