
// Write a function that gets any object
// and returns the sum of the lenghts of
// all the strings inside the object

const getStringsLength = (array) => array.join('').length;

// check type is one of followings [object, string, others].
const getItemsOfType = (myObj, type) => Object.keys(myObj).map(key => { return myObj[key] }).filter(item => typeof item === type);

const getStrings = (myObj) => getItemsOfType(myObj, 'string');

const getObjects = (myObj) => getItemsOfType(myObj, 'object');

// TODO: if the array received has objects with same name of properties, is going to override them
const joinProperties = (array) => {
  let joinedObj = {};
  for (children of array) {
    joinedObj = Object.assign(joinedObj, children);
  }
  return joinedObj;
};

const getSum = (myObj) => {
  const objects = getObjects(myObj);
  if (objects.length <= 0) {
    const strings = getStrings(myObj);
    return getStringsLength(strings);
  } else {
    const strings = getStrings(myObj);
    let aux = joinProperties(objects);
    return getStringsLength(strings) + getSum(aux);
  }
}

module.exports = {
  getSum,
};