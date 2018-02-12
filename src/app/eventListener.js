const attachListeners = (window, state) => {
	window.addEventListener('startOfTimer', (event) => {
		state.histories = [
			...state.histories,
			event.detail
		]
	})	
		
	window.addEventListener('endOfTimer', (event) => {
		state.histories = state.histories.map((history) => {
			if (history.id === event.detail.id) return Object.assign({}, history, event.detail)
			else return history
		})
	})
}

module.exports = {
	attachListeners
}
