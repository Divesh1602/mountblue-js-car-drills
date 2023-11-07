import inventory from '../data.mjs';
import getcarinformation from '../problems/problem-2.mjs';

const result = getcarinformation(inventory);
console.log(`Last car is a ${result['car_make']} ${result['car_model']}`);
