const timer = require('../../src/libs/timer')

describe('timer libs',() => {
	describe('toTimerObject()', () => {
		it('should create timer object containing minutes and seconds', () => {
			const minutes = 1
			const seconds = 0 
			expect(timer.toTimerObject(minutes, seconds)).toEqual({
				minutes,
				seconds
			})
		})
	})
	
	describe('countDown()', () => {
		it('should decrement seconds by 1', () => {
			const counter = {
				'minutes': 1,
				'seconds': 20
			}
			const firstRun = timer.countDown(counter)
			const secondRun = timer.countDown(firstRun)
			expect(firstRun).toEqual({
				'minutes': 1,
				'seconds': 19
			})
			expect(secondRun).toEqual({
				'minutes': 1,
				'seconds': 18
			})
		})

		it('should decrement seconds until it reaches 0', () => {
			const counter = {
				'minutes': 1,
				'seconds': 1
			}
			expect(timer.countDown(counter)).toEqual({
				'minutes': 1,
				'seconds': 0
			})
		})

		it('should decrement minutes by 1 if seconds reaches 0', () => {
			const counter = {
				'minutes': 2,
				'seconds': 0
			}
			expect(timer.countDown(counter)).toEqual({
				'minutes': 1,
				'seconds': 59
			})
		})
	
		it('should decrement minutes until it reaches 0', () => {
			const counter = {
				'minutes': 1,
				'seconds': 0
			}
			expect(timer.countDown(counter)).toEqual({
				'minutes': 0,
				'seconds': 59
			})
		})

		it('should returns object itself if minutes and seconds reach 0', () => {
			const counter = {
				'minutes': 0,
				'seconds': 0
			}
			expect(timer.countDown(counter)).toEqual({
				'minutes': 0,
				'seconds': 0
			})
		})
	})
})
