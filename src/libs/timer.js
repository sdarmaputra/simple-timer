const toTimerObject = (minutes, seconds) => ({
	minutes,
	seconds
})

const countDown = (timerObject) => {
	if (timerObject.minutes === 0 && timerObject.seconds === 0) return timerObject

	let minutes = timerObject.minutes
	let seconds = timerObject.seconds - 1
	if (seconds < 0) {
		minutes -= 1
		seconds = 59
	}
	if (minutes < 0) minutes = 0
	
	return {
		'minutes': minutes,
		'seconds': seconds
	}
}

module.exports = {
	toTimerObject,
	countDown
}
