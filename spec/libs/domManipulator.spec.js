const domMatchers = require('jasmine-dom-custom-matchers')
const { 
	toggleElement, 
	setInputValue,
	drawComponent
} = require('../../src/libs/domManipulator')

describe('dom manipulator', () => {
	const KeyboardEvent = window.KeyboardEvent
	beforeAll(() => {
		jasmine.addMatchers(domMatchers)
	})

	describe('toggleElement()', () => {
		it('should display element if second parameter is set to true', () => {
			const element = document.createElement('div')
			document.body.append(element)
			element.style.display = 'none';
			expect(element).toHaveComputedStyle('display', 'none')
			toggleElement(element, true)
			expect(element).toHaveComputedStyle('display', 'block')
		})

		it('should hide element if second parameter is set to false', () => {
			const element = document.createElement('div')
			document.body.append(element)
			element.style.display = 'block';
			expect(element).toHaveComputedStyle('display', 'block')
			toggleElement(element, false)
			expect(element).toHaveComputedStyle('display', 'none')
		})
	})

	describe('setInputValue()', () => {
		it('should set certain input element with certain value', () => {
			const element = document.createElement('input')
			element.setAttribute('type', 'text')
			document.body.appendChild(element)
			setInputValue(element, 'test')
			expect(element.value).toBe('test')
		})
	})
	
	describe('drawComponent()', () => {
		it('should append component into an HTML element', () => {
			const parent = document.createElement('div')
			const child = () => document.createElement('div')
			document.body.appendChild(parent)
			expect(parent).toHaveChildren(0)
			drawComponent(child, parent)
			expect(parent).toHaveChildren(1)
		})
	})
})
