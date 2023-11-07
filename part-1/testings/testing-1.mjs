import inventory from '../data.mjs';
import getcarinformation from '../problems/problem-1.mjs';

const result = getcarinformation(inventory);
console.log(
  `Car 33 is a ${result['car_year']} ${result['car_make']} ${result['car_model']}`
);
