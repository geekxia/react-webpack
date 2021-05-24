import React from 'react'
import { point, icp, theme, role, config } from '@/hoc'

// 高阶组件：也叫高阶函数，本质上是一个函数（纯函数）。
// 作用：高阶组件（也被称之为容器组件），是用来修饰、装修UI组件的，实现业务逻辑的复用。
// 语法：hocFn(UIComponent){return <NewUIComponent {...this.props}>} 属性继承
// 语法详解：高阶组件（高阶函数）接受一个 UI组件（React类） 作为入参，返回一个新的UI组件（React类）。
// 使用原则：一个高阶组件，一般只复用一个可以复用的逻辑。


// 【写法一】在class组件上使用高阶阶级
// class TestHoc extends React.Component {
// 	render() {
// 		console.log('props', this.props)  // icp  point
// 		return (
// 			<div>
// 				<h1>测试高阶组件</h1>
// 			</div>
// 		)
// 	}
// }
// export default theme(icp(point(TestHoc)))

// 【写法二】在函数式组件上使用高阶组件
// export default theme(icp(point(()=>{
// 	return (
// 		<div>
// 			<h1>测试高阶组件</h1>
// 		</div>
// 	)
// })))



// 【写法三】在类组件上，ES6装饰器语法使用高阶组件
@theme
@icp
@point
@role(['admin','editor'])
@config
class TestHoc extends React.Component {
	handle() {
		let { role, dialog } = this.props
		dialog.alert({title: role})
	}
	render() {
		console.log('props', this.props)  // icp  point
		return (
			<div>
				<h1>测试高阶组件</h1>
				<button onClick={()=>this.handle()}>发布通知</button>
			</div>
		)
	}
}
export default TestHoc
