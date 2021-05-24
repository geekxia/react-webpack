import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'
import routes from '@/views'

export default ()=>{

	// 作用：生成Route规则（路由规则）
	const renderRoutes = ()=> {
		const res = []
		const recursion = arr => {
			arr.map(ele=>{
				res.push(
					<Route
						key={ele.id}
						path={ele.path}
						exact
						component={ele.component}
					/>
				)
				ele.children && recursion(ele.children)
			})
		}
		routes.map(ele=>(
			ele.children && recursion(ele.children)
		))
		return res
	}

	return(
		<div className='qf-content'>
			<Switch>
				{ renderRoutes() }
				<Redirect from='/*' to='/jsx' />
			</Switch>
		</div>
	)
}
