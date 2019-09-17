const assert = require('assert');
const { getSum } = require('../src/countChildrenStrings');

var myObj = {
  a: 'Hello',
  b: {
    c: 'Hey',
    d: 23,
    e: {
      f: 'A string',
      g: {
        h: 'Another string',
        i: 'd'
      }
    }
  },
  j: {
    k: 'uh another string',
    l: 3
  },
  m: 34
};

describe('Count children strings of an object', function () {
  it('should return 48 of total children length', function () {
    assert.equal(getSum(myObj), 48);
  });
});
