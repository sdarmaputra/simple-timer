const timer = require('./libs/timer')
const { toggleElement, setInputValue } = require('./libs/domManipulator')
const { attachListeners } = require('./app/eventListener')

const state = {
	histories: [],
	counter: timer.toTimerObject(0, 0),
	counterRunner: null
}

const timerOptionsFormElement = document.querySelector('#timer-options-form')
const timerElement = document.querySelector('#timer')
const optionsMinutesElement = timerOptionsFormElement.querySelector('#minutes')
const optionsSecondsElement = timerOptionsFormElement.querySelector('#seconds')

const handleNumberInputOnly = (event) => {
	if (isNaN(event.key) && !event.ctrlKey && !event.shiftKey && !event.altKey && event.charCode !== 0) {
		event.preventDefault()
	}
}

const drawCounter = (counter, element) => {
	element.querySelector('#timer-minutes').innerHTML = counter.minutes
	element.querySelector('#timer-seconds').innerHTML = counter.seconds
}

const countDown = (callback) => {
	state.counter = timer.countDown(state.counter)
	console.log(state.counter)
	drawCounter(state.counter, timerElement)
	if (state.counter.minutes === 0 && state.counter.seconds === 0) callback()
}

const startCounter = () => {
	const timerStartTime = new Date();
	const timerId = timerStartTime.getTime()
	const startOfTimer = new CustomEvent('startOfTimer', { 
		detail: {
			id: timerId,
			counter: state.counter,
			timerStartTime,
		} 
	})
	window.dispatchEvent(startOfTimer)
	drawCounter(state.counter, timerElement)
	state.counterRunner = setInterval(() => countDown(() => handleEndOfTimer(timerId)), 1000)
}

const stopCounter = () => {
	clearInterval(state.counterRunner)
	state.counterRunner = null
}

const handleEndOfTimer = (timerId) => {
	const endOfTimer = new CustomEvent('endOfTimer', { 
		detail: { 
			id: timerId,
			timerEndTime: new Date()	
		}
	})
	window.dispatchEvent(endOfTimer)
	stopCounter()
}

optionsMinutesElement.addEventListener('keypress', handleNumberInputOnly)
optionsSecondsElement.addEventListener('keypress', handleNumberInputOnly)

timerOptionsFormElement.addEventListener('submit', (event) => {
	event.preventDefault()
	const minutes = +event.target.querySelector('#minutes').value
	const seconds = +event.target.querySelector('#seconds').value

	if (minutes !== '' && seconds !== '') {
		state.counter = timer.toTimerObject(minutes, seconds)
	}
	stopCounter()
	startCounter()
})

setInputValue(optionsMinutesElement, 0)
setInputValue(optionsSecondsElement, 0)
drawCounter(state.counter, timerElement)
attachListeners(window, state)
