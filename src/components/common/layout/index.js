import React, { useState } from 'react'

import { Layout } from 'antd'
import './style.scss'
const { Header, Sider, Content } = Layout

import QfAside from './QfAside'
import QfContent from './QfContent'
import QfHeader from './QfHeader'

export default ()=> {
	const [ collapse, setCollapse ] = useState(false)
	return(
		<div className='qf-layout'>
			<Layout>

				<Sider width={150} collapsed={collapse}>
					<QfAside collapse={collapse} onToggle={e=>setCollapse(e)} />
				</Sider>

				<Layout>
					<Header>
						<QfHeader />
					</Header>
					<Content>
						<QfContent />
					</Content>

				</Layout>
			</Layout>
		</div>
	)
}
