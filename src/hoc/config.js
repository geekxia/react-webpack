import React from 'react'
import img from '@/utils/img'
import dialog from '@/utils/dialog'

// 作用：用于注入一些全局的配置或方法，比如图片模块、交互提示模块等。

export default WrapComponent => {
	return props=>(
		<WrapComponent
			{...props}
			dialog={dialog}
			img={img}
		/>
	)
}
