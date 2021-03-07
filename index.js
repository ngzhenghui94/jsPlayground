/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = (nums, n) => {
  console.log("Received List: " + nums);
  console.log("Constant: " + n);
  const outputList = nums.map((val, idx) => {
    console.log("Current Value: " + val + " Current Idx: " + idx);
    nums[n * (idx % 2) + Math.floor(idx / 2)];
  });
  return outputList;
};

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
console.log(shuffle(nums, n));
