import inventory from '../data.mjs';
import getyears from '../problems/problem-4.mjs';
import getyearslessthan2000 from '../problems/problem-5.mjs';

const arr = getyears(inventory);
const result = getyearslessthan2000(arr);
console.log(result.length);
