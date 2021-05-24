import React, { useEffect, useState, useRef } from 'react'
import './style.scss'
// Echart图表的生成器函数
import goodOptionCreate from './options/goodOption'

// ref
// 在函数式组件中默认没有ref特性
// 使用 useRef 可获得ref特性`const aRef = useRef(null)`
// 在jsx元素上，使用ref属性绑定`<div ref={aRef}></div>`
// 在业务逻辑中，使用 aRef.current 拿到ref实例对象

export default ()=> {

	const [goodData, setGoodData] = useState({})
	// 使用ref
	const goodRef = useRef(null)

	const echarts = window.echarts
	let timer = null

	useEffect(()=>{
		// 触发调接口
		timer = setTimeout(()=>{
			// 来自于调接口的数据
			const data = {
				values: [5, 20, 36, 10, 10, 20],
				title: '本季度商品销售统计'
			}
			setGoodData(data)
		}, 2000)
		return ()=>{
			clearTimeout(timer)
		}
	}, [])

	useEffect(()=>{
		if(goodData.title) {
			// 基于准备好的dom，初始化echarts实例
			// var myChart = echarts.init(document.getElementById('main'))
			var myChart = echarts.init(goodRef.current)
			// 指定图表的配置项和数据
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(goodOptionCreate(goodData))
		}
		return undefined
	}, [goodData])

	return (
		<div className='qf-canvas'>
			<h1>使用Echarts图表</h1>
			<div
				id="main"
				ref={goodRef}
				className='echart-a'>
			</div>
		</div>
	)
}
