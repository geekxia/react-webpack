import React from 'react'

// 自定义一个换肤组件
export default props => {
	let { theme, change } = props
	const changeRGB = (e, type) =>{
		// 不能修改props，所以深复制一下
		const newTheme = JSON.parse(JSON.stringify(theme))
		newTheme[type] = e.target.value
		// 触发父组件传递过来的change方法
		change && change(newTheme)
	}
	return (
		<div>
			<span>前景色：</span>
			<input
				type="color"
				value={theme.color}
				onChange={e=>changeRGB(e, 'color')}
			/>
			<span>背景色：</span>
			<input
				type="color"
				value={theme.background}
				onChange={e=>changeRGB(e, 'background')}
			/>
		</div>
	)
}
