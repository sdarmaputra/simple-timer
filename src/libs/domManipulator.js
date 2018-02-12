const toggleElement = (element, isShown) => {
	if (isShown) element.style.display = 'block';
	else element.style.display = 'none';
}

const setInputValue = (element, value) => {
	element.value = value
}

const drawComponent = (component, target) => target.appendChild(component())

module.exports = {
	toggleElement,
	setInputValue,
	drawComponent
}
