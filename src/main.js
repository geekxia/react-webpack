
// 凡是用到jsx语法的地方，都要引入React
import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/style.css'
import '@/assets/common.scss'
import 'antd/dist/antd.less'

import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))

// import txt from '@/assets/abc.txt'
// console.log('txt', txt)
// alert(txt)

// import '@/utils/dom'
// import logo from './assets/logo.jpg'
// window.document.getElementById('img').src = logo
