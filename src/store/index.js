import TodoStore from './modules/todo'
import MusicStore from './modules/music'

class Store {
	constructor() {
		// 对多个子module进行实例化
		this.todo = new TodoStore()
		this.music = new MusicStore()
	}
}

export default new Store()

// mobx[6] mobx-react[7] 安装说明

// 一、安装两个库
// cnpm i mobx -S
// cnpm i mobx-react -S

// 二、定义Store
// class Store {
// 	constructor() {
// 		this.todo = new TodoStore()
// 	}
// }

// 三、定义子Store
// class TodoStore {
// 	constructor() {
// 		makeObservable(this, {
// 			msg: observable,
// 			changeMsg: action,
// 			length: computed
// 		})
// 	}
// }

// 四、连接Mobx和React应用
// function App() {
// 	return (
// 		<Provider {...store}></Provider>
// 	)
// }

// 五、在React组件中使用Mobx
// const TestMobx = inject('todo')(observer(props=>(<div></div>)))
