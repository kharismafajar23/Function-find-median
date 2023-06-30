// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  // Sort array from smallest
  let sortedArray = function (a, b) {
    return a - b;
  };
  let newArray = input.sort(sortedArray);
  console.log(newArray);

  // check if total array is even number
  if (newArray.length % 2 == 0) {
    // find middle array from length array
    let x = newArray.length / 2;

    // find the middle array
    let num1 = newArray[x - 1];
    // find the middle array + 1
    let num2 = newArray[x];

    // find median
    let median = (num1 + num2) / 2;
    return median;
  } else {
    // if total array is odd number
    let x = (newArray.length + 1) / 2;
    // find median
    let median = newArray[x];
    return median;
  }
}

console.log(result(input));
