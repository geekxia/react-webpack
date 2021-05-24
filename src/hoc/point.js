import React from 'react'

// 作用：在组件中调用某个api实现埋点功能

export default function point(WrapComponent) {
	return class extends React.Component {
		componentDidMount() {
			// 调用埋点api调用
			console.log('埋点api已调用')
		}
		render() {
			return (
				<WrapComponent {...this.props} point='point' />
			)
		}
	}
}
