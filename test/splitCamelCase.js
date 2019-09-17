const assert = require('assert');
const { splitCamelCase } = require('../src/splitCamelCase');

describe('Split sentence by camel case', function () {
  it('should split sentence when found capital letter', function () {
    assert.equal(splitCamelCase('losPollitosComenGusanos'), 'los Pollitos Comen Gusanos');
  });
});
