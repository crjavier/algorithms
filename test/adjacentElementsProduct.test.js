const assert = require('assert');
const { adjacentElementsProduct } = require('../src/adjacentElementsProduct');

describe('Adjacent elements product', function () {
  it('should return the -12', function () {
    assert.equal(adjacentElementsProduct([-23, 4, -3, 8, -12]), -12);
  });

  it('should return the 0', function () {
    assert.equal(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
  });
});