// 代码分割（相当于是Vue-Router中的路由懒加载）
// 作用：提升应用程序的运行速度，本质上是一种性能优化
// 技术核心点：异步地动态地import组件，Webpack代码分割技术

// 参考文档：https://reactrouter.com/web/guides/code-splitting

// 第1步：cnpm i @babel/plugin-syntax-dynamic-import -D
// 第2步：在 babel.config.js 中进行配置，以支持动态import这种语法
// 第3步：cnpm i @loadable/component -S
// 第4步：使用 @loadable/component 库，动态import页面组件
// Webpack打包时，会根据 @loadable/component 配置的路由规则，实现代码分割。

// React-Router-DOM
// 1、在React路由系统中，并不是所有的组件中都能拿到路由信息和路由API
// 2、只有被Route包裹过（也就是定义在路由匹配规则上）的组件中，才能通过props拿到路由信息和路由API
// 3、对那些没有被Route包裹过的组件，该如何访问路由信息和路由API呢？使用withRouter()这个高阶组件

import React from 'react'
import loadable from "@loadable/component"

const TestJsx = loadable(()=>import('./study/TestJsx'))
const TestState = loadable(()=>import('./study/TestState'))
const TestTypes = loadable(()=>import('./study/TestTypes'))
const TestStateLift = loadable(()=>import('./study/TestStateLift'))
const TestList = loadable(()=>import('./study/TestList'))
const TestLife = loadable(()=>import('./study/TestLife'))
const TestHooks = loadable(()=>import('./study/TestHooks'))
const TestHoc = loadable(()=>import('./study/TestHoc'))
const TestEchart = loadable(()=>import('./canvas/TestEchart'))

// 路由
const TestRouterHook = loadable(()=>import('./router/TestRouterHook'))
const UserDetail = loadable(()=>import('./router/UserDetail'))

// 状态管理
const TestMobx = loadable(()=>import('./mobx/TestMobx'))
const TodoList = loadable(()=>import('./mobx/TodoList'))

// TypeScript学习
const TestTs = loadable(()=>import('./ts_study/TestTs'))


// IOCN
import {
  AppstoreOutlined,
	SettingOutlined,
	TransactionOutlined,
	PieChartOutlined,
  ClockCircleOutlined
} from '@ant-design/icons'

export default [
	{
		id: 10,
		text: 'React基础',
		icon: <AppstoreOutlined />,
		children: [
			{ id: 1001, text: '学习JSX', path: '/jsx', component: TestJsx },
			{ id: 1002, text: '学习State', path: '/state', component: TestState },
			{ id: 1004, text: '状态提升', path: '/lift', component: TestStateLift },
			{ id: 1005, text: '列表渲染', path: '/list', component: TestList },
			{ id: 1006, text: '生命周期', path: '/life', component: TestLife },
		]
	},
	{
		id: 11,
		icon: <SettingOutlined />,
		text: 'React进阶',
		children: [
			{ id: 1103, text: '类型检查', path: '/types', component: TestTypes },
			{ id: 1107, text: '学习Hooks', path: '/hooks', component: TestHooks },
			{ id: 1108, text: '高阶组件', path: '/hoc', component: TestHoc },
		]
	},
	{
		id: 12,
		icon: <TransactionOutlined />,
		text: 'React路由',
		children: [
			{
				id: 1209,
				text: '路由Hooks',
				path: '/router/hooks',
				component: TestRouterHook,
				children: [
					{ id: 120901, text: '用户详情', path: '/router/hooks/user/:id', component: UserDetail }
				]
			},

		]
	},
	{
		id: 13,
		icon: <PieChartOutlined />,
		text: '第三方库',
		children: [
			{ id: 1034, text: 'Echart图表', path: '/echart', component: TestEchart },
		]
	},
  {
    id: 14,
    icon: <ClockCircleOutlined />,
    text: '状态管理',
    children: [
      { id: 1401, text: '学习Mobx', path: '/mobx', component: TestMobx },
      { id: 1402, text: 'TodoList', path: '/todo', component: TodoList }
    ]
  },
  {
    id: 15,
    icon: <ClockCircleOutlined />,
    text: 'TS 学习',
    children: [
      { id: 1501, text: 'TestTs', path: '/ts', component: TestTs }
    ]
  }
]
