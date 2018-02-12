const domMatchers = require('jasmine-dom-custom-matchers')
const Counter = require('../../src/components/Counter')

describe('Counter', () => {
	let counterElement = null
	const props = {
		minutes: 1,
		seconds: 10
	}

	beforeAll(() => {
		jasmine.addMatchers(domMatchers)
		counterElement = Counter(document, props) 
	})

	it('should return minutes and seconds based on props', () => {
	
		expect(counterElement).toBeHTMLElement('div')
		expect(counterElement.children[0]).toContainText(props.minutes.toString())
		expect(counterElement.children[1]).toContainText(props.seconds.toString())
	})

	it('should have timer class at parent element', () => {
		expect(counterElement).toHaveClass('timer')	
	})

	it('should have timer__minutes class at the first child element', () => {
		expect(counterElement.children[0]).toHaveClass('timer__minutes')
	})

	it('should have timer__seconds class at the second child element', () => {
		expect(counterElement.children[1]).toHaveClass('timer__seconds')
	})
})
