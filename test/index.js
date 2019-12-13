const test = require('ava')
const splitValue = require('..')

test('it splits multiple shorthand values correctly', t => {
	const fixtures = [
		[['red'], 'red'],
		[['green', 'red', 'blue'], 'green, red, blue'],
		[
			['red', 'linear-gradient(red, green, blue)', 'url(bg.jpg)'],
			'red, linear-gradient(red, green, blue), url(bg.jpg)'
		],
		[['color 2s', 'margin .2s 1s steps(4)'], 'color 2s, margin .2s 1s steps(4)']
	]

	fixtures.forEach(([expected, fixture]) => {
		t.deepEqual(splitValue(fixture), expected)
	})
})
