const alert = opt=> {
	window.alert(opt.title)
}

const confirm = opt=> {
	console.log('confirm', opt)
}

export default {
	confirm,
	alert
}
