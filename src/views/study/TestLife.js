import React from 'react'

// React的生命周期 3-2-1
// 第一阶段：装载阶段（3）constructor/render/componentDidMount
// 第二阶段：更新阶段（2）[shouldComponentUpdate]/render/componentDidUpdate
// 第三阶段：卸载阶段（1）componentWillUnmount

export default class extends React.Component {

	// constructor()
	// 当React组件实例化时，是第一个运行的生命周期。
	// 在这个生命周期中，不能使用this.setState()
	// 在这个生命周期中，不能使用副作用（调接口、dom操作、定时器、长连接）
	// 不能把props和state交叉赋值
	constructor(props) {
		super(props)
		// super(props)必须是第一行代码，表示调用父类的构造器
		this.state = {
			count: 1,
			num: 1
		}
		console.log('----------------constructor')
	}
	// componentDidMount()
	// 相当于是vue中的mounted()
	// 它表示DOM结构在浏览器中渲染已完成
	// 在这里，可以使用任何的副作用（调接口、定时器、DOM操作、长连接。。。）
	// 在这里，可以使用this.setState()
	componentDidMount() {
		console.log('----------------componentDidMount')
	}

	// shouldComponentUpdate()
	// 它相当于是一个开关，如果它返回true则更新机制正常执行，如果返回false则更新机制停止.
	// 在vue中是没有的，所在React面试经常问题。
	// 它存在的意义：可以用于性能优化。但是基本上用不到，最新的解决方案是使用PureComponent。
	// 理论上这个生命周期的作用是：用于精细地控制声明式变量的更新问题，如果被变化的声明式变量参与了视图渲染则返回true；如果被变化的声明式变量没有直接或间接参与视图渲染则返回false，以减少diff运算。
	shouldComponentUpdate(nextProps, nextState) {
		let { count } = this.state
		console.log('----------------shouldComponentUpdate')
		if(nextState.count !== count) {
			return true
		}else{
			return false
		}
	}

	// componentDidUpdate()
	// 相当于是vue中的updated()
	// 它表示DOM结构渲染更新已完成，只发生在更新阶段
	// 在这里，可以执行大多数的副作用，但是不建议
	// 在这里，可以使用this.setState()，但是必须要有终止条件判断，避免死循环。
	componentDidUpdate() {
		console.log('----------------componentDidUpdate')
		// 此代码仅供参考，能不这样写尽量不要这样写
		if(this.state.count < 10) {
			setTimeout(()=>{
				this.setState(state=>({count: state.count+1}))
			}, 1000)
		}
	}

	// componentWillUnmount()
	// 相当于是vue中的beforeDestroy()
	// 一般在这里清除定时器、长连接等其它占用内存的变量
	// 在这里一定不可以使用this.setState()
	componentWillUnmount() {
		console.log('----------------componentWillUnmount')
	}

	// render()
	// 是类组件中唯一的一个必须要有的生命周期
	// 这个render函数必须要有return，return结果只要满足jsx语法都可以。
	// 它的return返回jsx默认只能是单一根节点，但是在Fragment的语法支持下，可以返回多个兄弟节点。
	// Fragment碎片的写法：<React.Fragment></React.Fragment>，简写成<></>
	// 在return之前，可以做任意的业务逻辑（但不能使用this.setState()）
	// 每当this.setState修改声明式变量时，会触发diff运算，进而触发render()重新渲染。
	// render()这个生命周期，在装载阶段和更新阶段都会运行。
	// 当render()返回null时，不影响生命周期的正常运行。
	render() {
		let { count } = this.state
		// do something
		console.log('----------------render')
		return (
			<>
				{[
					<div key={1}>
						<h1>测试生命周期(1)</h1>
					</div>,
					<div key={2}>
						<h1>测试生命周期(2)</h1>
					</div>,
					'hello world'
				]}
				<h1>{count}</h1>
				<button
					onClick={()=>this.setState(state=>({count:state.count+1}))}
				>
					自增Count
				</button>
				<button
					onClick={()=>this.setState(state=>({num:state.num+1}))}
				>
					自增Num
				</button>
				<hr/>

				<h1>{this.props.test}</h1>
			</>
		)
	}

	// [不常用]
	// 当父组件向当前组件传递props、更新props时触发
	static getDerivedStateFromProps() {
		console.log('--------------getDerivedStateFromProps')
		return null
	}
}
