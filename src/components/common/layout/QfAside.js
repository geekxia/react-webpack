import React, { useState } from 'react'

import { config } from '@/hoc'

import { NavLink, useHistory } from 'react-router-dom'
import routes from '@/views'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { Menu } from 'antd'
const { SubMenu } = Menu

export default config(props=>{

	const [current, setCurrent] = useState(1)

	// let { collapse, onToggle } = props
	// 作用：生成声明式链接
	const renderNavLinks = ()=> {
		return routes.map(ele=>(
			<SubMenu key={ele.id}  title={ele.text} icon={ele.icon}>
				{
					ele.children && ele.children.map(ele=>(
						<Menu.Item key={ele.id}>
							<NavLink
								to={ele.path}
							>
								{ele.text}
							</NavLink>
						</Menu.Item>
					))
				}
			</SubMenu>
		))
	}

	return(
		<div className='qf-aside'>
			<Logo />
			<Menu
				onClick={e=>setCurrent(e.key)}
				defaultOpenKeys={['sub1']}
				selectedKeys={[current]}
				mode="inline"
				theme={'dark'}
			>
				{ renderNavLinks() }
			</Menu>

			<Toggle {...props} />
			{/*<Toggle collapse={collapse} onToggle={e=>onToggle(e)} />*/}
		</div>
	)
})

const Logo = config(props=>{
	const h = useHistory()
	return (
		<div className="qf-logo">
			<img
				src={props.img.logo}
				onClick={()=>h.replace('/')}
			/>
		</div>
	)
})

const Toggle = props => {
	let { collapse, onToggle } = props
	return (
		<div className='qf-toggle'>
			{
				collapse
				? <MenuFoldOutlined onClick={()=>onToggle(false)} />
				: <MenuUnfoldOutlined onClick={()=>onToggle(true)} />
			}
		</div>
	)
}
