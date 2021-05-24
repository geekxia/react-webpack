// Babel是JavaScript的编译器

// 两个核心概念：预设、插件
// preset： @babel/preset-env  @babel/preset-react  @babel/preset-typescript
// 如果搭建Vue环境，用哪个预设？
// 预设，把JS领域中的主要语法版本（超集、语法糖）转换成ES

// plugin，有非常多的插件可用
// 弥补preset无法编译某些细节语法的问题

module.exports = {
	presets: [
		["@babel/preset-env", {}],
		['@babel/preset-react', {}],
		["@babel/preset-typescript", {}]
	],
	plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
		["@babel/plugin-syntax-dynamic-import"]
  ]
}
