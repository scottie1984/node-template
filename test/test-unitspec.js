var assert = require('assert');
var test = require('../lib/test.js');

describe('test', function() {
	it('test', function() {
		var foo = { bar: 'rugby' };
		assert.equal(test.test(foo), 'rugby');
	});
});