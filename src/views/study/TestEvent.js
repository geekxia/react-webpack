import React from 'react'

// React事件绑定：

// 1、所有的事件属性名，都要求是小驼峰命名法、并且要以on开头。格式参考：onMyEvent={}
// 2、键盘事件: onKeyUp={}。鼠标事件: onMouseEnter={}。
// 3、如果采用ES5的方式绑定事件处理器，一定要使用.bind(this)改变this指向
// 4、如果采用ES6的方式绑定事件处理器，不再考虑改变this指向问题，建议使用ES6的写法。
// 5、采用ES5的方式绑定事件，事件处理器的最后一个参数永远都是事件对象。
// 6、采用ES6的方式绑定事件，需要显示地（手动）传递事件对象，否则拿不到。
// 7、无论是ES5还是ES6，要想阻止默认事件`e.preventDefault()`，阻止冒泡`e.stopPropagation()`
// 8、如果想监听特殊事件(enter事件、滚轮事件)都要通过事件对象来判断识别。
// 9、React事件绑定支持自定义传参，可以传递任何JS数据类型。
// 10、自定义事件，也要遵从 onMyEvent 这种事件的命名方式


// 一、类组件中的事件绑定
export class _ extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 1,
			name: ''
		}
		this.handle = this.handleClick.bind(this, '1', this.state.count)
	}

	handleClick(arg1, arg2, evt) {
		// 阻止默认事件
		evt.preventDefault()
		// 阻止冒泡
		evt.stopPropagation()
		// console.log('点击', this)
		// this.setState(state=>({count: count+1}))
		console.log('arg1', arg1, 'arg2', arg2)
		console.log('evt', evt)
	}

	enterHandle(evt) {
		let { name } = this.state
		if(evt.keyCode===13){
			console.log('你点击了enter键')
			console.log('name', name)
		}
	}

	render() {
		let { count, name } = this.state

		return (
			<div>
				<h1>测试事件绑定</h1>
				<h2>{count}</h2>
				<button onClick={this.handle}>点击1</button>
				<button onClick={this.handleClick.bind(this, 2, count)}>点击2</button>
				<button onClick={e=>this.handleClick(3, count, e)}>点击3</button>
				<br/>
				<hr/>
				<input
					type="text"
					value={name}
					onChange={e=>this.setState({name:e.target.value})}
					onKeyUp={e=>this.enterHandle(e)}
				/>
			</div>
		)
	}
}


// 二、函数式组件中的事件绑定

const Child = props => (
	<button onClick={e=>props.onAbc('hello', e)}>我是Child组件</button>
)

export default ()=>{
	// function handle(arg1, arg2, e) {
	// 	console.log('arg1', arg1, 'arg2', arg2)
			// console.log('点击', e)
	// }

	const handle = (arg1, arg2, e)=>{
		// 阻止事件冒泡、阻止默认事件、监听键盘事件，都在这里写
		console.log('arg1', arg1, 'arg2', arg2)
		console.log('点击', e)
	}

	const abcHandle = msg => {
		console.log('super -----', msg)
	}

	return (
		<div>
			<h1>事件绑定</h1>
			<button onClick={(e)=>handle(1,false,e)}>点击</button>
			<hr/>
			{/* 自定义事件，也要遵从 onMyEvent的事件命名方式 */}
			<Child onAbc={abcHandle} />
		</div>
	)
}
