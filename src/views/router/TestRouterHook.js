import React, { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const Child = withRouter(props => {
	const h = useHistory()
	console.log('子组件props', props)
	const skipToHome = () => {
		// 使用路由api跳转到首页
		h.push('/jsx')
	}
	return (
		<div>
			<div>我是子组件</div>
			<button onClick={skipToHome}>回到首页</button>
		</div>
	)
})

const UserList = props => {
	const h = useHistory()
	let { data } = props
	const skipToDetail = ele => {
		h.push('/router/hooks/user/'+ele.id+'?date=2021')
	}
	return (
		<div>
			{
				data.map(ele=>(
					<div key={ele.id} onClick={()=>skipToDetail(ele)}>
						<span>{ele.id}</span>
						--
						<span>{ele.name}</span>
					</div>
				))
			}
		</div>
	)
}

export default props => {
	console.log('父组件props', props)
	const [list] = useState([
		{id:1, name:'zhangsan'},
		{id:2, name: 'lisi'}
	])
	return (
		<div>
			<h1>测试路由Hooks写法</h1>
			<Child />
			<hr/>
			<UserList data={list} />
		</div>
	)
}
