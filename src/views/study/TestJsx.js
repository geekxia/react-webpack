import React from 'react'
import { withRouter } from 'react-router-dom'

// React类(组件)、JSX元素(React元素)

// TestJsx 是React类（组件）
// <TestJsx/> React元素（JSX元素）

// 如何理解JSX？
// 1、JSX = JavaScript XML，这是一种语法糖
// 2、JSX语法，是可选的，但是React建议使用
// 3、JSX语法，浏览器不支持，使用@babel/preset-react进行编译。Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
// 4、JSX元素，是对象，也是变量，是表达式，不是字符串
// 5、JSX可以任意嵌套，语法是使用 { } 包裹jsx元素
// 6、JSX中使用 {/* 注释内容 */}
// 7、在JSX中，可以使用表达式（表达式也要使用{}包起来），但不能使用语句
// 8、JSX元素的动态属性，也要使用 {} 包裹
// 9、在JSX中有三个属性的变化：className，htmlFor, tabIndex
// 10、在JSX中，新增属性有：key，ref，dangerouslySetInnerHTML
// 11、JSX可防注入攻击(XSS)
// 12、自定义组件必须以大写字母开头。
// 13、JSX支持属性展开语法 <Child {...obj} />。
// 14、布尔类型、Null 以及 Undefined 在JSX中会被忽略，不能当作文本进行渲染
// 15、JSX是不可变对象，当JSX元素需要更新时，我们的做法是创建一个新JSX对象，render方法将重新执行并完成DOM渲染（背后的运行机理：this.setState()修改声明式变量，一旦声明式变量发生变化，React系统会生成新JSX对象，对应生成新的虚拟DOM，进而触发Diff运算，找出两个虚拟DOM变化的最小差异，最后把这个最小差异render到DOM上）

// React元素
// const MySpan = React.createElement('span', null, '百度')
// const Child = React.createElement('a', {href:'http://baidu.com'}, [MySpan])
// const MyH1 = React.createElement('h1', {id:'box'}, [Child, Child, Child])

const a = <a href="http://baidu.com"><span>百度</span></a>

function listRender(){
	const arr = []
	for(let i=0; i<3; i++) {
		arr.push(<span key={i}>{a}</span>)
	}
	return arr
}

const test = ()=><h1>函数返回JSX</h1>

const tip = 'qf'

const attr = {
	id: 'hehe',
	title: 'hehe',
	className: 'hehe'
}
const Div = <div {...attr}>Hello Div</div>

const ele = (
	<div id='box'>
		{ listRender() }
		<h1>{ Math.random() }</h1>
		{/* [a,a,a] */}
		{/*
			{ a }
			{ a }
			{ a }
		*/}
		{/* 这是注释 */}
		{/*
			<a href="http://baidu.com"><span>百度</span></a>
			<a href="http://baidu.com"><span>百度</span></a>
			<a href="http://baidu.com"><span>百度</span></a>
		*/}
		<div
			title={tip}
			className='box'
		>
			我是一行文字
		</div>
		{ Div }
		{ (()=>(<h1>函数返回JSX</h1>))() }
		{ test() }
	</div>
)

// 使用withRouter这个高阶组件，帮助那些没有路由API的组件拿到路由API
@withRouter
class TestRouter extends React.Component {
	render() {
		console.log('TestRouter this props', this.props)
		return (
			<div>我的一个子组件</div>
		)
	}
}



/* eslint-disable */
class TestJsx extends React.Component {
	constructor(props) {
		super(props)
		// 声明式变量变量发生变化时视图自动更新（单向绑定）
		this.state = {
			list: [
				{id: 1, task: '吃饭' },
				{id: 2, task: '学习' }
			],
			task: '',
			count: 1
		}
	}
	// 确认添加
	add(e) {
		if(e.keyCode===13) {
			// 在React中，修改声明式变量，一定要使用this.setState({})
			this.setState({
				list: [...this.state.list, {id:Date.now(), task:this.state.task}],
				task: ''
			})
		}
	}
	componentDidMount() {
		// this.timer = setInterval(()=>{
		// 	this.setState((state)=>({count: ++state.count}))
		// }, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timer)
	}
	// 定义类组件时，render必须要有
	render() {
		console.log('jsx重新生成，render重新调用')
		console.log('this props', this.props)
		return (
			<div>
				{ ele }
				{ this.props.c1 }
				{ this.props.c2 }
				{ this.props.children }
				{/*实现todolist*/}
				<input
					type="text"
					value={this.state.task}
					onChange={(e)=>this.setState({task: e.target.value})}
					onKeyUp={(e)=>this.add(e)}
				/>
				{
					this.state.list.map(ele=>(
						<div key={ele.id}>
							<span>{ele.id}</span>
							<span>---</span>
							<span>{ele.task}</span>
						</div>
					))
				}
				<h1>{this.state.count}</h1>
				<hr/>
				<TestRouter />
			</div>
		)
	}
}
/* eslint-enable */

export default TestJsx
