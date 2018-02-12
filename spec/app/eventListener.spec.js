const domMatchers = require('jasmine-dom-custom-matchers')
const { attachListeners } = require('../../src/app/eventListener')

describe('event listener', () => {
	const CustomEvent = window.CustomEvent
	const state = {
		histories: []
	}

	beforeAll(() => {
		jasmine.addMatchers(domMatchers)
		attachListeners(window, state)
	})

	beforeEach(() => {
		state.histories = []
	})

	describe('attachListeners()', () => {
		it ('should append event detail into histories when startOfTimer event fired', () => {
			const detail =  {
				id: '01',
				timerStartTime: new Date()
			}
			const startOfTimer = new CustomEvent('startOfTimer', { detail })
			expect(state.histories.length).toBe(0)
			window.dispatchEvent(startOfTimer)
			expect(state.histories.length).toBe(1)
			expect(state.histories).toContain(detail)
		})
		
		it ('should update histories when endOfTimer event fired', () => {
			const detail =  {
				id: '01',
				timerStartTime: new Date()
			}
			const newDetail = {
				id: '01',
				timerEndTime: new Date()
			}
			const startOfTimer = new CustomEvent('endOfTimer', { detail: newDetail })
			state.histories = [detail]			
			expect(state.histories).toContain(detail)
			window.dispatchEvent(startOfTimer)
			expect(state.histories).toContain(Object.assign({}, detail, newDetail))
		})

	})
})
