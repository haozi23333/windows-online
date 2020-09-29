export default class Mouse {
	el: HTMLElement
	constructor(el: HTMLElement) {
		this.el = el
		this.init()
	}
	init() {
		console.log('init')
	}
}
