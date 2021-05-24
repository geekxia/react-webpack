// 所有loaders实际上就是函数

module.exports = function(src) {
	const result = src.replace(/\#/img, '-')
	return `module.exports = ${JSON.stringify(result)}`
}
