import React from 'react'

// 组合 vs. 继承
// 组合和继承，都是组件（代码）复用的一种思想（方式）。
// 但是 React 官方推荐使用组合模式来实现组件的复用。
// 组合的语法基础是：props.children 和 render props（自定义属性可以传递React元素）

// 如果使用“继承”思想，如何复用组件？思路如下：
// class QfModel extends React.Component {}  // 基类
// class QfDeleteModal extends QfModal {}    // 删除类型Modal
// class QfConfirmModal extends QfModal {}
// class QfDeleteSmallModal extends QfDeleteModal = {}

// 自定义组件 QfModal
const QfModal = props => {
	let {
		show,   // 非必填，默认是false
		onClose,  // 非必填，表示点击x或“取消”按钮
		tip,  // 自定义弹框标题，默认是"提示"，数据类型是字符串或ReactNode
		showClose,  // 是否显示 x 按钮，布尔值
		showHeader,  // 是否有header
		children,  // 表示弹框的主体内容  ReactNode
		size,  // small 表示弹框的大小
		onOk   // 表示“确定”或“删除”
	} = props

	const CancelBtn = (<span
		className='cancel'
		key={1}
		onClick={()=>onClose&&onClose()}>
		取消
	</span>)
	const ConfirmBtn = (
		<span
			key={2}
			onClick={()=>onOk&&onOk()}
			className='confirm'>
			确定
		</span>
	)
	const DeleteBtn = (
		<span
			key={3}
			onClick={()=>onOk&&onOk()}
			className='delete'>
			删除
		</span>
	)
	// 动态渲染footer中的btns
	const renderBtns = () => {
		let { type, footer } = props
		type = type || 'confirm'
		let arr = []
		switch (type) {
			case 'confirm':
				arr = [ConfirmBtn,CancelBtn]
				break
			case 'delete':
				arr = [DeleteBtn,CancelBtn]
				break
			default:
		}
		return footer || arr
	}

	return (
		<div
			className='qf-modal-layer'
			style={{display:(show||false)?"block":"none"}}>
			<div className={`qf-modal qf-modal-${size}`}>
				{/*弹框的头部*/}
				{
					(showHeader) &&
					<div className='header'>
						<span className='tip'>{tip||'提示'}</span>
						<span
							className='close'
							style={{display: showClose?"block":"none"}}
							onClick={()=>onClose&&onClose()}>
							X
						</span>
					</div>
				}

				{/*弹框的主体区域*/}
				<div className='body'>
					<div className='wrap'>
						{children}
					</div>
				</div>

				{/*弹框的底部*/}
				<div
					className='footer'
					style={{border: ((!showHeader) && 'none') }}
				>
					{ renderBtns() }
				</div>
			</div>
		</div>
	)
}

// 使用自定义的 QfModal 组件
export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,   // 控制删除操作的Modal
			visiable: false,  // 控制“修改用户名”的Modal
			username: ''
		}
	}

	// 控制页面中所有弹框的显示
	click(type) {
		console.log('type', type)
		this.setState({[type]: true})
	}

	// 功能1：删除操作
	close() {
		// 重置表单
		this.setState({show: false})
	}

	// 功能2：修改用户
	userModalClose() {
		this.setState({
			visiable: false,
			username: ''
		})
	}
	submit() {
		console.log('提交', this.state)
		this.setState({
			visiable: false,
			username: ''
		})
	}

	render() {
		let { show, visiable, username } = this.state
		return (
			<div>
				<h1>测试组合</h1>

				{/*删除用户*/}
				<button onClick={()=>this.click("show")}>删除一个用户</button>
				<QfModal
					show={show}
					onClose={()=>this.close()}
					tip={'危险'}
					showHeader={false}
					showClose
					footer={<span
						style={{borderColor:'blue'}}
						onClick={()=>this.setState({show: false})}
					>
						我喜欢
					</span>}
				>
					<div>我是一行文字</div>
					<div>我是二行文字</div>
				</QfModal>
				<hr/>

				{/*修改用户名*/}
				<button onClick={()=>this.click('visiable')}>修改用户名</button>
				<QfModal
					show={visiable}
					size='small'
					showHeader
					showClose
					tip={'修改用户名'}
					onClose={()=>this.userModalClose()}
					onOk={()=>this.submit()}
				>
					<span>用户名:</span>
					<input
						type="text"
						value={username}
						onChange={e=>this.setState({username:e.target.value})}
					/>
				</QfModal>
			</div>
		)
	}
}
