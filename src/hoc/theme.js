import React from 'react'
import ThemeCtx from '@/utils/theme'

// 作用：通过高阶组件来消费上下文中的换肤状态

export default WrapComponent => {
	return class extends React.Component {
		render() {
			return (
				<ThemeCtx.Consumer>
				{
					theme=>(
						<div style={{color:theme.color, background:theme.background}}>
							<WrapComponent {...this.props}/>
						</div>
					)
				}
				</ThemeCtx.Consumer>
			)
		}
	}
}
