import React from 'react'
import { inject, observer } from 'mobx-react'

// 状态管理（数据管理）
// Flux（是一套数据架构的思想）是Facebook提出的。
// Vuex、Mobx、Redux它们都是Flux思想指导下的一种具体的解决方案
// 状态管理工具：可预测状态的数据容器。

// 在React技术栈：mobx 和 redux

// 一般情况下，小项目可以考虑使用 mobx 6 & mobx-react 7
// 如果是大项目，建议使用 redux & react-redux

// 原则：在React规范中，一切外部数据都要从props进入组件，所以几乎是一定要使用状态管理工具。

// 语法：observer(inject('store')(UIComponent))

// observer(UIComponent) 它的作用是把React组件变成观察者。
// 特点：当mobx中被观察的数据发生变化时，观察者自动更新。

// inject('store')(UIComponent) 它的作用是注入mobx中的状态数据
// 特点：一旦注入成功，在props上就可以直接访问。

// 先观察再注入
export default inject('todo','music')(observer(({todo})=> {
	// console.log('props', props)
	// let { todo } = props

	const update = () => {
		console.log('----')
		todo.changeMsg('hello world')
	}
	return (
		<div>
			<h1>测试Mobx</h1>
			<h2>{todo.msg}</h2>
			<h1>长度是：{todo.length}</h1>
			<button onClick={update}>修改msg</button>
		</div>
	)
}))
