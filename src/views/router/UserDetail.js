import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Button } from 'antd'

export default ()=>{
	const p = useParams()
	const l = useLocation()
	console.log('location', l)
	return (
		<div>
			<h1>用户详情</h1>
			<h1>你访问的是：{p.id} 这个用户</h1>
			<Button type="primary">Primary Button</Button>
		</div>
	)
}
