import React from 'react'
// 引入上下文对象
import ThemeCtx from '@/utils/theme'

// 上下文
// 作用：自上而下地向组件树中注入数据
// 注意：在上下文的消费者（实际上就是那些被上下文包裹的组件）中不能修改上下文

// 怎么使用上下文呢？
// 1、使用React.createContext()创建上下文对象
// 2、使用上下文对象上的 <Provider value={}></Provider>组件，向React组件树注入数据
// 3、使用上下文对象上的 <Consumer>{()=>()}<Consumer>组件，使用上下文数据

// 上下文在哪些第三库中会用到呢？React-Router，Mobx，Redux


// 使用上下文的第一种写法
// class TestContext extends React.Component {
// 	render() {
// 		console.log('context', this.context)
//    const { theme } = this.context
// 		return (
// 			<div style={{background:theme.background,color:theme.color}}>
// 				<h1>测试上下文</h1>
// 			</div>
// 		)
// 	}
// }
// TestContext.contextType = ThemeCtx
// export default TestContext

// 使用上下文的第二种写法
export default class extends React.Component {
	render() {
		return (
			<ThemeCtx.Consumer>
			{
				theme=>(
					<div style={{background:theme.background,color:theme.color}}>
						<h1>测试上下文</h1>
					</div>
				)
			}
			</ ThemeCtx.Consumer>
		)
	}
}
