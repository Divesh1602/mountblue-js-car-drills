import inventory from '../data.mjs';
import getcarinformation from '../problems/problem-6.mjs';

const result = getcarinformation(inventory);

for (let i = 0; i < result.length; i++) {
  console.log(JSON.stringify(result[i]));
}
