## React vs. Vue

* Vue更重视基础：使用组件库、使用第三方框架、@vue/cli架构，Vue代码风格几乎趋近于相同。
* Vue在学习方面，不太利于对前端工程化（架构）的理解。
* React的学习，更重视思路、思想、架构。因此建议大家在学习React时，要多动手搭建出自己喜欢的架构。
* 简述Vue和React学习的关系：Vue基础有助于对React的思想的理解，React有助于对前端工程化的升华。


## 初始 Webpack

* Webpack是一个构建工具（rollup、gulp），是众多流行脚手架的首要选择。
* Webpack是一个打包器（打包工具）：入口  => 过程1 => 过程2  => [...] => 出口
* 在Webpack的眼中，一切文件皆模块（这些模块有助于提高前端开发效率）
* Webpack使用各种loaders和plugins，把各种模块编译打包成浏览器能识别的静态资源。

* 全局安装
```
cnpm install webpack -g
cnpm install webpack-cli -g
```
* 开始搭建Webpack项目
```
# 创建项目
mkdir react-webpack
cd react-webpack
# 生成package.json文件
npm init -y
# 安装webpack
cnpm install webpack -D
cnpm install webpack-cli -D
```
* 编写webpack.config.js文件
- 入口entry的写法
- 出口output的写法、加Hash值
- 要自动把打包的.js文件插入到index.html中 => html-webpack-plugin
- 区分生产环境和开发环境：cross-env  webpack-merge
- 一些常用的loader：babel-loader、ts-loader、css-loader、sass-loader
	- loader的背后，常常需要安装对应的编译器来编译对应的文件


## 自主搭建环境

* 集成webpack(entry,output,loaders,plugins)
* 集成webpack-dev-server实现本地服务 mode='production'
* 配置npm scripts命令，来实现打包(build)、本地运行(dev/serve)
* 区分生产环境和开发环境，webpack-merge
* 集成Babel编译器（不同框架的环境所需要的babel有所差异）
* 支持图片的导入导出（{test,type}）
* 支持样式文件（css/sass/less）
* 集成ESLint（不同环境所用到的eslint解析器有所差异）
* 各种便捷的plugins的使用


性能优化（为build服务）：
1、提取公共chunk：optimization.splitChunks
2、mode='production' 本身就是一种优化方案
3、使用 uglifyjs-webpack-plugin 压缩
4、剥离CSS、压缩JS、图片优化

构建优化（为dev服务）：
1、使用打包分析工具：webpack-bundle-analyzer
2、开启babel-loader缓存，cacheDirectory:true
3、使用'react'别名，减少查找时间
4、HappyPack

自定义Loaders：
```
module.exports = function(src) { return `module.exports='${result}'`}
```


## React

Webpack
	你对webpack理解？
	Webpack怎么做性能优化？
	Webpack构建速度如何提升？

React（class类组件、函数式组件Hooks）

React-Router

Flux / facebook => Mobx / Redux

Ant-Design / Antd-Mobile

create-react-app
dva
umi

ES6 / TypeScript

React技术主管：

	React类组件、Hooks
	React-Router5 (api, hooks)
	状态管理(mobx，Redux)
	JS（ES6、TS）
	脚手架选择（）
