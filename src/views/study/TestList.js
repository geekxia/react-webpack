import React from 'react'

// 列表渲染
// 1、列语法基础：JSX支持数组渲染（数组中的元素可以是基本数据类型，JSX元素）
// 2、原则：当被渲染的列表需要进行数据处理时，常常建议封装自定义render方法来渲染列表
// 3、列表渲染一定要加key（JSX支持数组渲染，key要加数组中的元素之上）
// 4、列表渲染，React官方建议使用 map方法，但 map不是强制的。
// 5、当我们进行map渲染数组时，对源数组进行处理，是一种浅复制。

const Child = ()=><div>child</div>

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [
				{ id: 1, task: '吃饭' },
				{ id: 2, task: '睡觉' },
				{ id: 3, task: '游戏' },
				{ id: 4, task: '跑步' }
			]
		}
	}

	renderList1() {
		let { list } = this.state
		return list.map(ele=>(
			<div key={ele.id}>
				<span>{ele.id}</span>
				--
				<span>{ele.task}</span>
			</div>
		))
	}

	renderList2() {
		let { list } = this.state
		return list.map(ele=>{
			// 数据处理
			ele.id = ele.id+'00'
			return <div key={ele.id}>
				<span>{ele.id}</span>
				--
				<span>{ele.task}</span>
			</div>
		})
	}

	customRender() {
		const arr = []
		for(let i=0; i<10; i++) {
			if(i%2==0) {
				arr.push(<div key={i}>{i}</div>)
			}else{
				arr.push(<span key={i} style={{display:'block'}}>{i}</span>)
			}
		}
		return arr
	}

	render() {
		let { list } = this.state
		const arr = []
		list.map(ele=>{
			ele.id = ele.id + 1
			arr.push(
				<div key={ele.id}>
					<span>{ele.id}</span>
					--
					<span>{ele.task}</span>
				</div>
			)
		})
		return (
			<div>
				<h1>列表渲染</h1>
				{/* 列表渲染的JSX语法基础 */}
				{/* eslint-disable*/}
				{
					[
						<div key='1'>1111</div>,
						<Child key='2' />,
						'hello world',
						10001,
						true,
						null
					]
				}
				<br/>
				<hr/>
				{/* eslint-enable*/}

				{/* 列表渲染的第一种写法（经常用到） */}
				{
					list.map(ele=>(
						<div key={ele.id}>
							<span>{ele.id}</span>
							--
							<span>{ele.task}</span>
						</div>
					))
				}
				<br/>
				<hr/>
				{ this.renderList1() }
				<br/>
				<hr/>
				{/* 列表渲染的第二种写法（不推荐） */}
				{
					list.map(ele=>{
						ele.id = ele.id+1
						return <div key={ele.id}>
							<span>{ele.id}</span>
							--
							<span>{ele.task}</span>
						</div>
					})
				}
				<br/>
				<hr/>
				{ this.renderList2() }
				{/* 列表渲染的第三种写法（不推荐） */}
				{ arr }

				<br/>
				<hr/>
				{ this.customRender() }
			</div>
		)
	}
}
