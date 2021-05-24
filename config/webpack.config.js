const NODE_ENV = process.env.NODE_ENV
console.log('环境', NODE_ENV)

const { merge } = require('webpack-merge')
const common = require('./common.js')
const dev = require('./dev.js')
const build = require('./build.js')

module.exports = () => {

	if(NODE_ENV==='development') {
		return merge(common, dev)
	}else{
		return merge(common, build)
	}
}
