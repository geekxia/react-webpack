import React, { useState, useEffect, useRef } from 'react'
import { observer, inject } from 'mobx-react'

// 函数式组件 vs. 类组件特点对比、优势和劣势
// 概念：函数式组件（无状态组件、纯组件、PureComponent）

// React组件（React类） vs. React元素（JSX元素）

// useState
// 作用：用于定义声明式变量，模拟类组件中的state
// 语法：const [msg, setMsg] = useState('')
// useState在定义声明式变量时，一定要赋初始值
// useState定义的声明变量，要使用 set*系列方法去更新，不建议直接修改

// useEffect
// 如何理解副作用？你可以这么理解，只要不是生成JSX的业务代码，都可以认为是副作用。
// 副作用包括定时器、调接口、长连接、DOM操作、第三库的初始化等。
// 作用：模拟类组件中生命周期的特性
// 语法：useEffect(()=>{return ()=>{}}, [])
// useEffect 可以看做是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=66395736276513274&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
const params = {}
str.split('&').map(ele=>{
	const arr = ele.split('=')
	params[arr[0]] = arr[1]
})

export default inject('music')(observer(props => {

	// 【仅供参考】
	// 1、默认情况下 useRef() 一直会变（未缓存）
	// 2、把一个 state变量赋值给 refVal.current = index之后，这个useRef()的返回值将不再变化（实现缓存）
	// 3、如果这个 state变化发生变化了，useRef()再次发生变化

	// 【缓存useRef()的参考写法】
	const refVal = useRef(1)

	const [index] = useState(1)
	if(!refVal.current) {
		console.log('current-------', refVal.current)
		refVal.current = index
	}
	const testRef = ()=> {
		let t = parseInt(refVal.current.innerText)
		refVal.current.innerText = t+1
	}

	// 定义声明式变量
	const [count, setCount] = useState(0)
	const [msg, setMsg] = useState('')
	const [show, setShow] = useState(true)
	const [num, setNum] = useState(1000)

	const [page, setPage] = useState(1)
	const [text, setText] = useState('张杰')
	const [load, setLoad] = useState(0)
	const { music } = props

	console.log('props', props)

	// 功能：开启定时器（计数）
	let timer = null
	useEffect(()=>{
		// 在这里写副作用的代码
		console.log('-----num', num)
		timer = setInterval(()=>{
			setNum(num+10)
		}, 1000)
		return ()=>{
			// 一定要关闭定时器
			clearInterval(timer)
		}
	}, [])

	// 功能：修改文档标题
	useEffect(()=>{
		document.title = 'gp5'
		console.log('-----title')
		return undefined
	}, [])

	// 功能：音乐列表功能（支持搜索、分页）
	useEffect(()=>{
		if(page<=1) setPage(1)
		params.w = text
		params.p = page
		// 触发mobx的action方法
		music.updateList(params)
		setText('')
		return undefined
	}, [page, load])


	// 点击"enter"搜索
	const searchConfirm = e => {
		if(e.keyCode===13) {
			setLoad(load+1)
		}
	}
	// 渲染音乐列表
	const renderList = () => {
		return music.list.map(ele=>(
			<div key={ele.id}>
				<span>{ele.id}</span>
				---
				<span>{ele.title}</span>
			</div>
		))
	}


	return (
		<div>
			<h1>测试Hooks</h1>
			<hr/>
			<h2>{count}</h2>
			<button onClick={()=>setCount(count-1)}>自减</button>
			<button onClick={()=>setCount(count+1)}>自增</button>
			<hr/>

			<input
				type="text"
				value={msg}
				onChange={e=>setMsg(e.target.value)}
			/>
			<hr/>

			{ show && <h3>一行文字</h3> }
			<button onClick={()=>setShow(show?false:true)}>显示/隐藏</button>
			<hr/>

			<h2>{num}</h2>
			<hr/>

			<input
				type="text"
				value={text}
				onChange={e=>setText(e.target.value)}
				onKeyUp={searchConfirm}
			/>
			{ renderList() }
			<button onClick={()=>setPage(page-1)}>上一页</button>
			<button onClick={()=>setPage(page+1)}>下一页</button>

			<hr/>

			<h1 ref={refVal}>0</h1>
			<button onClick={testRef}>自增</button>

			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>

		</div>
	)
}))
