const assert = require('assert');
const { groupItemsOfArrayBy } = require('../src/groupItemsBy');

describe('Group items of an array by number', function () {
  it('should group items of an array by three items', function () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    let grouped = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ];

    assert.deepEqual(groupItemsOfArrayBy(array, 3), grouped);
  });
});
