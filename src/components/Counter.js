const Counter = (document, props) => {
	const container = document.createElement('div')
	const minutesElem = document.createElement('div')
	const secondsElem = document.createElement('div')
	container.className = 'timer'
	minutesElem.className = 'timer__minutes'
	secondsElem.className = 'timer__seconds'
	minutesElem.innerHTML = props.minutes
	secondsElem.innerHTML = props.seconds
	container.appendChild(minutesElem)
	container.appendChild(secondsElem)
	return container
}

module.exports = Counter
