// npm package node-random-name generates random names

var random_name = require('node-random-name');

// getting a random name:
console.log(random_name());

// getting female first name:
console.log(random_name({first: true, gender: 'male'}));

// getting last name:
console.log(random_name({last:true}));

// getting a random name with 'seed' property:
// Due to the seed, the generated name will be the same every time the function is 
// called with this particular seed.

console.log(random_name({seed: "Green"}));
console.log(random_name({seed: "Green"}));

console.log(random_name({seed: "Blue"}));