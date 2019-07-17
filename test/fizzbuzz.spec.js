const assert = require('assert');

const { isMultipleOfThree } = require('../fizzbuzz');

/*
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('FizzBuzz', function () {
  it('1 igual a 1', function () {
    assert.equal(1, 1);
  });
});

*/

describe('FizzBuzz', function () {
  it('should return true when passing a multiple of 3', function () {
    assert.equal(isMultipleOfThree(3), true);
    assert.equal(isMultipleOfThree(6), true);
  });

  it('should return true when passing a number that is not multiple of 3', function () {
    assert.equal(isMultipleOfThree(4), false);
  });

  it('should return throw an error when passing something that is not a number', function () {
    function testError() {
      isMultipleOfThree('string');
    }
    assert.throws(testError, Error, 'Wrong type passed');
  });
});

