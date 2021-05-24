import React from 'react'

// 如何定义state？只能在构造器中定义。

// 如何进一步理解state？
// 1、state是声明式变量，它被this.setState()修改时，会生成一个新的虚拟DOM，并触diff运算，最终更新DOM视图。
// 2、state的定义发生构造器中，但是在构造器中不能使用this.setState()
// 3、要想改变视图，一定要使用this.setState()来修改state。
// 4、在React中，可以直接修改state，但是这不会触发diff运算，因此视图不会更新。
// 5、重要原则：当我们修改state时，要考虑新值是否由旧值计算而来，如果是建议使用this.setState(fn)的方式进行修改；如果不是，可以使用this.setState({})
// 6、this.setState()这个方法是异步的。但是在定时器内部使用this.setState()时，它却是同步的。
// 7、this.setState({}, fn)，当setState()这个异步操作完成时，第二回调函数会执行，在其中可以拿到最新的state。
// 8、当多个this.setState()一起调用时，会被React自动合并成一个setState()操作，触发一次diff运算，一次render()。
// 9、this.setState()在修改声明式变量时，是一种浅合并。某个声明式变量被修改，不会影响其它声明式变量。
// 10、state是当组件实例的私有数据，state数据可向子元素传递，而不能向父元素传递，这被称为“React单向数据流”。


export default class extends React.Component {
	constructor(props) {
		super(props)
		// 在这里定义state
		this.state = {
			count: 1,
			num: 1
		}
	}
	add() {
		// let { count } = this.state
		// [wrong]
		// this.state.count++  // 这种直接
		// console.log('new state', this.state)

		// [wrong]
		// 当我们在修改state变量时，如果新值是由旧值计算而来，不能这样写
		// this.setState({count: count+1})

		// [correct]
		// 当我们在修改state变量时，如果新值是由旧值计算而来，应该这样写
		// this.setState(function(state){
		// 	return { count: state.count+1}
		// })
		// this.setState(state=>{
		// 	return { count: state.count+1 }
		// })
		// this.setState(state=>({count:state.count+1}))
		// setTimeout(()=>{
		// 	console.log('new state', this.state)
		// }, 2000)

		// [correct]
		// setTimeout(()=>{
		// 	// 此时的this.setState()是同步的
		// 	this.setState(state=>({count:state.count+1}))
		// 	console.log('new state', this.state)
		// }, 2000)

		// [correct]
		// this.setState(state=>({count:state.count+1}), ()=>{
		// 	console.log('count已经被修改完成', this.state) // do something
		// })

		// [correct]
		// this.setState({count: 100, num: 50})
		// this.setState({count: 200, num: 80})
		// this.setState({count: 300})
		// this.setState({num: 1000})
		// 上面的四行代码，会被react自动合并成这样：
		// this.setState({
		// 	count: 300,
		// 	num: 1000
		// })

		this.setState({count: 10000})
	}
	render() {
		let { count } = this.state
		console.log('---- render')
		return (
			<div>
				<h1>学习State</h1>
				<h1>{count}</h1>
				<button onClick={()=>this.add()}>自增</button>
			</div>
		)
	}
}
