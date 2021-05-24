import React from 'react'

// 权限管理
// 粗粒度的权限管理：页面级别的权限管理
// 细粒度的权限管理：页面元素级别的权限管理

export default roleArr => WrapComponent => {
	return class extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				role: ''
			}
		}
		componentDidMount() {
			// 从用户信息中拿到role字段
			this.setState({role: 'admin'})
		}
		render() {
			let { role } = this.state
			// 判断权限
			console.log('roleArr', roleArr)
			const flag = roleArr.includes(role)
			return (
				<div>
				{
					flag ? <WrapComponent {...this.props} role={role} />
					: <h1>你没有权限访问</h1>
				}
				</div>
			)
		}
	}
}

// export default function role(roleArr) {
// 	return function (WrapComponent) {
// 		return class extends React.Component {
// 			render() {
// 				return (
// 					<WrapComponent />
// 				)
// 			}
// 		}
// 	}
// }
