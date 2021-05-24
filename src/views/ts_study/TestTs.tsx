import React, { useState } from 'react'

interface Props {
	type?: string | number
	value?: string
	onChange: (arg:number)=>void
}

const Child = ({
	value='',
	type='add',
	onChange
}: Props) => {
	return (
		<div>
			{
				type==='add'
				? <button onClick={()=>onChange(1)}>加</button>
				: <button onClick={()=>onChange(0)}>减</button>
			}
		</div>
	)
}

// const TestTs: React.FC<{}> = props => {}
// export default TestTs

export default ()=> {
	const [num, setNum] = useState(0)
	const change = (e:any) =>{
		if(e) setNum(num+1)
		else setNum(num-1)
	}
	return (
		<div>
			<h1>测试TypeScript集成</h1>

			<h1>当前值是：{num}</h1>
			<Child
				type='add'
				onChange={(e)=>change(e)}
				/>
			<hr/>
			<Child
				type='sub'
				onChange={(e)=>change(e)}
			/>
		</div>
	)
}
