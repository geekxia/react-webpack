import React from 'react'

// 条件渲染
// 使用 && / ! 实现单条件渲染，相当vue中v-if
// 使用 三目运行符 实现条件渲染 相当vue中v-if/v-else
// 使用if/switch语句，实现多条件渲染 相当vue中v-if/v-else-if/v-else
// 使用动态class/style实现条件渲染 相当vue中v-show

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			bol1: true,
			bol2: true,
			idx: 1,
			color: 'blue',
			show: 'disp',
			display: 'block'
		}
	}

	// 多条件渲染
	renderRow() {
		let { idx } = this.state
		let res = null
		// 这个写法，还可以改成switch语句
		if(idx===1) {
			res = <div>aaaaaaa</div>
		}else if(idx===2) {
			res = <div>bbbbbbb</div>
		}else if(idx===3) {
			res = <div>ccccccc</div>
		}else{
			res = <div>ddddddd</div>
		}
		return res
	}

	render() {
		let {
			bol1,
			bol2,
			color,
			show,
			display
		} = this.state

		return (
			<div>
				<h1>条件渲染</h1>
				<hr/>

				{ bol1 && <div>我是一个可有可无的人</div> }
				<button onClick={()=>this.setState(state=>({bol1: !state.bol1}))}>显示/隐藏</button>
				<hr/>

				{ bol2 ? <div>111111</div> : <div>222222</div> }
				<button onClick={()=>this.setState(state=>({bol2: !state.bol2}))}>显示/隐藏</button>
				<hr/>

				{ this.renderRow() }
				<button
					onClick={()=>this.setState(state=>({idx: (state.idx+1>3 ? 0 : state.idx+1)}))}>
					显示/隐藏
				</button>
				<hr/>

				<h2 className={color}>第一行文字</h2>
				<button
					onClick={()=>this.setState({color: ['red','green','blue'][Math.floor(Math.random()*3)]})}>
					切换颜色
				</button>
				<hr/>

				<h2 className={show,color}>第二行文字</h2>
				<button
					onClick={()=>this.setState(state=>({show:(state.show==='disp'?'none':'disp')}))}>
					显示/隐藏
				</button>
				<hr/>

				<h2 style={{color:'red',fontSize:'30px',display}}>第三行文字</h2>
				<button
					onClick={()=>this.setState(state=>({display:(state.display==='none'?'block':'none')}))}>
					显示/隐藏
				</button>

			</div>
		)
	}
}
