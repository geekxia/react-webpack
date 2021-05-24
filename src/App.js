import React from 'react'

import '@/assets/common.scss'
import ThemeCtx from '@/utils/theme'


// 路由集成
import { HashRouter } from 'react-router-dom'
import { Layout } from '@/components'

// mobx集成
import store from '@/store'
import { Provider } from 'mobx-react'

// 根容器
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			theme: {
				color: '#000000',
				background: '#ffffff'
			}
		}
	}
	changeTheme(theme) {
		this.setState({theme})
		// this.setState({theme: themes[Math.floor(Math.random()*3)]})
	}
	render() {
		let { theme } = this.state
		return (
			<HashRouter>
				<Provider {...store}>
					<ThemeCtx.Provider value={theme}>
						<Layout />
					</ThemeCtx.Provider>
				</Provider>
			</HashRouter>

		)
	}
}

export default App
