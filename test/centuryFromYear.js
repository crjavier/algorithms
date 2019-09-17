const assert = require('assert');
const { centuryFromYear } = require('../src/centuryFromYear');

describe('Century from year', function () {
  it('should return the century from year 1905', function () {
    assert.equal(centuryFromYear(1905), 20);
  });

  it('should return the century from year 1700', function () {
    assert.equal(centuryFromYear(1700), 17);
  });
});