import React from 'react'

// 作用：给组件添加统一的 ICP 备案标识

export default WrapComponent => {
	return class extends React.Component {
		renderICP() {
			return (<div>备案号: 京ICP证030173号</div>)
		}
		render() {
			return (
				<>
					<WrapComponent {...this.props} icp='icp' />
					{ this.renderICP() }
				</>
			)
		}
	}
}
