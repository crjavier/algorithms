const assert = require('assert');
const { checkPalindrome } = require('../src/palindrome');

describe('Check if a word is palindrome', function () {
  it('should check if a word is same readed as straightforward as backward', function () {
    assert.equal(checkPalindrome('aabaa'), true);
  });

  it('should check if a word is not same readed as straightforward as backward', function () {
    assert.equal(checkPalindrome('abac'), false);
  });
});