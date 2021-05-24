import React from 'react'

// 创建React上下文
const ThemeCtx = React.createContext()

const themes = [
	{
		color: 'black',
		background: 'white'
	},
	{
		color: 'white',
		background: 'black'
	},
	{
		color: 'blue',
		background: 'gray'
	}
]

export { themes }

export default ThemeCtx
