const stringCalculator = require('./stringCalculator')

describe('stringCalculator', () => {

	it('returns a single digit', () => {
		expect(stringCalculator('1')).toEqual(['1', 1])
	})

	it('returns the sum of 2 + 3', () => {
		expect(stringCalculator('2 + 3')).toEqual(['2 + 3', 5])
	})

	it('returns the sum of 4 + 5 + 6', () => {
		expect(stringCalculator('4 + 5 + 6')).toEqual(['4 + 5 + 6', 15])
	})

	it('returns the output of 8 - 7', () => {
		expect(stringCalculator('8 - 7')).toEqual(['8 - 7', 1])
	})

	it('returns the output of 9 - 10', () => {
		expect(stringCalculator('9 - 10')).toEqual(['9 - 10', -1])
		})

	it('returns the output of 2 * 3', () => {
		expect(stringCalculator('2 * 3')).toEqual(['2 * 3', 6]) 
	})

	it('returns the output of 2.0 * 3.0', () => {
		expect(stringCalculator('2.0 * 3.0')).toEqual(['2.0 * 3.0', 6.0]) 
	})

	it('returns the output of 10 / 5', () => {
		expect(stringCalculator('10 / 5')).toEqual(['10 / 5', 2]) 
	})

	it('returns the output of 5 / 2', () => {
		expect(stringCalculator('5 / 2')).toEqual(['5 / 2', 2.5]) 
	})

})