const lodash =require('lodash');

const arr=['sangam','ayush', 'man', 'boy'];

const captilize=lodash.map(arr,lodash.capitalize);
console.log(captilize);