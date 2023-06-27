const binarySearch = (data, value) => {
  let lowIndex = 0;
  let highIndex = data.length - 1;

  // Once the lowIndex is greater than the highIndex, we've searched the whole array, and value was not found
  // When the lowIndex and highIndex are the same, we still need to check that item, since we've narrowed our search down to that one item.
  while (lowIndex <= highIndex) {
    let midPointIndex = Math.floor((lowIndex + highIndex) / 2); // Find the middle index of array
    let midPointValue = data[midPointIndex]; // Find the value of the item at the midPointIndex

    if (value === midPointValue) {
      // If the value we're searching for matches the midPointValue, return true
      return true;
    } else if (midPointValue < value) {
      // If the value we're searching for is greater than the midPointValue, we know the value is in the right half of the array
      // Move the lowIndex to the middle, since we know that the items before the middle are not the values we're searching for
      lowIndex = midPointIndex + 1; // Since we already compared against the value at the midPoint, moving index +1 past it.
    } else {
      // Move the highIndex to the middle, since we know that the items after the middle are not the values we're searching for
      highIndex = midPointIndex - 1; // Since we already compared against the value at the midPoint, moving index -1 before it.
    }
  }

  return false;
};

const arr = [4, 8, 9];
const arr2 = [4, 8, 9, 10];
console.log(binarySearch(arr, 8));
console.log(binarySearch(arr2, 9));
console.log(binarySearch(arr2, 10));
