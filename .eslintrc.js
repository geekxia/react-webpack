// ESLint是一种代码规范的检测工具

// 社区里有很多种不同版本的eslint工具，比如常用的有如下：
// eslint
// eslint-babel
// eslint-config-airbnb
// eslint-plugin-jsx-a11y

// 在webpack有两种写法：
// 1、使用eslint-loader，不推荐用了
// 2、使用eslint-webpack-plugin插件来集成ESlint

// ESLint检测结果有三种情况：
// error - 2
// wran - 1
// off - 0

// 如何解决项目中的ESLint报错问题？
// 1、在ESLint的配置文件中，修改 rules 规则，不建议使用
// 2、使用ESLint注释的方式，临时解决掉 eslint 报错问题
// 3、在项目根目录添加 .eslintignore 忽略文件
// 4、老老实实找到ESLint提示的报错地方，改成规范的写法

// ESLint的配置目前有5种写法，参考官方文档

module.exports = {
	parser: "@babel/eslint-parser",
	extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
	plugins: [
    "react"
  ],
	env: {
    "browser": true,
    "node": false,
		"es6": true
  },
	// 定义规则检测的级别
  rules: {
      // "semi": "error"
			"no-console": "off",
			"react/display-name": 0,
			"react/no-direct-mutation-state": 0,
			"react/prop-types": "off",
			"react/no-string-refs": 0,
			"no-case-declarations": 0
  }
}
