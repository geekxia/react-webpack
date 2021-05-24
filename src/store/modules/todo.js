
// 【[mobx6]定义子Store第一种写法】
// import { makeAutoObservable } from 'mobx'
//
// export default class TodoStore {
// 	constructor() {
// 		makeAutoObservable(this)
// 	}
// 	// 需要共享的状态组件
// 	// 相当于是Vuex中的state
// 	msg = 'hello mobx'
// 	// 相当于是vuex中的mutations 和 actions
// 	changeMsg(payload) {
// 		console.log('++++++', payload)
// 		this.msg = payload
// 		console.log('this msg', this.msg)
// 	}
// 	// 相当于是Vuex中的getters
// 	get length() {
// 		return this.msg.length
// 	}
// }

// 【[mobx6]定义子Store第二种写法】
// observable 它用于把一个变量变成可观察的，当它变化时，在观察者中可以自动更新
// action 表示把一个方法变成action，它可以直接修改observable变量
// computed 用于get操作，是计算属性，当它所关联的observable变量发生变化时，会重新计算
import { makeObservable, action, computed, observable } from 'mobx'
export default class TodoStore {
	constructor() {
		makeObservable(this, {
			msg: observable,
			changeMsg: action,
			length: computed,
			list: observable,
			updateList: action
		})
	}
	msg = 'hello mobx 2'
	changeMsg(payload) {
		this.msg = payload
	}
	get length() {
		const s = this.handleString(this.msg)
		return s.length
	}
	// Modx中的业务方法，不参与action和计算属性
	handleString(str) {
		return str.replace(/\s/img, '')
	}

	// TodoList实现
	list = []
	updateList(payload) {
		// type = 'add' 'del' 'edit' 'clear'
		switch (payload.type) {
			case 'add':
				this.list.push(payload.data)
				break
			case 'del':
				this.list = this.list.filter(ele=>ele.id!==payload.data)
				break
			case 'edit':
				// 如果遇到表单无法修改的问题，记得深复制一下
				this.list.map((ele,idx,arr)=>{
					if(ele.id === payload.data.id) {
						arr[idx].task = payload.data.task
					}
				})
				console.log('new this.list', this.list)
				break
			case 'clear':
				this.list = []
				break
			default:
		}
	}
}

// 【[mobx5]的写法】
// import { action, computed, observable } from 'mobx'
// export default class TodoStore {
// 	@observable msg = 'hello mobx5'
// 	@action changeMsg(payload) {
// 		this.msg = payload
// 	}
// 	@computed get length() {
// 		const s = this.handleString(this.msg)
// 		return s.length
// 	}
// 	handleString() {
// 		return str.replace(/\s/img, '')
// 	}
// }
