// Write a function that gets any object
// and returns the sum of the lenghts of
// all the strings inside the object

var myObj = {
  a: 'Hello',
  b: {
    c: 'Hey',
    d: 23,
    f: {
      g: 'A string',
      h: {
        i: 'Another string',
        f: 'd'
      }
    }
  },
  e: 34
};

function getSum(myObj) {
  const objects = getObjects(myObj);
  if (objects.length <= 0) {
    const strings = getStrings(myObj);
    return getStringsLength(strings);
  } else {
    const strings = getStrings(myObj);
    return getStringsLength(strings) + getSum(objects[0]);
  }
}

function getStringsLength(array) {
  return array.join('').length;
}

function getStrings(myObj) {
  return Object.keys(myObj).map(key => { return myObj[key] }).filter(item => typeof item === 'string');
}

function getObjects(myObj) {
  return Object.keys(myObj).map(key => { return myObj[key] }).filter(item => typeof item === 'object');
}

const myfunc = (myObj) => getSum(myObj);
const res = myfunc(myObj);
console.log(res);
