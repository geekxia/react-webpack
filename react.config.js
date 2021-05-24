// 语法基础：CommonJS语法，它必须运行在Node环境

module.exports = {
	port: 9000
}

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log('-------------------', process.env.NODE_ENV)

const NODE_ENV = process.env.NODE_ENV


// const config = {
// 	// 这里生产环境和开发环境都需要的选项配置
// }
//
//
// if(NODE_ENV==='development') {
// 	config.mode = 'development'
// 	config.devServer = {}
// }else{
// 	//
// 	config.mode = 'production'
// 	config.plugins.push(new AbcPlugin())
// }
//
// module.exports = config;




module.exports = {
	// 解决控制台报错时“行号对不住”的问题
	// 如果不添加该选项，浏览器控制台也会出现黄色警告
	devtool: 'source-map',
	// 用于指定生产打包，还是启动开发环境
	// mode: 'production',
	mode: 'development',

	// 入口（必须要有）
	// entry: './src/main.js',
	// entry: path.resolve(__dirname, './src/main.js'),
	entry: {
		// 这里的key名，是给 [name] 这个变量使用的
		app: path.resolve(__dirname, './src/main.js')
	},
	// 出口（必须要有）
	output: {
		// filename: 'bundle.js', // bundle 一束、一捆
		// [chunkhash] 是为了解决“代浏览器缓存”导致用户端代码不更新的问题
		filename: '[name].[chunkhash].js',
		// 只能使用绝对路径
		path: path.resolve(__dirname, './dist'),

		// publicPath: '/'
		// publicPath: 'https://cdn.com/qf/h5'
		// publicPath: './',

		// Webpack（5.20.0+）的写法，用于自动清除 dist 目录
		clean: true
	},
	// loaders
	module: {
		rules: []
	},
	// plugins
	plugins: [
		// 作用：用于把打包后的js文件自动插入到index.html中
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
			title: 'Hello',
			filename: 'index.html',
			minify: false
		})
	],
	devServer: {
		port: 8000,
		// 开启热更新（HMR = hot module replacement）
		// 热更新，只对main.js往后的依赖才起作用
		// 实际上，开启一台socket服务器，当代码发生变化时，通知客户端socket进行更新
		hot: true,
		open: true,
		// 用于指定静态资源目录（本地服务器）
		contentBase: path.resolve(__dirname, './public')
	}
}

// module.exports = function() {
// 	return {
//
// 	}
// }
