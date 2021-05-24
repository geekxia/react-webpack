import React from 'react'

// 表单绑定（React表单是单向绑定的）
// 1、受控表单：指的是表单的value/checked属性由state控制。
// 2、非受控表单：指的是表单的value/checked属性不由state控制。

// 原则：在React开发中尽可能地都使用受控表单，但是有一个例外<input type="file"/>

// 自定义组件CheckBox
const CheckBox = props => {
	let { data, value } = props
	const change = e => {
		console.log('checkbox', e.target.value, e.target.checked)
		let arr = []
		const val = parseInt(e.target.value)
		if(e.target.checked) {
			arr = [...value, val]
		}else{
			arr = value.filter(ele=>ele!=val)
		}
		console.log('new arr', arr)
		// 事件通信，触发父组件传递的自定义事件
		props.onChange(arr)
	}
	return (
		<div className='qf-checkbox'>
			{
				data.map(ele=>(
					<span key={ele.id}>
						<input
							type="checkbox"
							value={ele.id}
							checked={value.includes(ele.id)}
							onChange={e=>change(e)}
						/>
						<span>{ele.label}</span>
					</span>
				))
			}
		</div>
	)
}

let pass = ''
export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			age: 0,
			school: '中山大学',
			desc: '',
			gender: 1,
			checkedArr: [1,2],
			level: 1,
			cateSelected: [1]
		}
	}

	// 复用表单onChange方法
	formChange(e, k) {
		console.log('k', k)
		if(!k) {
			// 有没有改变school
			this.setState({[e.target.name]: e.target.value})
		}else{
			switch (k) {
				case 'checkedArr':
					// 如果用户是打勾，我要向checkedArr中添加一个value
					// 如果用户是取消，我要从checkedArr中找到对应的value、将其删掉
					const val = parseInt(e.target.value)
					if(e.target.checked) {
						this.setState(state=>({[k]: [...state.checkedArr, val].sort((a,b)=>(a-b))}))
					}else{
						this.setState(state=>({[k]: state.checkedArr.filter(ele=>ele!==val)}))
					}
					// console.log('checkbox', e.target.value, e.target.checked)
					break
				case 'cateSelected':
					console.log('----------------------',e)
					this.setState({[k]: e})
					break;
				default:
			}
		}
	}

	// 提交接口
	submit() {
		const data = {
			name: document.getElementById('name').value,
			mobile: this.refs.mobile.value,
			pass: pass,
			age: this.state.age,
			school: this.state.school,
			desc: this.state.desc,
			gender: this.state.gender,
			favIds: this.state.checkedArr.join(';'),
			level: this.state.level,
			cateIds: this.state.cateSelected.join(';')
		}
		console.log('提交', data)
	}

	render() {

		let { age, school, desc, gender, checkedArr, level, cateSelected } = this.state
		const favArr = [
			{ label: '读书', value: 1 },
			{ label: '跑步', value: 2 },
			{ label: '吃饭', value: 3 },
			{ label: '学习', value: 4 },
			{ label: '电影', value: 5 },
			{ label: '游戏', value: 6 }
		]
		const levelArr = [
			{ label: '硕士', value: 1 },
			{ label: '本科', value: 2 },
			{ label: '大专', value: 3 },
			{ label: '高中', value: 4 }
		]
		const cateArr = [
			{ id:1, value:'car', label:'汽车生活'},
			{ id:2, value:'office', label:'办公用品'},
			{ id:3, value:'sport', label:'运动器材'},
			{ id:4, value:'book', label:'图书影像'}
		]

		return (
			<div>
				<h1>表单绑定</h1>

				{/* 非受控表单（不建议这样写） */}
				<span>姓名：</span>
				<input id='name' type="text" /><br/>

				{/* 非受控表单（不建议这样写） */}
				<span>手机：</span>
				<input ref='mobile' type="text"/><br/>

				{/* 非受控表单（不建议这样写） */}
				<span>密码：</span>
				<input
					type="password"
					onInput={e=>pass=e.target.value}
				/><br/>

				{/* 非受控表单（不建议这样写） */}
				<span>年龄：</span>
				<input
					type="number"
					defaultValue={age}
					onInput={e=>this.setState({age:e.target.value})}
				/><br/>

				{/* 非受控表单：这是React唯一的一个允许的写法 */}
				<span>头像：</span>
				<input type="file"/><br/>

				<hr/>

				{/* 受控表单（建议的写法） */}
				<span>学校：</span>
				<input
					type="text"
					value={school}
					name='school'
					onChange={e=>this.formChange(e)}
				/><br/>

				<span>简介：</span>
				<textarea
					cols="30"
					rows="2"
					value={desc}
					name='desc'
					onChange={e=>this.formChange(e)}
				/><br/>

				<span>性别：</span>
				{
					[{label:'男',value:1},{label:'女',value:2}].map(ele=>(
						<span key={ele.value}>
							<input
								type="radio"
								name='gender'
								value={ele.value}
								checked={gender==ele.value}
								onChange={e=>this.formChange(e)}
							/>
							<span>{ele.label}</span>
						</span>
					))
				}
				<br/>

				<span>爱好：</span>
				{
					favArr.map(ele=>(
						<span key={ele.value}>
							<input
								type="checkbox"
								value={ele.value}
								checked={checkedArr.includes(ele.value)}
								onChange={e=>this.formChange(e, 'checkedArr')}
							/>
							<span>{ele.label}</span>
						</span>
					))
				}
				<br/>

				<span>学历：</span>
				<select
					name='level'
					value={level}
					onChange={e=>this.formChange(e)}
				>
					{
						levelArr.map(ele=>(
							<option
								key={ele.value}
								value={ele.value}
							>
								{ele.label}
							</option>
						))
					}
				</select>
				<br/>

				{/* 测试自定义CheckBox */}
				<span>品类：</span>
				<CheckBox
					data={cateArr}
					value={cateSelected}
					onChange={e=>this.formChange(e, 'cateSelected')}
				/>

				<button onClick={()=>this.submit()}>提交</button>
			</div>
		)
	}
}
