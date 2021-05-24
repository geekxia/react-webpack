// 为开发环境所配置的选项

const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
	mode: 'development',
	// 解决控制台报错时“行号对不住”的问题
	// 如果不添加该选项，浏览器控制台也会出现黄色警告
	devtool: 'inline-source-map',
	devServer: {
		port: 8080,
		// 开启热更新（HMR = hot module replacement）
		// 热更新，只对main.js往后的依赖才起作用
		// 实际上，开启一台socket服务器，当代码发生变化时，通知客户端socket进行更新
		hot: true,
		open: true,
		// 用于指定静态资源目录（本地服务器）
		contentBase: path.resolve(__dirname, '../public'),
		// 当程序报错时，把错误信息覆盖到视图层之上
		overlay: true,
		proxy: {
			'/soso': {
				target: 'https://c.y.qq.com',
				changeOrigin: true
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/
			}
			// 集成ESLint的旧写法
			// 当项目运行时，eslint-loader加载.js/.jsx文件，交给 eslint 进行代码检测
			// {
			// 	test: /\.(js|jsx)/,
			// 	use: ['eslint-loader'],
			// 	enforce:'pre',
			// 	exclude: /node_modules/
			// }
		]
	},
	plugins: [
		// 集成ESLint的新写法
		new ESLintPlugin({
			exclude: 'node_modules'
		})
	],
	resolve: {
		alias: {
			// 加速通用第三包的查找速度
			'react': path.resolve(__dirname, '../node_modules/react/cjs/react.development.js')
		}
	}
}
