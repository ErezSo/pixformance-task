'use strict';

var fruit = [
  'apple',
  'pear',
  'banana',
  'apple',
  'orange',
  'pear',
  'apple',
  'banana'
];

// Sort alphabetically and remove duplicates
function tidyArray(array) {
  return array.sort().reduce((prev, curr) => {
    if (prev.includes(curr) === false) prev.push(curr);
    return prev;
  }, [])
}

console.log(tidyArray(fruit));
