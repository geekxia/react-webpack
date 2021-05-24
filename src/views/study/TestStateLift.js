import React from 'react'

// 状态提升（是一种数据共享的理念）
// 要解决的问题：多个组件之间数据共享的问题。
// 怎么做？具体的做法是，找到这几个组件的最近的父组件，把需要共享的状态数据定义在父组件中。

class TChild extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			t: 0
		}
	}
	change(e) {
		let { onChange } = this.props
		// 受控组件手动取值
		this.setState({t: e.target.value}, ()=>{
			// 数据包装后，通过自定义事件，回传给父组件
			e.target.detail = Number(e.target.value)/(5/9)+32
			onChange && onChange(e)
		})
	}
	render() {
		let { t } = this.state
		return(
			<div>
				<h3>摄氏温度：</h3>
				<input type="text"
					value={t}
					onChange={e=>this.change(e)}
				/>
			</div>
		)
	}
}

const FChild = props => (
	<div>
		<h3>华氏温度：</h3>
		<h3>{props.tf}</h3>
	</div>
)

// {...props} 表示把父组件传递过来的东西，全部再传给FChild
const Uncle = props => {
	return (
		<FChild {...props} />
	)
}

// 这是 TChild 和 FChild 最近的父组件
export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tf: 0  // 根据状态提升的理念，需要共享的状态
		}
	}
	change(e) {
		const val = e.target.detail
		console.log('TChild给我的数据', val)
		this.setState({tf: val})
	}
	render() {
		let { tf } = this.state
		return (
			<div>
				<h1>测试状态提升</h1>
				<hr/>
				<TChild onChange={e=>this.change(e)}/>
				<hr/>
				<Uncle tf={tf} />
			</div>
		)
	}
}
