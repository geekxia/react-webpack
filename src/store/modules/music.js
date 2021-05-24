import { makeObservable, observable, action } from 'mobx'

import { fetchQqMusic } from '@/utils/api'

export default class MusicStore {
	constructor() {
		makeObservable(this, {
			list: observable,
			updateList: action
		})
	}
	list = []
	updateList(payload) {
		// 调用接口
		fetchQqMusic(payload).then(res=>{
			this.list = res.song.list
		})
	}
}
