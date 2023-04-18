/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log(-1);
  } else {
    [x, y] = [y, x];
    console.log(`Swapped values: x=${x}, y=${y}`);
  }
}

// Task 2: Add code here
swap(2, 3);
swap(2, "animal");
swap(100, 2000);

// module.exports = swap;
