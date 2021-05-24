import React from 'react'
import PropTypes from 'prop-types'

// 类型检查的使用（非必须）
// 1、cnpm i prop-types -S
// 2、Child.propTypes = { }

const Child = props => {
	console.log('props', props)
	return (
		<div>
			<div>我是子组件</div>
			{ props.title }
		</div>
	)
}

// 类型检查：检查是否必填，检查数据类型。
Child.propTypes = {
	msg: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	foo: PropTypes.node,
	title: PropTypes.element,
	cate: PropTypes.oneOf(['office','car'])
}

export default class extends React.Component {
	change() {
		console.log('change')
	}
	render() {
		return (
			<div>
				<h1>props数据类型检查</h1>
				<hr/>
				<Child
					msg={'hello'}
					onChange={()=>this.change()}
					foo={<div>hello</div>}
					title={<div>my title</div>}
					cate={'car'}
				/>
			</div>
		)
	}
}
