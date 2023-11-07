// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function getcarinformation(inventory) {
  const n = inventory.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (
        inventory[i].car_model.localeCompare(inventory[i + 1].car_model) > 0
      ) {
        const temp = inventory[i];
        inventory[i] = inventory[i + 1];
        inventory[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return inventory;
}

export default getcarinformation;
