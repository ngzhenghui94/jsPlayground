// nested array
const numbersOne = [
  [1, 2, 3, 4],
  [5, 6],
];
const flatNumbersOne = numbersOne.flat();
console.log(flatNumbersOne);

// two level dept array
const numbersTwo = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbersTwo = numbersTwo.flat(2);
console.log(flatNumbersTwo);

// If we don't know the dept of the array
const numbersThree = [
  [1, 2, 3],
  [4, [5, 6], [7, 8]],
  [9, 10],
];
const flatNumbersThree = numbersThree.flat(Infinity);
console.log(flatNumbersThree);

//if an array has empty vals
const numbersFour = [1,2,,4,5,,8]
const flatNumbersFour = numbersFour.flat()
console.log(flatNumbersFour)