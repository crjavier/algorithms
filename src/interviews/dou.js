// technical interview with DOU

let arr = [
  'Brock', 'Karen', 'Daniel', 'Caroline',
  'Allie', 'Beth', 'Carl', 'David', 'Anna',
  'John', 'Ben', 'Hank', 'Amon', 'Bill',
  'Clark', 'Brooke', 'Diane', 'Carmen', 'Betty',
  'Abigail', 'Bethany', 'Blake', 'Carter', 'Chelsea'
];

const abased = [], bbased = [], cbased = [];

arr.map(name => {
  if (name[0] === 'A') abased.push(name);
  if (name[0] === 'B') bbased.push(name);
  if (name[0] === 'C') cbased.push(name);
});

const [a, b, c] = [
  abased.sort().reverse(),
  bbased.sort().reverse(),
  cbased.sort().reverse(),
];
console.log([a, b, c]);

