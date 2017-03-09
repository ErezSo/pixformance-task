'use strict';

var test = require('tape');
var add = require('./index.js').add;
var add2 = require('./index.js').add2;

// write your tests here
test('A passing test for add', (assert) => {
  const expected = 6;
  const actual = add(2,4);

  assert.equal(actual, expected);
});


test('A passing test for add2', (assert) => {
  const expected = 4;
  const actual = add2(2);

  assert.equal(actual, expected);
});
