// React组件（类、图纸）
// React组件实例化后，得到JSX元素

// 如何定义组件？
// 1、类组件
// 2、函数式组件（无状态组件、纯组件、PureComponent）

// 这两种组件有什么区别？
// 类组件，要用class关键来定义，它有state状态，有生命周期、有this，有ref，有上下文。类组件的缺点是运行速度相对较慢、性能较差。
// 函数式组件，默认啥都没有，也就是说默认没有类组件那些特性。函数式组件的好处是运行速度较快，性能更好。（使用Hooks(v16.8)可以模拟出像类组件一样的众多特性）

// 如何进一步理解props？
// 1、在React开发中，props的作用远远比state更强大
// 2、在类组件和函数式组件中，都默认有props
// 3、props是父子组件之间的通信纽带
// 4、props是不能修改的，因为React函数式组件使用是纯函数
// 5、props可以传递任何数据类型，还可以传递事件函数和JSX元素
// 6、props和state不能交叉赋值，它们没有任何关联
// 7、最新的React中，props验证是由一个第三库prop-types来实现的

import React, { Component } from 'react'

// 类组件
export default class extends Component {
	// 构造器
	constructor(props) {
		// 调用父类（父组件）构造器，必须是第一行代码
		super(props)
		this.state = {
			count: 1
		}
	}
	componentDidMount() {
		console.log('this', this)
	}
	render() {
		// 尽可地把各种变量，在这里进行解构
		let { count } = this.state
		return (
			<div>
				<h1>类组件</h1>
				<h1>{count}</h1>
			</div>
		)
	}
}

// 函数式组件，本质上是一个纯函数
// 它的特点是不能修改入参props，唯一的输入永远得到唯一的输出
// export function TestComponent2(props) {
// 	console.log('props', props)
// 	console.log('this', this)
// 	return (
// 		<div>
// 			<h1>函数式组件</h1>
// 		</div>
// 	)
// }

// export default () => {
// 	// 语句 do something
// 	return (
// 		<div>
// 			<h1>函数式组件</h1>
// 		</div>
// 	)
// }

// export default () => (
// 	<div>
// 		<h1>函数式组件</h1>
// 	</div>
// )

// _=>{ console.log(_) }
// ()=>
// ()=>()
// 1=>1
