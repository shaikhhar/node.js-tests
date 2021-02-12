// Write a script to find the following set of data from a given array.

let Items = [7, 4, 8, 10, 1, 2, 2, 3, 4];

// a) Write a script to return an array with unique value.

uniqueItems = Items.reduce((p, c) => {
  if (p.includes(c)) {
    return p;
  } else {
    p.push(c);
    return p;
  }
}, []);
console.log("Unique values", uniqueItems);

// or
console.log("Unique values", [...new Set(Items)]);

// b) Write a script to return an array with ascending order value.

const ItemsAsc = Items.sort((a, b) => a - b);
console.log("Items sorted Ascending", ItemsAsc);

// c) Write a script to return max value from the array.
console.log("Max value ", Math.max(...Items));

// d) Write a script to return the sum of the array values.
const sum = Items.reduce((sum, currentValue) => sum + currentValue, 0);
console.log("sum ", sum);

// e) Write a script to find the second max value of the array.
ItemsSortedDescending = Items.sort((a, b) => b - a);
console.log("second max ", ItemsSortedDescending[1]);
