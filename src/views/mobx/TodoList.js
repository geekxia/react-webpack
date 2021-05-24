import React, {useState} from 'react'
import { inject, observer } from 'mobx-react'

export default inject('todo')(observer(props=> {
	const [task, setTask] = useState('')
	const { todo } = props

	// 操作：添加TODO
	const add = ()=> {
		// 触发mobx的某个action
		todo.updateList({
			type: 'add',
			data: {
				task,
				id: Date.now()
			}
		})
		setTask('')
	}
	// 操作：删除一条TODO
	const remove = ele => {
		console.log('ele', ele)
		todo.updateList({
			type: 'del',
			data: ele.id
		})
	}
	// 操作：清空所有的任务
	const clear = ()=> {
		todo.updateList({
			type: 'clear'
		})
	}
	// 操作：修改一行Todo
	const edit = (e, ele) => {
		todo.updateList({
			type: 'edit',
			data: {
				id: ele.id,
				task: e.target.value
			}
		})
	}
	// 列表渲染
	const renderTodoList = ()=> {
		return todo.list.map(ele=>(
			<div key={ele.id}>
				<span>{ele.id}</span>
				---
				<input
					type="text"
					value={ele.task}
					onChange={e=>edit(e, ele)}
				/>
				---
				<button onClick={()=>remove(ele)}>删除</button>
			</div>
		))
	}
	return (
		<div>
			<h1>TodoList</h1>
			<hr/>

			<input
				type="text"
				value={task}
				onChange={e=>setTask(e.target.value)}
			/>
			<button onClick={add}>添加</button>
			<hr/>
			{ renderTodoList() }
			<button onClick={clear}>清空所有任务</button>
		</div>
	)
}))
